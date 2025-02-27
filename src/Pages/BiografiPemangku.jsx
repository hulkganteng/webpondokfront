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
                Pemangku Pesantren: <strong>KH. [Nama Pemangku]</strong>
              </p>
              <p className="text-gray-700">
                KH. [Nama Pemangku] lahir di [Tempat Lahir], pada [Tanggal Lahir]. Beliau
                merupakan salah satu pemangku Pondok Pesantren Assyafiiyah yang memiliki
                peran penting dalam melanjutkan perjuangan pendiri pesantren.
              </p>
              <p className="text-gray-700">
                Dengan dedikasi tinggi, beliau membimbing para santri untuk memahami dan
                mengamalkan ilmu agama Islam dalam kehidupan sehari-hari. Kepemimpinannya
                dikenal penuh keteladanan, keikhlasan, dan semangat mendidik generasi penerus bangsa.
              </p>
              <p className="text-gray-700">
                Sepanjang hidupnya, KH. [Nama Pemangku] senantiasa istiqomah dalam mengajarkan
                nilai-nilai Ahlussunnah wal Jamaah kepada seluruh santri dan masyarakat sekitar.
                Keilmuan dan akhlaknya yang mendalam menjadi panutan bagi banyak kalangan.
              </p>
            </div>
          </div>

          {/* Informasi Tambahan */}
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-green-700">Pendidikan</h3>
              <div className="mt-4 text-gray-700 space-y-4">
                <p>
                  KH. [Nama Pemangku] mendapatkan pendidikan awal di lingkungan pesantren. Beliau
                  kemudian melanjutkan studinya di berbagai pondok pesantren ternama, termasuk
                  [Nama Pesantren], di mana beliau belajar langsung dari para ulama terkemuka.
                </p>
                <p>
                  Dalam perjalanan menuntut ilmu, beliau dikenal sebagai santri yang rajin, tawadhu’, dan
                  bersemangat tinggi. Dengan bekal ilmu yang mendalam, beliau kembali ke kampung halaman
                  untuk mengabdikan ilmunya dan membangun Pondok Pesantren Assyafiiyah.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-700">Keteladanan</h3>
              <p className="mt-4 text-gray-700">
                Kepemimpinan KH. [Nama Pemangku] menginspirasi banyak kalangan, baik di dalam pesantren
                maupun di masyarakat luas. Keteguhan beliau dalam mendidik santri dan membina umat
                menjadi teladan yang patut dicontoh.
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
