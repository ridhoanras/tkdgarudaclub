import React, { useState } from "react";
import Fade from "react-reveal/Fade";

// Assets
import HeroImage from "../../images/holographic-background-1.webp"
import Image1 from "../../images/3D-liquid-abstract-1.webp"
import Image2 from "../../images/3D-liquid-abstract.webp"
import Image3 from "../../images/3D-liquid-abstract-3.webp"

const FeatureSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    schoolLevel: "",
    email: "",
    phone: "",
    message: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format message
    const message = encodeURIComponent(
      `Nama: ${formData.name}\nJenjang Sekolah: ${formData.schoolLevel}\nEmail: ${formData.email}\nTelepon: ${formData.phone}\nPesan: ${formData.message}`
    );
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/628987898831?text=${message}`, "_blank");
  };

  const RegistrationSection = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    

    
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {/* Video Section 1 */}
          <div className="w-full max-w-sm bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5">
            <div className="video-container">
              <iframe
                className="w-full h-56 rounded-xl"
                src="https://www.youtube.com/embed/WevDqJnsr4I"
                title="YouTube video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Section 2 */}
          <div className="w-full max-w-sm bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5">
            <div className="video-container">
              <iframe
                className="w-full h-56 rounded-xl"
                src="https://www.youtube.com/embed/SJe8UDfOs7k"
                title="YouTube video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Section 3 */}
          <div className="w-full max-w-sm bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5">
            <div className="video-container">
              <iframe
                className="w-full h-56 rounded-xl"
                src="https://www.youtube.com/embed/keFn_ipe8iM"
                title="YouTube video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Section 4 */}
          <div className="w-full max-w-sm bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5">
            <div className="video-container">
              <iframe
                className="w-full h-56 rounded-xl"
                src="https://www.youtube.com/embed/5dJMz6fByzo"
                title="YouTube video 4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto lg:px-8 md:px-3">
        <div className="mx-auto max-w-7xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-0 xl:mt-10 flex flex-col lg:flex-row gap-3 lg:flex-justify">
          <div className="lg:w-1/2 my-4 flex justify-center">
            <img
              className="rounded-xl h-56 w-100 object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={HeroImage}
              alt="HeroImage"
            ></img>
          </div>

          <div className="lg:w-1/2 sm:text-center lg:text-right flex flex-col justify-center">
            <h2 className="text-black text-4xl font-semibold">MENGAPA</h2>
            <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
              Latihan di sini!
            </h3>

            <p className="mt-3 text-base text-black-70 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto lg:mr-0">
              Di Garuda Club, akan dilatih oleh pelatih bersertifikat yang memiliki pengalaman luas 
              dalam taekwondo. Mereka tidak hanya ahli dalam teknik tetapi juga dalam menginspirasi dan
              memotivasi peserta.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-end">
              <div className="rounded-md">
                <a
                  href="tel:#"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
                >
                  Hubungi kami sekarang
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/gallery"
                  className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 border border-purple text-base font-medium rounded-md text-black hover:text-white bg-transparent hover:bg-purple md:py-3 md:text-lg md:px-10"
                >
                  Lihat Galeri
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
      </div>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <span className="text-black font-semibold font-montserrat text-4xl">
              MANFAAT
            </span>
            <div className="mt-5">
              <div>
                <p className="text-black text-2xl">1. Menjaga Kewaspadaan</p>
                <p className="text-black opacity-50 text-sm">2. Mengasah Konsentrasi dan Kelenturan</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">3. Menambah Percaya Diri dan Keberanian</p>
                <p className="text-black opacity-50 text-sm">4. Meningkatkan Koordinasi dan Keseimbangan</p>
              </div>
              <div className="mt-5">
                <p className="text-black text-2xl">5. Meningkatkan Ketahanan Tubuh</p>
                <p className="text-black opacity-50 text-sm">
                6. Sebagai Prestasi non akademis untuk
                dipergunakan di jalur prestasi
                </p>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h2 className="text-white text-4xl">
            Mulai membangun prestasi di Taekwondo Garuda Club yang luar biasa
            </h2>
            <p className="mt-10 text-white opacity-70">
            Taekwondo Garuda Club, tempat di mana potensi Anak Ayah dan Bunda bertemu dengan peluang tak terbatas untuk
            membangun prestasi luar biasa! Di sini, kami tidak hanya mengajarkan teknik dan keterampilan 
            bela diri; kami membentuk karakter dan menginspirasi prestasi yang mengesankan.
            </p>
          </div>
        </div>
      </Fade>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          MEMBUKA PENDAFTARAN
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Hubungi Admin Untuk Menjadi Anggota 
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label htmlFor="name" className="block text-black">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <label htmlFor="schoolLevel" className="block text-black">Jenjang Sekolah</label>
            <select
              id="schoolLevel"
              name="schoolLevel"
              value={formData.schoolLevel}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Pilih Jenjang Sekolah</option>
              <option value="BelumSekolah">Belum Sekolah</option>
              <option value="KelasTK">Kelas TK</option>
              <option value="Kelas1">Kelas 1</option>
              <option value="Kelas2">Kelas 2</option>
              <option value="Kelas3">Kelas 3</option>
              <option value="Kelas4">Kelas 4</option>
              <option value="Kelas5">Kelas 5</option>
              <option value="Kelas6">Kelas 6</option>
              <option value="Kelas7">Kelas 7</option>
              <option value="Kelas8">Kelas 8</option>
              <option value="Kelas9">Kelas 9</option>
              <option value="Kelas10">Kelas 10</option>
              <option value="Kelas11">Kelas 11</option>
              <option value="Kelas12">Kelas 12</option>
              <option value="LulusSekolah">Lulus Sekolah</option>
            </select>
        <div>
          <label htmlFor="email" className="block text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-black">Telepon</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-black">Pesan (Opsional)</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-pink to-purple text-white rounded-md hover:bg-gradient-to-l hover:from-purple hover:to-pink"
        >
          Kirim Formulir
        </button>
      </form>
    </div>

      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold opacity-70">
          INTEGRASI
        </h2>
        <h3 className="text-black text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
          Kami Terintegrasi dengan unit
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          1. SDIT Granada Karawaci Kota Tangerang; 2. SD Bina Nusa Rajeg Kab. Tangerang; 
          3. Selasar Puspem Kota Tangerang; 4. TKIT Granada Karawaci Kota Tangerang; 
          5. Sunbright TangCity Tangerang Kota Tangerang; 6. Sunbright Citra Raya Cikupa Kab. Tangerang;
          7. SD Mutiara Hati Tangerang Kota Tangerang; 8. SMA Islamic Village Kelapa Dua Kab. Tangerang;
          9. SD Al-Ikhlas Cipondoh Kota Tangerang; 10. SMP Nusantara 1 Karawaci Kota Tangerang; 
          11. SMA Nusantara 1 Karawaci Kota Tangerang; 12. SMK Nusantara 1 Karawaci Kota Tangerang;
          13. SDIT Insan Mutiara Madani Cibodas Kota Tangerang; 14. SDN Tangerang 4 Tangerang Kota Tangerang;
          15. SDN Karawaci Baru 1 Karawaci Kota Tangerang; 16. SD Asy-Syukkriyah Faturrahman; 
          17. SDIT Al-Fathir Batuceper Kota Tangerang; 18. SDIT AL-Iatiqomah 2 Cibodas Kota Tangerang;
          19. MI Plus Asy-Syukkriyah Cipondoh Kota Tangerang; 20. SMPIT Asy-Syukkriyah Cipondoh Kota Tangerang;
          21. SDN Sukasari 5 Tangerang Kota Tangerang; 22. SMPIT Granada Karawaci Kota Tangerang;
          23. SMAIT Granada Karawaci Kota Tangerang; 24. SDN Tangerang 1 Tangerang Kota Tangerang;
          25. SDIT Indria Islamic School Sepatan Kab. Tangerang; 26. SDN Daan Mogot 1 Tangerang Kota Tangerang;
          27. SDN Daan Mogot 3 Tangerang Kota Tangerang; 28. SDN Sukasari 3 Tangerang Kota Tangerang;
          29. SDN Sukasari 6 Tangerang Kota Tangerang; 30. MIN 1 Tangerang Kota Tangerang; 
          31. Komplek Garuda Cipondoh Kota Tangerang; 32. SDN Tanah Tinggi 1 Tangerang Kota Tangerang;
          33. SDN Tanah Tinggi 2 Tangerang Kota Tangerang; 34. SDN Tanah Tinggi 3 Kota Tangerang;
          35. Perumahan Sutera Mediterania Rajeg Kab. Tangerang; 36. Jl. Sigura-gura Kelapa Dua Kab. Tangerang;
          37. SDN Total Persada Periuk Kota Tangerang; 38. SMP PGRI Periuk Kota Tangerang;
          39. Perumahan Palem 9 Sepatang Timur Kab. Tangerang; 40. Tang City Mall Tangerang Kota Tangerang;
          41. SMA PGRI 109 Karawaci Kota Tangerang; 42. SMK PGRI 109 Karawaci Kota Tangerang. 
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-black border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Kirim Pertanyaan
            </a>
          </div>
        </div>
      </div>

      <Fade bottom cascade>
        <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3 px-5">
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image1}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 flex justify-center">
            <img alt="Image" src={Image2}></img>
          </div>
          <div className="rounded-xl overflow-hidden relative hover:opacity-100 hidden lg:block ">
            <img alt="Image" src={Image3}></img>
          </div>
        </div>
      </Fade>

      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
          <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-black text-2xl">42</h3>
            <h4 className="mt-10 text-black opacity-70 text-xl">Total Unit</h4>
          </div>

          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Kota Tangerang</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              35
            </h4>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-1/3">
            <h3 className="text-white text-2xl">Kabupaten Tangerang</h3>
            <h4 className="mt-10 text-white opacity-70 text-xl">
              7
            </h4>
          </div>
        </div>
      </Fade>
      {/* 
      <div className="mt-10 px-8">
        <h2 className="text-black text-4xl font-semibold text-gradient bg-gradient-to-r from-pink to-purple">
          {" "}
          Integrations
        </h2>
        <h3 className="text-black mt-5 font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
          Discover, connect, and configure
        </h3>
        <p className="text-black opacity-70 font-normal mt-3 text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded-md">
            <a
              href="/contact/"
              className="transition-all duration-500ms ease-in-out hover:ease-in-out w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-center bg-purple text-white hover:text-purple border border-purple hover:bg-transparent md:text-lg md:px-10"
            >
              Send Enquiry
            </a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default FeatureSection
