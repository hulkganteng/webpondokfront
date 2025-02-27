import React from "react";

const news = [
    { id: 1, image: "/images/news1.jpg", title: "Kegiatan Kitab Kuning", description: "Pengajian rutin harian." },
    { id: 2, image: "/images/news2.jpg", title: "Langitan Bershalawat", description: "Haul Akbar ke-54." },
    { id: 3, image: "/images/news3.jpg", title: "Taushiyah Akbar", description: "Ceramah bersama ulama besar." },
];

function LatestNews() {
    return (
        <div className="mt-5">
            <h2>Berita Terbaru</h2>
            <div className="row">
                {news.map((item) => (
                    <div key={item.id} className="col-md-4">
                        <div className="card mb-4">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                                <a href="#" className="btn btn-primary">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LatestNews;
