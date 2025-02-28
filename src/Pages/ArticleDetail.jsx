import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getArticleDetail } from "../api/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [articleDetail, setArticleDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Artikel tidak ditemukan.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const data = await getArticleDetail(id);
        if (!data) {
          setError("Artikel tidak tersedia.");
        } else {
          setArticleDetail(data);
        }
      } catch (err) {
        setError("Gagal mengambil data artikel.");
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
      <main className="container mx-auto px-4 py-12">
        <article className="bg-white shadow-lg rounded-lg p-8 animate-fade-in">
          <header className="mb-8 border-b pb-4 text-center">
            <h1 className="text-4xl font-bold text-green-800">
              {articleDetail.title}
            </h1>
            <p className="text-gray-500 text-sm mt-2">{articleDetail.date}</p>
          </header>

          {articleDetail.image ? (
            <div className="mb-8 flex justify-center">
              <img
                src={`http://ppassyafiiyahbungah.com:3002/uploads/${articleDetail.image}`}
                alt={articleDetail.title}
                className="w-full max-w-3xl object-cover rounded-lg shadow-md"
              />
            </div>
          ) : (
            <div className="mb-8 flex justify-center">
              <img
                src="/placeholder.jpg"
                alt="No Image Available"
                className="w-full max-w-3xl object-cover rounded-lg shadow-md opacity-50"
              />
            </div>
          )}

          <section className="prose max-w-none mx-auto">
            <div dangerouslySetInnerHTML={{ __html: articleDetail.content }} />
          </section>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate(-1)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow transition"
            >
              ← Kembali
            </button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export default ArticleDetail;
