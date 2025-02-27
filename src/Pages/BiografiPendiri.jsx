import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BiografiPendiri() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/abahyai.jpg")' }}
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
        <div className="flex flex-col md:flex-row gap-8">
          {/* Foto Pendiri */}
          <div className="md:w-1/3">
            <img
              src="/images/abahyai.jpg"
              alt="Foto Pendiri"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
          {/* Informasi Biografi */}
          <div className="md:w-2/3 space-y-6">
            <p className="text-lg font-semibold text-green-800">
              Pendiri Pesantren: <span className="font-bold">K.H. M. Maliki Syafii</span>
            </p>
            <div className="text-gray-700 space-y-4">
              <p>
                <strong>A. Biografi:</strong> Beliau mempunyai nama lengkap{" "}
                <span className="font-bold">M. MALIKI SYAFII BIN SYAFII</span> yang dilahirkan pada tanggal{" "}
                <span className="font-bold">30 Juni 1944</span> di desa Jatisari, Kecamatan Glagah, Kabupaten Lamongan.
                Dengan seorang ayah bernama <span className="font-bold">SYAFII</span> dan ibu bernama{" "}
                <span className="font-bold">NIHAYAH</span>, beliau memiliki lima anak:{" "}
                <em>Musidah, Nur Qomariyah, Uswatun Hasanah, M. Sholahuddin, dan Ach. Husnul Khitam</em>.
              </p>
              <p>
                Beliau tumbuh dalam kondisi sulit setelah ditinggal wafat oleh ayahnya di usia satu tahun,
                yang membentuk kepribadian beliau menjadi sosok yang mandiri, berjiwa besar, dan memiliki tekad
                kuat untuk menuntut ilmu sebanyak mungkin.
              </p>
            </div>

            {/* Pendidikan */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-green-800">B. Pendidikan</h2>
              <p className="text-gray-700">
                K.H. M. Maliki Syafii dikenal sebagai sosok yang bersemangat tinggi dalam menuntut ilmu. Dengan dukungan
                ayah angkatnya, beliau bersekolah di <span className="font-bold">MINU Assaadah Sampurnan Bungah, Gresik</span>,
                sambil mondok di <span className="font-bold">Pondok Pesantren Qomaruddin</span>.
              </p>
              <p className="text-gray-700">
                Selama mondok, beliau dikenal rajin, tawadhu’, dan selalu mengutamakan <em>ta’dzim</em> kepada kyai serta guru-gurunya.
                Beliau juga melakukan <strong>tirakat</strong> seperti sholat malam, puasa, dan berbagai amalan yang mendekatkan
                dirinya pada ilmu dan keberkahan.
              </p>
              <p className="text-gray-700">
                Setelah menyelesaikan pendidikannya di Bungah, beliau melanjutkan studi ke{" "}
                <span className="font-bold">Pondok Pesantren Langitan</span> di Tuban, di mana beliau menghafal kitab{" "}
                <em>Alfiyah Ibnu Malik</em> secara istiqomah, meskipun menghadapi berbagai cobaan berat, termasuk sakit keras.
              </p>
            </div>

            {/* Dedikasi dan Ketekunan */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-green-800">Dedikasi dan Ketekunan</h2>
              <p className="text-gray-700">
                Selama di Langitan, beliau dikenal sebagai santri yang dekat dengan Kyai Abdul Hadi. Karena dedikasinya,
                beliau sering diundang ke <em>ndalem</em> kyai untuk membantu dan mendapatkan wejangan berharga.
                Beliau juga menjadi penyalin kitab yang dikarang oleh Romo Yai.
              </p>
              <p className="text-gray-700">
                Dengan ketekunannya, beliau mendapatkan julukan <span className="font-bold">"Shohibul Alfiyah"</span>,
                sebagai bentuk penghargaan atas usahanya dalam mendalami dan menghafal kitab, baik dari kalangan santri maupun alumni.
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

export default BiografiPendiri;
