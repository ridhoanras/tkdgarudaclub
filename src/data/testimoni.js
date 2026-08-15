/**
 * Sumber data testimoni "bawaan" (seed).
 *
 * Dipakai di dua tempat:
 * 1) Beranda (src/pages/index.js) — menampilkan 3 cerita pilihan secara statis,
 *    di-build ke HTML saat build time seperti biasa.
 * 2) Halaman /testimoni/ — dipakai sebagai isi awal Netlify Blobs (lihat
 *    netlify/functions/testimoni.js) SEKALI saja saat blob belum pernah dibuat,
 *    dan sebagai fallback tampilan bila endpoint function belum aktif
 *    (misalnya saat menjalankan `gatsby develop` biasa tanpa `netlify dev`).
 *
 * Testimoni baru yang dikirim lewat formulir di /testimoni/ TIDAK ditulis ke file
 * ini — itu tersimpan otomatis di Netlify Blobs lewat function dan langsung
 * tayang publik tanpa peninjauan. Mengedit array di bawah ini hanya mengubah
 * 3 cerita pilihan di beranda dan isi awal seed, bukan cerita kiriman pengguna.
 */
const TESTIMONI = [
  {
    kutipan:
      "Anak saya yang dulu pemalu sekarang berani tampil di depan kelas. Pelatihnya sabar tapi tegas.",
    nama: "Ibu Ratna",
    peran: "Orang tua murid Little Tigers",
  },
  {
    kutipan:
      "Program kompetisinya serius. Dalam setahun saya naik dari sabuk biru ke merah dan lolos Porprov.",
    nama: "Dimas A.",
    peran: "Atlet Kelas Kompetisi",
  },
  {
    kutipan:
      "Jadwalnya fleksibel untuk pekerja kantoran dan tetap bikin keringetan. Worth it.",
    nama: "Sarah W.",
    peran: "Kelas Dewasa & Kebugaran",
  },
]

export default TESTIMONI
