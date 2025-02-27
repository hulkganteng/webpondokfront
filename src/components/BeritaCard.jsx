import React from "react";
import { Link } from "react-router-dom";

function BeritaCard({ id, title, date, summary, image, ...rest }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {image && (
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">
          <Link to={`/news/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-gray-500 text-sm mb-2">{date}</p>
        <p className="text-gray-700">{summary}</p>
      </div>
    </div>
  );
}

export default BeritaCard;
