// Netlify Function — penyimpanan testimoni memakai Netlify Blobs (bawaan Netlify,
// otomatis tersedia di production tanpa perlu API key/akun tambahan; untuk
// pengembangan lokal jalankan lewat `netlify dev`, BUKAN `gatsby develop` saja).
//
// PERILAKU: tidak ada tahap peninjauan admin sama sekali. Begitu POST divalidasi
// (honeypot kosong + panjang teks wajar), entri langsung disimpan dan langsung
// ikut muncul untuk SEMUA pengunjung saat mereka membuka /testimoni/. Karena
// tidak ada moderasi manusia, satu-satunya pengaman terhadap spam/penyalahgunaan
// adalah validasi di bawah ini (panjang teks, honeypot, dan rate limit per IP).
const { getStore } = require("@netlify/blobs")

const LIST_KEY = "list"
const RATE_LIMIT_MS = 30 * 1000 // 1 kiriman per IP per 30 detik
const MAX_ITEMS = 500 // batas jumlah entri yang disimpan, agar blob tidak membengkak

const SEED = [
  {
    id: "seed-1",
    nama: "Ibu Ratna",
    peran: "Orang tua murid Little Tigers",
    kutipan:
      "Anak saya yang dulu pemalu sekarang berani tampil di depan kelas. Pelatihnya sabar tapi tegas.",
    createdAt: "2024-01-10T00:00:00.000Z",
  },
  {
    id: "seed-2",
    nama: "Dimas A.",
    peran: "Atlet Kelas Kompetisi",
    kutipan:
      "Program kompetisinya serius. Dalam setahun saya naik dari sabuk biru ke merah dan lolos Porprov.",
    createdAt: "2024-02-14T00:00:00.000Z",
  },
  {
    id: "seed-3",
    nama: "Sarah W.",
    peran: "Kelas Dewasa & Kebugaran",
    kutipan: "Jadwalnya fleksibel untuk pekerja kantoran dan tetap bikin keringetan. Worth it.",
    createdAt: "2024-03-02T00:00:00.000Z",
  },
]

const JSON_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  // Endpoint publik dipanggil langsung dari browser situs; batasi origin di production
  // lewat env var ALLOWED_ORIGIN bila perlu, default "*" agar mudah dites.
  "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
}

function json(statusCode, body) {
  return { statusCode, headers: JSON_HEADERS, body: JSON.stringify(body) }
}

// Escape sederhana untuk jaga-jaga bila data ini dikonsumsi di tempat lain
// selain React (React sendiri sudah otomatis meng-escape teks saat render).
function stripTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, "")
}

function getClientIp(event) {
  const fwd = event.headers["x-nf-client-connection-ip"] || event.headers["x-forwarded-for"] || ""
  return fwd.split(",")[0].trim() || "unknown"
}

function validate(payload) {
  const errors = {}
  const nama = (payload.nama || "").trim()
  const peran = (payload.peran || "").trim()
  const kutipan = (payload.kutipan || "").trim()

  if (nama.length < 3 || nama.length > 60) errors.nama = "Nama harus 3–60 karakter."
  if (peran.length > 60) errors.peran = "Peran maksimal 60 karakter."
  if (kutipan.length < 20 || kutipan.length > 500)
    errors.kutipan = "Cerita harus 20–500 karakter."

  return { errors, clean: { nama: stripTags(nama), peran: stripTags(peran) || "Keluarga Garuda Club", kutipan: stripTags(kutipan) } }
}

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: JSON_HEADERS, body: "" }
  }

  const store = getStore("testimoni")

  if (event.httpMethod === "GET") {
    const list = (await store.get(LIST_KEY, { type: "json" })) || SEED
    // Terbaru duluan.
    const sorted = [...list].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    return json(200, { items: sorted })
  }

  if (event.httpMethod === "POST") {
    let payload
    try {
      payload = JSON.parse(event.body || "{}")
    } catch {
      return json(400, { error: "Body tidak valid." })
    }

    // Honeypot: kolom ini hanya boleh terisi oleh bot. Balas seolah sukses
    // supaya bot tidak tahu ditolak, tapi jangan benar-benar simpan datanya.
    if (payload["bot-field"]) {
      return json(200, { item: null, skipped: true })
    }

    const { errors, clean } = validate(payload)
    if (Object.keys(errors).length > 0) {
      return json(400, { error: "Validasi gagal.", errors })
    }

    // Rate limit sederhana per IP, karena tidak ada peninjauan manusia sama sekali —
    // ini satu-satunya pengaman utama terhadap bot yang mencoba mengirim berkali-kali.
    const ip = getClientIp(event)
    const rateKey = `ratelimit:${ip}`
    const lastSubmit = await store.get(rateKey, { type: "text" })
    if (lastSubmit && Date.now() - Number(lastSubmit) < RATE_LIMIT_MS) {
      return json(429, { error: "Terlalu sering mengirim. Coba lagi sebentar lagi." })
    }

    const list = (await store.get(LIST_KEY, { type: "json" })) || SEED
    const entry = {
      id: `t-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      nama: clean.nama,
      peran: clean.peran,
      kutipan: clean.kutipan,
      createdAt: new Date().toISOString(),
    }

    const nextList = [entry, ...list].slice(0, MAX_ITEMS)

    await store.setJSON(LIST_KEY, nextList)
    await store.set(rateKey, String(Date.now()))

    // Auto-publish: entri langsung dikembalikan & langsung akan muncul untuk
    // semua orang lewat GET berikutnya — tidak ada status "menunggu peninjauan".
    return json(201, { item: entry })
  }

  return json(405, { error: "Method not allowed." })
}
