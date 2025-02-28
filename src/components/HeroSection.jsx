import React from "react";
import Typing from "react-typing-effect";
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/p2.jpg")' }}
    >
      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Teks Bergerak (Typing Effect) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg font-serif">
          <Typing
            text={[
              "Selamat Datang di Website Ponpes Assyafiiyah", 
              "أهلا و سهلا", 
              "Welcome to Assyafiiyah"
            ]}
            speed={80}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={500}
            loop={true}
          />
        </h1>

        {/* Teks dengan Animasi */}
        <motion.p
          className="mt-4 text-2xl md:text-3xl text-green-300 font-semibold drop-shadow font-mono"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          Di Pondok Pesantren Assyafiiyah Bungah
        </motion.p>
      </div>
    </section>
  );
}

export default HeroSection;
