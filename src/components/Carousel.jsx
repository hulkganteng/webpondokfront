import React, { useState, useEffect } from "react";

const slides = [
  { id: 1, image: "/images/slide1.jpg", title: "Langitan Bershalawat", description: "Haul Akbar ke-54" },
  { id: 2, image: "/images/slide2.jpg", title: "Pengajian Kitab Kuning", description: "Kegiatan rutin harian pesantren" },
  { id: 3, image: "/images/slide3.jpg", title: "Majelis Ta'lim", description: "Pembelajaran bersama kyai" },
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-64 object-cover" />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full p-4">
            <h5 className="text-xl font-bold">{slide.title}</h5>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
