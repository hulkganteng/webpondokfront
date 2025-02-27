import React, { useState, useEffect } from "react";
import { getArticles } from "../api/api";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArtikelCard from "../components/ArtikelCard";

function ArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getArticles().then((data) => setArticles(data)); // Ambil semua artikel
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  // Filter pencarian untuk artikel
  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search)
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-6 py-10">
        {/* 🔍 Pencarian */}
        <div className="mb-10 text-center">
          <input
            type="text"
            placeholder="Cari artikel..."
            className="border border-gray-300 rounded-lg px-4 py-3 w-full md:w-1/2 text-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
            value={search}
            onChange={handleSearch}
          />
        </div>

        {/* 📝 Artikel */}
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
      </main>
      <Footer />
    </div>
  );
}

export default ArticlesPage;
