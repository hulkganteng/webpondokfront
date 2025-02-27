import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function AdminAddNews() {
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contentHTML = stateToHTML(editorState.getCurrentContent());
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", contentHTML);
    formData.append("date", date);
    if (imageFile) formData.append("image", imageFile);

    try {
      await axios.post("http://localhost:3002/api/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin");
    } catch (err) {
      setError("Failed to add news");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow max-w-3xl w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Add News</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Content</label>
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor border border-gray-300 rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminAddNews;
