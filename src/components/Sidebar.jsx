import React from "react";

function Sidebar() {
  return (
    <aside className="p-4">
      <div className="mb-4">
        <h5 className="font-bold text-lg mb-2">Post Terbaru</h5>
        <ul className="space-y-2">
          <li className="p-2 border rounded hover:bg-gray-100">Post 1</li>
          <li className="p-2 border rounded hover:bg-gray-100">Post 2</li>
          <li className="p-2 border rounded hover:bg-gray-100">Post 3</li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold text-lg mb-2">Kategori</h5>
        <select className="w-full p-2 border rounded">
          <option>Pilih Kategori</option>
        </select>
      </div>
    </aside>
  );
}

export default Sidebar;
