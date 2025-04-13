import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUniversity, 
  FaCalendarAlt, 
  FaCalendar, 
  FaSchool, 
  FaUser, 
  FaDownload, 
  FaImages, 
  FaChalkboardTeacher, 
  FaBars, 
  FaTimes, 
  FaNewspaper
} from "react-icons/fa";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-700 via-green-600 to-green-500 shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src="/images/logo1.png" alt="Logo Pesantren" className="h-10 mr-2" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 items-center text-white">
            
            {/* Dropdown: Literasi */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 hover:text-gray-200 transition">
                <FaNewspaper className="mr-1" /> Literasi
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                <Link to="/artikel" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaChalkboardTeacher className="mr-2" /> Artikel
                </Link>
                <Link to="/berita" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaNewspaper className="mr-2" /> Berita
                </Link>
              </div>
            </div>

            {/* Dropdown: Profil Pesantren */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 hover:text-gray-200 transition">
                <FaUniversity className="mr-1" /> Profil Pesantren
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                <Link to="/profil-pesantren" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaUniversity className="mr-2" /> Profil Pesantren
                </Link>
                <Link to="/kegiatan-harian" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaCalendarAlt className="mr-2" /> Kegiatan Harian
                </Link>
                <Link to="/kegiatan-tahunan" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaCalendar className="mr-2" /> Kegiatan Tahunan
                </Link>
                <Link to="/madrasah-diniyah" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaSchool className="mr-2" /> Madrasah Diniyah
                </Link>
              </div>
            </div>

            {/* Dropdown: Biografi */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 hover:text-gray-200 transition">
                <FaUser className="mr-1" /> Biografi
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                <Link to="/biografi-pemangku" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaUser className="mr-2" /> Pemangku
                </Link>
                <Link to="/biografi-pendiri" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaUser className="mr-2" /> Pendiri
                </Link>
              </div>
            </div>

            {/* Pendaftaran */}
            <div className="relative group">
              <button className="flex items-center px-3 py-2 hover:text-gray-200 transition">
                <FaDownload className="mr-1" /> Pendaftaran
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                <Link to="/brosur" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaDownload className="mr-2" /> Brosur
                </Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEARrfTqThXNp8t2qVP-uyNBKsZ6Ihu51WlW9-EzNFs-j6Ew/viewform"
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaDownload className="mr-2" /> Daftar
                </a>
              </div>
            </div>

            {/* Link langsung */}
            <Link to="/galeri" className="flex items-center px-3 py-2 hover:text-gray-200 transition">
              <FaImages className="mr-1" /> Galeri
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden text-white focus:outline-none"
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50"
          >
            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button onClick={() => setIsMobileOpen(false)} className="text-gray-700">
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col space-y-3 px-6">
                <Link to="/profil-pesantren" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaUniversity className="mr-2" /> Profil Pesantren
                </Link>
                <Link to="/kegiatan-harian" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaCalendarAlt className="mr-2" /> Kegiatan Harian
                </Link>
                <Link to="/kegiatan-tahunan" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaCalendar className="mr-2" /> Kegiatan Tahunan
                </Link>
                <Link to="/madrasah-diniyah" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaSchool className="mr-2" /> Madrasah Diniyah
                </Link>
                <Link to="/biografi-pemangku" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaUser className="mr-2" /> Biografi Pemangku
                </Link>
                <Link to="/biografi-pendiri" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaUser className="mr-2" /> Biografi Pendiri
                </Link>
                <Link to="/galeri" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaImages className="mr-2" /> Galeri
                </Link>

                {/* Menu Artikel dan Berita */}
                <Link to="/artikel" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaChalkboardTeacher className="mr-2" /> Artikel
                </Link>
                <Link to="/berita" className="flex items-center py-2 text-gray-800 hover:bg-gray-100">
                  <FaNewspaper className="mr-2" /> Berita
                </Link>
                <Link to="/brosur" className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaDownload className="mr-2" /> Brosur
                </Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEARrfTqThXNp8t2qVP-uyNBKsZ6Ihu51WlW9-EzNFs-j6Ew/viewform"
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100">
                  <FaDownload className="mr-2" /> Daftar
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
