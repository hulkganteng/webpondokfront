import axios from "axios";

// Gunakan HTTPS untuk API
const API_BASE_URL = "https://ppassyafiiyahbungah.com:3002/api";  // Ubah HTTP ke HTTPS

// Ambil token dari localStorage
const getAuthHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// 📌 **ARTICLES**
export const getArticles = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/articles`);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

export const getArticleById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
};

export const addArticle = async (articleData) => {
  try {
    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("content", articleData.content);
    formData.append("date", articleData.date);
    if (articleData.image) {
      formData.append("image", articleData.image);
    }

    const response = await axios.post(`${API_BASE_URL}/articles`, formData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error adding article:", error);
    return null;
  }
};

// ✅ Update Artikel
export const updateArticle = async (id, articleData) => {
  try {
    const formData = new FormData();
    formData.append("title", articleData.title);
    formData.append("content", articleData.content);
    formData.append("date", articleData.date);
    if (articleData.image) {
      formData.append("image", articleData.image);
    }

    const response = await axios.put(`${API_BASE_URL}/articles/${id}`, formData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error updating article:", error);
    return null;
  }
};

export const deleteArticle = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/articles/${id}`, getAuthHeaders());
    return true;
  } catch (error) {
    console.error("Error deleting article:", error);
    return false;
  }
};

export const getArticleDetail = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching article detail:", error);
    return null;
  }
};

// 📌 **NEWS**
export const getNews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const getNewsById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return null;
  }
};

export const addNews = async (newsData) => {
  try {
    const formData = new FormData();
    formData.append("title", newsData.title);
    formData.append("content", newsData.content);
    formData.append("date", newsData.date);
    if (newsData.image) {
      formData.append("image", newsData.image);
    }

    const response = await axios.post(`${API_BASE_URL}/news`, formData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error adding news:", error);
    return null;
  }
};

// ✅ Update Berita
export const updateNews = async (id, newsData) => {
  try {
    const formData = new FormData();
    formData.append("title", newsData.title);
    formData.append("content", newsData.content);
    formData.append("date", newsData.date);
    if (newsData.image) {
      formData.append("image", newsData.image);
    }

    const response = await axios.put(`${API_BASE_URL}/news/${id}`, formData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error updating news:", error);
    return null;
  }
};

export const deleteNews = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/news/${id}`, getAuthHeaders());
    return true;
  } catch (error) {
    console.error("Error deleting news:", error);
    return false;
  }
};

export const getNewsDetail = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/news/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching news detail:", error);
    return null;
  }
};

// 📌 **GALLERY**
export const getGallery = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/gallery`);
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return [];
  }
};

export const addGallery = async (galleryData) => {
  try {
    const formData = new FormData();
    formData.append("title", galleryData.title);
    formData.append("caption", galleryData.caption);
    if (galleryData.image) {
      formData.append("image", galleryData.image);
    }

    const response = await axios.post(`${API_BASE_URL}/gallery`, formData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error adding gallery item:", error);
    return null;
  }
};

// ✅ Update Gallery
export const updateGallery = async (id, galleryData) => {
  try {
    const formData = new FormData();
    formData.append("title", galleryData.title);
    formData.append("caption", galleryData.caption);
    if (galleryData.image) {
      formData.append("image", galleryData.image);
    }

    const response = await axios.put(`${API_BASE_URL}/gallery/${id}`, formData, getAuthHeaders());
    return response.data;
  } catch (error) {
    console.error("Error updating gallery:", error);
    return null;
  }
};

export const deleteGallery = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/gallery/${id}`, getAuthHeaders());
    return true;
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    return false;
  }
};
