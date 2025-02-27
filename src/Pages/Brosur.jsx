import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaDownload, FaTimes } from "react-icons/fa";

function Brosur() {
  const [zoomImage, setZoomImage] = useState(null);

  const openZoom = (image) => {
    setZoomImage(image);
  };

  const closeZoom = () => {
    setZoomImage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-4xl font-extrabold text-green-800 mb-6">
          Brosur Pesantren
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Silakan lihat dan unduh brosur pesantren untuk informasi lebih lanjut.
        </p>

        {/* Grid Brosur */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Brosur 1 */}
          <div className="flex flex-col items-center">
            <div
              className="overflow-hidden rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition"
              onClick={() => openZoom("/images/brosur1.jpg")}
            >
              <img
                src="/images/brosur1.jpg"
                alt="Brosur Pesantren 1"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Tombol Download */}
            <a
              href="/images/brosur1.jpg"
              download
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition"
            >
              <FaDownload />
              <span>Download Brosur</span>
            </a>
          </div>

          {/* Brosur 2 */}
          <div className="flex flex-col items-center">
            <div
              className="overflow-hidden rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition"
              onClick={() => openZoom("/images/brosur2.jpg")}
            >
              <img
                src="/images/brosur2.jpg"
                alt="Brosur Pesantren 2"
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* Tombol Download */}
            <a
              href="/images/brosur2.jpg"
              download
              className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition"
            >
              <FaDownload />
              <span>Download Brosur</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal Zoom Image */}
      {zoomImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
            {/* Tombol Close */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition"
              onClick={closeZoom}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            {/* Gambar Zoom */}
            <img src={zoomImage} alt="Zoomed Brosur" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Brosur;
