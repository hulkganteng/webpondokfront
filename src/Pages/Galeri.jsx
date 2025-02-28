import React, { useState, useEffect } from "react";
import { getGallery } from "../api/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Galeri() {
  const [gallery, setGallery] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [currentCaption, setCurrentCaption] = useState("");

  useEffect(() => {
    getGallery().then(setGallery);
  }, []);

  const openModal = (src, caption) => {
    setCurrentImage(src);
    setCurrentCaption(caption);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Galeri Pesantren</h2>

        {gallery.length > 0 ? (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((image) => (
              <div key={image.id} className="cursor-pointer" onClick={() => openModal(`https://ppassyafiiyahbungah.com:3002/uploads/${image.image}`, image.caption)}>
                <img src={`https://ppassyafiiyahbungah.com:3002/uploads/${image.image}`} alt={image.title} className="w-full h-56 object-cover rounded-lg shadow" />
                <p className="text-center mt-2 text-gray-700">{image.caption}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 text-lg">Tidak ada gambar dalam galeri.</p>
        )}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-4 max-w-lg mx-auto">
            <img src={currentImage} alt="Galeri Detail" className="w-full rounded" />
            <p className="text-center text-gray-700 mt-2">{currentCaption}</p>
            <button onClick={closeModal} className="block mx-auto mt-4 px-4 py-2 bg-red-500 text-white rounded">Tutup</button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Galeri;
