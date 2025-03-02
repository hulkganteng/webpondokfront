import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaDownload, FaTimes } from "react-icons/fa";

function KegiatanTahunan() {
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-4xl font-extrabold text-green-800 mb-6">
          Kalender Tahunan
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Silakan lihat dan unduh kalender tahunan untuk informasi lebih lanjut.
        </p>

        {/* Kalender Image */}
        <div className="flex flex-col items-center">
          <div
            className="overflow-hidden rounded-xl shadow-lg border border-gray-200 cursor-pointer hover:shadow-xl transition"
            onClick={() => openZoom("/images/kalender.jpg")}
          >
            <img
              src="/images/kalender.jpg"
              alt="Kalender Tahunan"
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          {/* Download Button */}
          <a
            href="/images/kalender.jpg"
            download
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition"
          >
            <FaDownload />
            <span>Download Kalender</span>
          </a>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-4xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 transition"
              onClick={closeZoom}
            >
              <FaTimes className="w-6 h-6" />
            </button>
            {/* Zoomed Image */}
            <img src={zoomImage} alt="Zoomed Kalender" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default KegiatanTahunan;
