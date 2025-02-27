import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaEnvelope } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-700 via-green-800 to-green-900 text-white py-6 mt-8">
      <div className="container mx-auto px-4 text-center">
        {/* Media Sosial */}
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://www.instagram.com/assyafiiyahbungah_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-200 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a 
            href="https://web.facebook.com/assyafiiyahbungahgresik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-200 transition"
          >
            <FaFacebookF size={24} />
          </a>
          <a 
            href="https://youtube.com/@pondokpesantrenassyafiiyah7377?si=3REPfE-jpDiHcML4" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-200 transition"
          >
            <FaYoutube size={24} />
          </a>
          <a 
            href="https://www.tiktok.com/@assyafiiyahbungah?is_from_webapp=1&sender_device=pc" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-200 transition"
          >
            <SiTiktok size={24} />
          </a>
          <a 
            href="mailto:assyafiiyahbungahgresik@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-green-200 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Copyright & Additional Info */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pondok Pesantren. All Rights Reserved.
        </p>
        <p className="mt-2 text-xs text-green-200">
          Designed By BHYDEV
        </p>
      </div>
    </footer>
  );
}

export default Footer;
