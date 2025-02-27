import React from "react";

const news = [
    { title: "Berita 1", date: "Aug 22, 2024", image: "/images/news1.jpg" },
    { title: "Berita 2", date: "Aug 23, 2024", image: "/images/news2.jpg" },
    { title: "Berita 3", date: "Aug 24, 2024", image: "/images/news3.jpg" },
];

function SectionNews() {
    return (
        <div>
            <h3 className="mb-4 fw-bold">Langituna</h3>
            <div className="row">
                {news.map((item, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text"><small className="text-muted">{item.date}</small></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionNews;
