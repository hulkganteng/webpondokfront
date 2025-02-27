import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function KegiatanHarian() {
  const kegiatan = [
    { waktu: "03.45 - 04.00", aktivitas: "Persiapan Jamaah Shubuh" },
    { waktu: "04.00 - 04.40", aktivitas: "Sholat Shubuh Berjamaah" },
    { waktu: "04.40 - 05.15", aktivitas: "Ngaji Al-Quran" },
    { waktu: "05.15 - 06.20", aktivitas: "Persiapan Sekolah" },
    { waktu: "06.30 - selesai", aktivitas: "Sekolah Formal" },
    { waktu: "15.00 - 15.30", aktivitas: "Sholat Ashar Berjamaah" },
    { waktu: "15.30 - 16.30", aktivitas: "Pengajian Kitab Kuning" },
    { waktu: "16.30 - 17.20", aktivitas: "Istirahat Sore dan Makan" },
    { waktu: "17.20 - 17.40", aktivitas: "Persiapan Jamaah" },
    { waktu: "17.40 - 18.15", aktivitas: "Sholat Maghrib Berjamaah" },
    { waktu: "18.15 - 18.30", aktivitas: "Ngaji Al-Quran" },
    { waktu: "18.30 - 20.00", aktivitas: "Madrasah Diniyah" },
    { waktu: "20.15 - 20.45", aktivitas: "Sholat Isya Berjamaah" },
    { waktu: "20.45 - 21.00", aktivitas: "Persiapan Takror" },
    { waktu: "21.00 - 22.00", aktivitas: "Takror (Belajar Bersama)" },
    { waktu: "22.00 - 04.00", aktivitas: "Istirahat Malam" },
  ];

  return (
    <div>
      <Navbar />

      <div className="container mx-auto mt-5 px-4">
        <h2 className="text-center mb-4 text-2xl font-bold">Kegiatan Harian</h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-500">
              <tr>
                <th className="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
                  Waktu
                </th>
                <th className="px-6 py-3 text-center text-sm font-medium text-white uppercase tracking-wider">
                  Kegiatan
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {kegiatan.map((item, index) => (
                <tr key={index} className="hover:bg-green-50 transition">
                  <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-gray-800">
                    {item.waktu}
                  </td>
                  <td className="px-6 py-4 text-center whitespace-normal text-sm text-gray-700">
                    {item.aktivitas}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default KegiatanHarian;
