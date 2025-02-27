import React from "react";
import PesantrenCarousel from "../components/PesantrenCarousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function ProfilPesantren() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section dengan Carousel */}
      <section className="relative h-[500px] md:h-[600px]">
        <PesantrenCarousel />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Pondok Pesantren Assyafiiyah
          </motion.h1>
          <motion.p
            className="mt-3 text-xl md:text-2xl text-green-200 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            "Berfikir, Berdzikir, dan Beramal"
          </motion.p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto px-6 md:px-12 py-12 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kolom Kiri: Gambar Representatif */}
          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/public/images/p1.jpg"
              alt="Profil Pesantren"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Kolom Kanan: Informasi Profil */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-green-800 mb-4 font-serif">
              Tentang Pesantren
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Pondok Pesantren Assyafiiyah adalah pondok pesantren yang terletak di desa Bungah, tepatnya di gang depan Kapolsek Bungah, JL. Nongko Kerep Bungah. Pesantren ini berlokasi persis di selatan Pasar Legi Bungah, sebuah pasar tradisional yang hanya beroperasi setiap hari "Legi" dalam kalender Jawa.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed text-lg">
              Pendiri Pondok Pesantren Assyafiiyah adalah almaghfurlah K.H. Muhammad Maliki Syafii, yang dilahirkan pada sekitar tahun 1944 di desa Jati Sari, Glagah, Lamongan, Jawa Timur. Beliau mendirikan pesantren ini dengan tujuan untuk mendalami dan mengamalkan ilmu agama Islam serta menciptakan kehidupan yang harmonis dan aman sesuai dengan ajaran Islam.
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed text-lg">
              Nama "Assyafiiyah" diambil untuk mengenang dan memuliakan ayah beliau, K.H. Syafii, yang selalu mendukung dan mendoakan beliau dalam mendirikan pesantren ini. Pondok Pesantren Assyafiiyah berlandaskan pada ajaran Ahlusunnah wal Jamaah, yang menekankan pada prinsip-prinsip hidup sesuai dengan sunnah Rasulullah SAW.
            </p>
          </motion.div>
        </div>

        {/* Sejarah Pendiri dan Latar Belakang */}
        <div className="mt-16">
          <motion.h3
            className="text-3xl font-semibold text-green-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Sejarah Pendiri dan Latar Belakang
          </motion.h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Adapun pendiri dari Pondok Pesantren Assyafiiyah adalah almaghfurlah K.H. Muhammad Maliki Syafii. Beliau dilahirkan pada sekitar tahun 1944 di desa Jati Sari, Glagah, Lamongan, Jawa Timur. Setelah menyelesaikan seluruh studi-Nya, beliau diperintah oleh para Kyai, Ustadz, dan orang-orang yang terdekat dengan beliau untuk mengamalkan ilmu serta mengabdi di masyarakat. 
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Singkat cerita, setelah mengamalkan segala ilmu yang dimiliki di masyarakat bahkan di berbagai daerah, beliau merasa bahwa beliau memiliki inisiatif serta keinginan untuk mendirikan sebuah lembaga pendidikan untuk mensyiarkan agama Islam. Beliau didorong oleh beberapa orang terdekat untuk mendirikan Pondok Pesantren Assyafiiyah. Dengan mengucapkan Bismillah, didorong oleh keinginan yang kuat dan mantap, serta dengan kesungguhan untuk mensyiarkan agama Islam, beliau akhirnya mendirikan Pondok Pesantren Assyafiiyah. 
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Pondok pesantren ini didirikan sebagai sarana untuk mendalami dan mengamalkan ilmu agama Islam di tengah masyarakat, dengan tujuan untuk menciptakan kehidupan yang harmonis, aman, dan tentram sesuai dengan ajaran Islam. Pondok pesantren merupakan tempat untuk mempelajari berbagai macam ilmu agama, sekaligus menjadi sarana untuk mengamalkan ilmu tersebut dalam kehidupan sehari-hari.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Nama "Assyafiiyah" diambil dari nama ayah beliau, K.H. Syafii, yang selalu mendoakan dan mendorong beliau untuk menjadi seorang insan yang bermanfaat bagi umat. Pondok pesantren ini berlandaskan pada ajaran Ahlusunnah wal Jamaah, yaitu ajaran yang menekankan pada prinsip hidup yang sesuai dengan sunnah Rasulullah SAW.
          </p>
        </div>

        {/* Proses Pendirian dan Perkembangan */}
        <div className="mt-16">
          <motion.h3
            className="text-3xl font-semibold text-green-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Proses Pendirian dan Perkembangan
          </motion.h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Pada awal pembangunan Pondok Pesantren Assyafiiyah, dimulai dengan mendirikan pondasi yang kuat. Setelah pondasi yang kokoh terbangun, langkah berikutnya adalah pembangunan ruang Ndalem dan Mushollah terlebih dahulu. Proses ini dimulai pada tahun 1988, bertepatan dengan kelahiran putra terakhir beliau dari istri beliau, Ibu Mashanah. 
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Setelah beberapa tahun berlalu, pembangunan dilanjutkan dengan pembangunan beberapa kamar yang awalnya diperuntukkan sebagai tempat menginap keluarga dan sanak saudara. Pada saat itu, tujuan utama dakwah dan penyebaran agama Islam dilakukan melalui orang-orang terdekat beliau. Pada awalnya, tempat ini belum dinamakan Pondok Pesantren, hanya sebatas rumah biasa yang dilengkapi dengan Mushollah.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Seiring waktu, jumlah penghuni dan santri yang belajar semakin bertambah. Maka, pada tahun 1991, Asrama Roudhlotul Tholabah secara resmi dan formal menjadi Pondok Pesantren Assyafiiyah. Ini semua merupakan hasil dari ikhtiar beliau yang istiqomah dalam berjuang, serta dukungan dan doa dari berbagai pihak dan masyarakat yang turut serta berpartisipasi dalam pembangunan Pondok Pesantren Assyafiiyah.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Pada awal pembangunan, santri dan siswa, baik putera maupun puteri, masih menempati satu bangunan yang dipisahkan dengan tembok kokoh dari batu bata dan lapisan cor-coran. Namun, seiring berjalannya waktu, pada tahun 2003, Pondok Pesantren Assyafiiyah berhasil membangun kompleks baru di sebelah barat Mushollah Al Hidayah yang khusus diperuntukkan untuk santri putera. Pembaruan dan perbaikan sarana dan prasarana ini bertujuan untuk mendukung kegiatan belajar mengajar yang semakin berkembang, baik dalam segi kualitas maupun kuantitas.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Pondok Pesantren Assyafiiyah terus berkembang pesat dari segi fisik maupun kegiatan, menjadi salah satu pusat pendidikan Islam yang disegani dan dihormati di daerah sekitar, bahkan menjangkau berbagai daerah lainnya.
          </p>
        </div>

        {/* Visi dan Misi */}
        <div className="mt-16">
          <motion.h3
            className="text-3xl font-semibold text-green-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Visi dan Misi
          </motion.h3>

          <div className="bg-green-100 p-8 rounded-lg shadow-xl">
            <h4 className="text-2xl font-semibold text-green-800 mb-4">VISI</h4>
            <p className="text-lg leading-relaxed text-gray-700">
              Terlahirnya santri-santri yang berkarakter ulul albab. Karakter utama ulul albab adalah pribadi dengan jiwa penuh optimisme dalam mengatasi persoalan kehidupan, bertanggung jawab, memiliki kekuatan analisis kritis dan kreatif terhadap kenyataan sosial, dan bertindak transformatif.
            </p>
          </div>

          <div className="bg-green-800 text-white p-8 rounded-lg shadow-xl mt-8">
            <h4 className="text-2xl font-semibold mb-4">MISI</h4>
            <ul className="list-disc list-inside text-lg space-y-3">
              <li>Mengembangkan pendidikan dan pembelajaran pesantren berbasis salafiyah.</li>
              <li>Mengembangkan pemikiran keislaman yang kontekstual-transformatif berbasis pesantren.</li>
              <li>Mengembangkan program kaderisasi dakwah berbasis pesantren.</li>
              <li>Melaksanakan kegiatan pembelajaran dan kependidikan dengan karakter.</li>
            </ul>
          </div>
        </div>

        {/* Metode Pengajaran */}
        <div className="mt-16">
          <motion.h3
            className="text-3xl font-semibold text-green-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Metode Pengajaran
          </motion.h3>
          <p className="text-gray-700 leading-relaxed text-lg">
            Pondok Pesantren Assyafiiyah mengajarkan ilmu agama dengan dua metode utama: Sarogan dan Bandongan. Dalam Sarogan, santri membaca kitab kuning dan diberikan kesempatan untuk menjelaskan isi dan argumen dari kitab tersebut. Sementara itu, dalam Bandongan, seluruh santri berkumpul untuk mempelajari kitab salafiyah di bawah bimbingan langsung dari para ustadz atau kyai.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed text-lg">
            Pondok pesantren ini telah meluluskan lebih dari 1.000 alumni yang tersebar di berbagai daerah dan berkontribusi pada masyarakat, termasuk mendirikan pesantren baru, majelis ta'lim, serta menjadi pengusaha dan profesional sukses.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProfilPesantren;
