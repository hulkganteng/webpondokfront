import React, { useState, useEffect } from "react";
import {
  FaChartBar,
  FaNewspaper,
  FaBook,
  FaImages,
  FaSignOutAlt,
  FaPlus,
  FaTrash,
  FaEdit,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { getNews, deleteNews, getArticles, deleteArticle, getGallery, deleteGallery } from "../api/api";
import AdminAddNews from "./AdminAddNews";
import AdminAddArticle from "./AdminAddArticle";
import AdminAddGallery from "./AdminAddGallery";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [news, setNews] = useState([]);
  const [articles, setArticles] = useState([]);
  const [gallery, setGallery] = useState([]);
  const navigate = useNavigate();

  // Fetch all data once
  useEffect(() => {
    if (activeTab === "news") getNews().then(setNews);
    if (activeTab === "articles") getArticles().then(setArticles);
    if (activeTab === "gallery") getGallery().then(setGallery);
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/login");
  };

  // Hapus data dengan konfirmasi
  const handleDelete = async (type, id) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus ini?");
    if (!confirmDelete) return;

    if (type === "news") {
      const success = await deleteNews(id);
      if (success) setNews(news.filter((item) => item.id !== id));
    } else if (type === "articles") {
      const success = await deleteArticle(id);
      if (success) setArticles(articles.filter((item) => item.id !== id));
    } else if (type === "gallery") {
      const success = await deleteGallery(id);
      if (success) setGallery(gallery.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-gray-800 text-white flex flex-col">
        <div className="h-16 flex items-center justify-center border-b border-gray-700">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="flex-grow p-4 space-y-2">
          {["dashboard", "news", "articles", "gallery"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left py-2 px-4 rounded flex items-center transition ${
                activeTab === tab ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              {tab === "dashboard" && <FaChartBar className="mr-2" />}
              {tab === "news" && <FaNewspaper className="mr-2" />}
              {tab === "articles" && <FaBook className="mr-2" />}
              {tab === "gallery" && <FaImages className="mr-2" />}
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Management
            </button>
          ))}

          <hr className="border-gray-700 my-4" />

          {["addNews", "addArticle", "addGallery"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left py-2 px-4 rounded flex items-center transition ${
                activeTab === tab ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              <FaPlus className="mr-2" />
              {tab.replace("add", "Add ")}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700">
          <button
            onClick={handleLogout}
            className="w-full text-left py-2 px-4 rounded bg-red-600 hover:bg-red-700 flex items-center transition"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-y-auto">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
          </h2>
        </header>

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{ label: "News", count: news.length }, { label: "Articles", count: articles.length }, { label: "Gallery", count: gallery.length }].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-lg shadow text-center">
                <h3 className="text-lg font-bold">{item.label}</h3>
                <p className="text-3xl font-semibold">{item.count}</p>
              </div>
            ))}
          </div>
        )}

        {/* News, Articles, and Gallery Management */}
        {["news", "articles", "gallery"].includes(activeTab) && (
          <div>
            <table className="w-full bg-white shadow rounded overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
                  <th className="py-3 px-4">ID</th>
                  <th className="py-3 px-4">Title</th>
                  {activeTab !== "gallery" && <th className="py-3 px-4">Date</th>}
                  <th className="py-3 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {(activeTab === "news" ? news : activeTab === "articles" ? articles : gallery).map((item) => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="py-2 px-4 text-center">{item.id}</td>
                    <td className="py-2 px-4 text-center">{item.title || item.caption}</td>
                    {activeTab !== "gallery" && <td className="py-2 px-4 text-center">{item.date}</td>}
                    <td className="py-2 px-4 text-center">
                      <button className="text-blue-500 hover:text-blue-700 mr-2">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(activeTab, item.id)} className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "addNews" && <AdminAddNews />}
        {activeTab === "addArticle" && <AdminAddArticle />}
        {activeTab === "addGallery" && <AdminAddGallery />}
      </div>
    </div>
  );
}

export default AdminDashboard;
