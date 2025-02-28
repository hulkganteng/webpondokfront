import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { id: 1, image: "/images/p1.jpg", title: "Gedung Putra" }, 
  { id: 2, image: "/images/p2.jpg", title: "Gedung Putri" },
  { id: 3, image: "/images/p3.jpg", title: "Asrama Santri" },
  { id: 4, image: "/images/p4.jpg", title: "Asrama putri depan" },
];

function PesantrenCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute bottom-12 left-8 md:left-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
              {slide.title}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigasi Panah */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition shadow-lg"
      >
        <FaChevronLeft size={22} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition shadow-lg"
      >
        <FaChevronRight size={22} />
      </button>

      {/* Indikator Dot */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default PesantrenCarousel;
