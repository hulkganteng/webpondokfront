import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNewsDetail } from "../api/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";

function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Berita tidak ditemukan.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getNewsDetail(id);
        if (!data) {
          setError("Berita tidak tersedia.");
        } else {
          setNewsDetail(data);
        }
      } catch (err) {
        setError("Gagal mengambil data berita.");
      }
      setLoading(false);
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* 🔹 Tombol Kembali (Fixed di Samping Kiri) */}
      <div className="fixed top-24 left-6 z-50">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" /> Kembali
        </button>
      </div>

      <main className="container mx-auto px-4 py-12">
        <article className="bg-white shadow-lg rounded-lg p-8 animate-fade-in">
          <header className="mb-8 border-b pb-4 text-center">
            <h1 className="text-4xl font-bold text-green-800">
              {newsDetail.title}
            </h1>
            <p className="text-gray-500 text-sm mt-2">{newsDetail.date}</p>
          </header>

          {/* 🔹 Tampilan Gambar dengan Desain Modern */}
          <div className="mb-8 flex justify-center">
            <img
              src={newsDetail.image ? `http://ppassyafiiyahbungah.com:3002/uploads/${newsDetail.image}` : "/placeholder.jpg"}
              alt={newsDetail.title || "No Image Available"}
              className="w-full max-w-3xl object-cover rounded-lg shadow-lg border border-gray-200"
            />
          </div>

          <section className="prose max-w-none mx-auto text-gray-800 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: newsDetail.content }} />
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default NewsDetail;
