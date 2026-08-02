import React from "react"
import Fade from "react-reveal/Fade"

const Testimonial = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-14 mb-14">
      <Fade bottom>
        <div className="w-full h-full  flex flex-row justify-between align-middle bg-[url('../images/holographic-background.webp')] p-12 rounded-lg xxs:flex-col xs:flex-col sm:flex-row xxs:p-5 lg:p-12">
          <div className="w-3/4 xxs:w-full xs:w-full backdrop-blur-sm bg-white/30 p-10 rounded-lg lg:p-10">
            <div className="text-black font-semibold text-xl xxs:text-s xxs:font-normal sm:text-xl font-notoserif">
              "Saya sangat senang bergabung dengan Taekwondo Garuda Club! Sejak
               awal, saya merasa diterima dan didorong untuk berkembang. 
               Pelatih-pelatih di sini sangat berpengalaman dan selalu siap 
               membantu, baik dalam teknik maupun dalam membangun kepercayaan
               diri. Latihan di Taekwondo Garuda Club bukan hanya tentang 
               belajar seni bela diri, tetapi juga tentang membangun karakter 
               dan disiplin. Atmosfernya sangat positif dan mendukung, dan saya
               merasa seperti bagian dari keluarga besar. Saya sangat 
               merekomendasikan Taekwondo Garuda Club kepada siapa saja yang 
               ingin belajar taekwondo dalam lingkungan yang profesional dan 
               ramah."
            </div>
            <div className="mt-10">
              <h3 className="text-black text-2xl font-smibold">Masukan</h3>
              <p className="text-black text-sm font-semibold opacity-50">
                Ulasan Orang Tua
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Testimonial
