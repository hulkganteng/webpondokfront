import React, { useState, useEffect } from "react";
import { getNews } from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BeritaCard from "../components/BeritaCard";
import { Helmet } from "react-helmet";

function NewsPage() {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getNews().then((data) => setNews(data)); // Ambil semua berita
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Filter pencarian untuk berita
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(search)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">

      <Helmet>
              <title>News  | Nama Website Anda</title>
              <meta name="description" content="Media Berita Santri Assyafiiyah" />
              <meta name="keywords" content="Pesantren, Pendidikan, Berita, Artikel" />
            </Helmet>
      <Navbar />
      <main className="container mx-auto px-6 py-10">
        {/* 🔍 Pencarian */}
        <div className="mb-10 text-center">
          <input
            type="text"
            placeholder="Cari berita..."
            className="border border-gray-300 rounded-lg px-4 py-3 w-full md:w-1/2 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* 📰 Berita */}
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
                    image={item.image ? `http://ppassyafiiyahbungah.com:3002/uploads/${item.image}` : "https://via.placeholder.com/300"}
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
      </main>
      <Footer />
    </div>
  );
}

export default NewsPage;
