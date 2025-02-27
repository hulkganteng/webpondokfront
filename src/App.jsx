import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Profilpesantren from "./Pages/Profilpesantren";
import KegiatanHarian from "./Pages/Kegiatanharian";
import KegiatanTahunan from "./Pages/Kegiatantahunan";
import MadrasahDiniyah from "./Pages/Madrasahdiniyah";
import BiografiPendiri from "./Pages/BiografiPendiri";
import BiografiPemangku from "./Pages/BiografiPemangku";
import Brosur from "./Pages/Brosur";
import Galeri from "./Pages/Galeri";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLogin from "./Pages/AdminLogin";
import AdminRegister from "./Pages/AdminRegister";
import NewsDetail from "./Pages/NewsDetail";
import ArticleDetail from "./Pages/ArticleDetail";
import PageTransition from "./components/PageTransition"; 
import MorphingTransition from "./components/MorphingTransition"; 
import ArticlesPage from "./Pages/ArticlesPage";  // Import halaman Artikel
import NewsPage from "./Pages/NewsPage";  // Import halaman Berita

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/profil-pesantren" element={<PageTransition><Profilpesantren /></PageTransition>} />
        <Route path="/kegiatan-harian" element={<PageTransition><KegiatanHarian /></PageTransition>} />
        <Route path="/kegiatan-tahunan" element={<PageTransition><KegiatanTahunan /></PageTransition>} />
        <Route path="/madrasah-diniyah" element={<PageTransition><MadrasahDiniyah /></PageTransition>} />
        <Route path="/biografi-pendiri" element={<MorphingTransition><BiografiPendiri /></MorphingTransition>} />
        <Route path="/biografi-pemangku" element={<MorphingTransition><BiografiPemangku /></MorphingTransition>} />
        <Route path="/brosur" element={<PageTransition><Brosur /></PageTransition>} />
        <Route path="/galeri" element={<PageTransition><Galeri /></PageTransition>} />
        <Route path="/admin" element={<PageTransition><AdminDashboard /></PageTransition>} />
        <Route path="/login" element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route path="/register" element={<PageTransition><AdminRegister /></PageTransition>} />
        <Route path="/news/:id" element={<PageTransition><NewsDetail /></PageTransition>} />
        <Route path="/articles/:id" element={<PageTransition><ArticleDetail /></PageTransition>} />
        <Route path="/artikel" element={<PageTransition><ArticlesPage /></PageTransition>} />
        <Route path="/berita" element={<PageTransition><NewsPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
