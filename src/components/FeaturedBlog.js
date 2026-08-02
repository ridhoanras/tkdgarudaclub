import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = () => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8  ">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            TETAP TERBARU
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Postingan Terbaru
          </h3>
          <div className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-simibold mb-2">
              Ujian Kenaikan Tingkat Taekwondo Kota Tangerang Periode 1 Tanggal 19 Mei 2024
            </h2>
            <p className="text-lg  text-black opacity-60 mb-6">
              Ujian Kenaikan Tingkat Taekwondo Kota Tangerang Periode 1 Tanggal 19 Mei 2024 Secara resmi 
              di laksanakan di Puspem Kota Tangerang. Ujian Kenaikan Tingkat Taekwondo Kota Tangerang 
              ini untuk penilaianya Full Menggunakan Sistem Scooring Untuk Poomsae dan Kyorugi. Ujian 
              kenaikan tingkat ini di ikuti oleh seluruh club Taekwondo yang ada di Kota Tangerang dan
              sekitarnya yang jumlah total pesertanya Kurang lebih 2500 Taekwondoin.
            </p>
            <a
              href="/blog/ujian-kenaikan-tingkat-taekwondo-kota-tangerang-periode-1-tanggal-19-mei-2024"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple  hover:bg-purple"
            >
              Lanjutkan Membaca
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                Garuda Club Kembali Memperoleh Juara Umum 1 Dalam Kejuaraan Taekwondo Kapolres Cup Golden Eagle 2024
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Kejuaraan Taekwondo Golden Eagle 2024 Di Gor Nambo Kota Tangerang yang diselenggarakan 
                pada tgl 28 Juli 2024 di Gor Nambo Kota Tangerang di ikuti oleh peserta baik dari dalam 
                maupun luar daerah Kota Tangerang. Garuda Club Kembali meraih Juara Umum di beberapa 
                katagori dalam kejuaraan kali ini.
              </p>
              <a
                href="/blog/garuda-club-kembali-memperoleh-juara-umum-1-dalam-kejuaraan-taekwondo-kapolres-cup-golden-eagle-2024"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                Lanjutkan Membaca
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
            <div className="blog-hover bg-white rounded-lg p-8 md:p-12">
              <h2 className="text-gray-900 text-3xl font-simibold mb-2">
                Garuda club memperoleh Juara Umum 1 Pemula Di Indonesia BIGFEST Taekwondo Challenge 2023
              </h2>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Kejuaraan Indonesia BIGFEST Taekwondo Challenge 2023 Kejuaraan tersebut menggelar laga kelas 
                kyorugi dan poomsae baik pemula maupun prestasi. berlangsung di Indor Stadion Sport Center, 
                Kabupaten Tangerang pada 15 – 16 Juli 2023.
              </p>
              <a
                href="/blog/garuda-club-memperoleh-juara-umum-1-pemula-di-indonesia-bigfest-taekwondo-challenge-2023"
                className="transition-all duration-500ms ease-in-out hover:ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white  rounded-lg border border-purple  hover:bg-purple"
              >
                Lanjutkan Membaca
                <svg
                  className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
