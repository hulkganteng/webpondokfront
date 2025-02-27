import React from "react";

function GaleriCard({ image, alt }) {
  return (
    <img
      src={image}
      alt={alt}
      className="w-full h-40 object-cover rounded-lg shadow"
    />
  );
}

export default GaleriCard;
