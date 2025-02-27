import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BiografiPemangku() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Header Hero */}
      <header
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/abigus.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Biografi Pemangku
          </h1>
          <p className="mt-2 text-lg text-green-300 drop-shadow">
            Jejak Inspiratif & Kepemimpinan
          </p>
        </div>
      </header>

      {/* Konten Utama */}
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Foto Pemangku */}
            <div className="md:w-1/3">
              <img
                src="/images/abigus.jpg"
                alt="Foto Pemangku"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
            {/* Deskripsi Biografi */}
            <div className="md:w-2/3 space-y-4">
              <h2 className="text-3xl font-bold text-green-800">Biografi Pemangku</h2>
              <p className="text-gray-700">
                Pemangku Pesantren: <strong>Moh. Nasih Aly</strong>
              </p>
              <p className="text-gray-700">
                Moh. Nasih Aly lahir di Bungah, Gresik pada 11 Januari 1970. Beliau memiliki latar belakang pendidikan yang kaya dan mendalam. Beliau menempuh pendidikan formal di MI Tarbiyatul Athfal Wangen Glagah Lamongan, Mts Assa'adah 1 Bungah Gresik, dan MA Assa'adah Bungah Gresik. Selain itu, beliau juga melanjutkan pendidikan informal di Mts Alfalahiyah Langitan Widang Tuban dan MA Alfalahiyah Langitan Widang Tuban, yang semakin memperkaya pengetahuan keislamannya.
              </p>
              <p className="text-gray-700">
                Dalam perjalanan ilmiah dan spiritualnya, Moh. Nasih Aly banyak dibimbing oleh para ulama terkemuka seperti KH Ahmad Muhammad Alhammad Sampurnan Bungah, KH Ahmad Zubair Sampurnan Bungah, KH Maimun Adnan Bungah, KH Abdullah Faqih Langitan, dan KH Ahmad Marzuqi Langitan. Pengaruh dari para guru beliau sangat berperan dalam membentuk pemahaman dan kepribadian beliau yang mendalam terhadap ajaran Islam.
              </p>
            </div>
          </div>

          {/* Informasi Tambahan */}
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-green-700">Perjalanan Keilmuan dan Dakwah</h3>
              <div className="mt-4 text-gray-700 space-y-4">
                <p>
                  Sejak lulus dari SDN/MI pada tahun 1983, beliau melanjutkan mondok dan sekolah di Mts dan MA Assa'adah. Ketika di Mts, beliau tinggal bersama keluarga dekat dari pihak ibu. Setelah lulus dari Mts, beliau melanjutkan pendidikan Aliyah sambil mondok di Pondok Pesantren Qomaruddin.
                </p>
                <p>
                  Setelah menyelesaikan pendidikan di MA Assa'adah pada tahun 1998, beliau melanjutkan mondok di Pondok Pesantren Langitan Widang Tuban. Di tengah proses mondoknya, pada tahun 1993 beliau diajak oleh guru beliau, KH Mohammad Yamin Mu'allim, untuk mengajar di Pondok Pesantren Al Barokah yang baru beberapa tahun berdiri di Gilang Babat Lamongan. Di sana, beliau juga ikut berdakwah di masyarakat sekitar, mengisi jamaah tahlil dan mengajar ngaji rutinan ibu-ibu pada hari Jumat sore, yang diasuh oleh KH Mohammad Yamin Mu'allim ketika beliau berhalangan.
                </p>
                <p>
                  Pada tahun 1998, beliau menjadi menantu dari KH Maliki Syafi'i, pendiri dan pengasuh Pondok Pesantren Assyafiiyah Bungah Gresik, dan menetap di Bungah hingga sekarang. Ini menjadi titik penting dalam perjalanan beliau, mengikat hubungan lebih erat dengan pesantren yang akan menjadi tempat pengabdian beliau dalam bidang pendidikan agama.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-700">Peran dalam Pesantren</h3>
              <p className="mt-4 text-gray-700">
                Moh. Nasih Aly mulai berperan di Pondok Pesantren Assyafiiyah sejak menikah dengan putri KH Maliki Syafi'i pada tahun 1998. Dengan dedikasi dan semangat, beliau mulai menanamkan tradisi santri salaf yang mengedepankan praktik langsung dari kitab Ta'limul Muta'allim. Dalam pandangan beliau, santri harus tetap mengenyam pendidikan formal, namun ngaji di pesantren menjadi kewajiban yang tidak bisa ditinggalkan, terutama untuk memastikan bahwa setiap santri bisa membaca Al-Qur'an dengan baik dan benar serta mengamalkan ilmu agama yang mereka peroleh dari pesantren, di samping berakhlakul karimah dalam kehidupan sehari-hari.
              </p>
              <p className="mt-4 text-gray-700">
                Setelah KH Maliki Syafi'i wafat pada Jumat Pon, 8 Desember 2004 M / 25 Syawal 1425 H, Moh. Nasih Aly mulai memimpin Pondok Pesantren Assyafiiyah. Dalam kepemimpinan beliau, fokus utama adalah pengawasan terhadap santri dan peningkatan kualitas pendidikan. Seiring dengan perkembangan pesantren, banyak perubahan sistem yang dilakukan baik di madrasah diniyyah maupun di pesantren itu sendiri untuk kemajuan dan perkembangan santri.
              </p>
              <p className="mt-4 text-gray-700">
                Salah satu inovasi yang beliau terapkan adalah memberikan ruang bagi santri untuk mengikuti perkembangan zaman, namun tetap menjaga norma-norma pesantren. Beliau juga mendorong santri untuk bisa belajar di luar pesantren melalui pendidikan formal, dengan harapan ketika mereka pulang ke daerah masing-masing, mereka dapat menguasai ilmu dunia dan ilmu akhirat secara seimbang.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BiografiPemangku;
