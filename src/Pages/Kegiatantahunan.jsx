import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function KegiatanTahunan() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto mt-5 px-4">
        <h2 className="text-center mb-4 text-2xl font-bold">Kalender Tahunan</h2>
        <div className="text-center">
          <p className="mb-4">
            Kalender tahunan dalam format PDF dapat dilihat di bawah ini:
          </p>
          <div className="w-full h-[600px] border border-gray-300 bg-gray-100">
            <embed
              src="/public/kalenderkegiatan.pdf"
              type="application/pdf"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            href="/kalender_tahunan.pdf"
            download="Kalender_Tahunan.pdf"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Unduh Kalender
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default KegiatanTahunan;
