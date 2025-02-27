import React, { useState, useEffect } from "react";
import { getArticles, getNews, getGallery } from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ArtikelCard from "../components/ArtikelCard";
import BeritaCard from "../components/BeritaCard";
import GaleriCard from "../components/GaleriCard";

function Home() {
  const [articles, setArticles] = useState([]);
  const [news, setNews] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then((data) => setArticles(data.slice(0, 3))); // Ambil 3 artikel terbaru
    getNews().then((data) => setNews(data.slice(0, 3))); // Ambil 3 berita terbaru
    getGallery().then((data) => setGallery(data.slice(0, 3))); // Ambil 3 gambar terbaru
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Filter pencarian untuk artikel, berita, dan galeri
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search)
  );
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(search)
  );
  const filteredGallery = gallery.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <main className="container mx-auto px-6 py-10">
        {/* 🔍 Pencarian */}
        <div className="mb-10 text-center">
          <input
            type="text"
            placeholder="Cari berita, artikel, atau galeri..."
            className="border border-gray-300 rounded-lg px-4 py-3 w-full md:w-1/2 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* 📝 Artikel Terbaru */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-green-800 text-center mb-6">
            Coretan Santri
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="cursor-pointer transform transition duration-300 hover:scale-105"
                  onClick={() => navigate(`/article/${article.id}`)}
                >
                  <ArtikelCard {...article} />
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-600">
                Tidak ada artikel ditemukan.
              </p>
            )}
          </div>
        </section>

        {/* 📰 Berita Terbaru */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-green-800 text-center mb-6">
            Berita Terbaru
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer transform transition duration-300 hover:scale-105"
                  onClick={() => navigate(`/news/${item.id}`)}
                >
                  <BeritaCard
                    id={item.id}
                    title={item.title}
                    summary={item.summary}
                    date={item.date}
                    image={item.image ? `http://localhost:3002/uploads/${item.image}` : "https://via.placeholder.com/300"}
                  />
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-gray-600">
                Tidak ada berita ditemukan.
              </p>
            )}
          </div>
        </section>

        {/* 🏞️ Galeri Pesantren */}
        <section className="mb-16">
          <h2 className="text-4xl font-extrabold text-green-800 text-center mb-6">
            Galeri Pesantren
          </h2>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredGallery.length > 0 ? (
              filteredGallery.map((item) => (
                <div key={item.id} className="transform transition duration-300 hover:scale-105">
                  <GaleriCard
                    image={`http://localhost:3002/uploads/${item.image}`}
                    alt={item.title}
                    caption={item.caption}
                  />
                </div>
              ))
            ) : (
              <p className="text-center col-span-4 text-gray-600">
                Tidak ada galeri ditemukan.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
