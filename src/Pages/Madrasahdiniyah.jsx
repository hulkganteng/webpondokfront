import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MadrasahDiniyah() {
  const kitabKelas = [
    {
      kelas: "Kelas I",
      kitab: `Ta’lim: Tuntunan sholat lengkap.
Feqih: مبادئ الفقة جز2 (awal s/d akhir)
B.Arab: راس سيرة (awal s/d akhir)
Tauhid: عقيدة العوام (awal s/d akhir)
Tarikh: تاريخ النبى (awal s/d akhir)
Nahwu: نحوالواضح (awal s/d akhir)
Shorof: امثلة الصر يفية (1/3 awal istilah lughowi)
Akhlaq: الالا (awal s/d akhir)
Pego: جاتاتان (awal s/d akhir)
Tajwid: زركاسي (awal s/d akhir)`,
    },
    {
      kelas: "Kelas II",
      kitab: `Tauhid: عقيدة الاسلامية (awal s/d akhir)
Tajwid: تحفة الاطفال (awal s/d akhir)
Tarikh: خلاصة نور جز1 (awal s/d akhir)
B.Arab: جاتاتان (awal s/d akhir)
Akhlaq: وصايا (awal s/d akhir)
Feqih: مبادئ جز 3 (awal s/d akhir)
Nahwu: متن الزومية (awal s/d akhir)
Shorof: امثلة التصريفية (1/3 kedua)
Hadist: 101 (awal s/d akhir)`,
    },
    {
      kelas: "Kelas III",
      kitab: `Tarikh: خلاصة نور 2 (awal s/d akhir)
Tajwid: هداية المستفيد (awal s/d akhir)
Tauhid: جواهرالكلامية (1/3 awal)
Feqih: فتح القريب (1/3 awal)
B.Arab: جاتاتان (awal s/d akhir)
Hadist: اربعين النواوي (awal s/d akhir)
Nahwu: نظم العمريطي (separoh awal)
Shorof: امثلة التصريفية (1/3 akhir)
Akhlaq: تعليم المتعلم (separoh awal)
Faroidl: جاتاتان (awal s/d akhir)`,
    },
    {
      kelas: "Kelas IV",
      kitab: `Tarikh: خلاصة نور 3 (awal s/d akhir)
Tauhid: جواهر الكلامية (1/3 kedua)
B.Arab: جاتاتان (awal s/d akhir)
Akhlaq: تعليم المتعلم (separoh kedua)
Feqih: فتح القريب (separoh kedua)
Nahwu: نظم العمريطي (separoh kedua)
Shorof: الموفود (awal s/d akhir)
Faroidl: جاتاتان (awal s/d akhir)
Tajwid: قراءة السبعة (awal s/d akhir)
Hadist: الترغيب والترهيب (1/3 awal)`,
    },
    {
      kelas: "Kelas V",
      kitab: `PPL: جاتاتان (awal s/d akhir)
BMK: تقريب (separoh awal)
Hadist: الترغيب والترهيب (1/3 kedua)
Tauhid: جواهرالكلامية (1/3 akhir)
Akhlaq: تعليم المتعلم (separoh akhir)
Feqih: فتح القريب (separoh awal)
B.Arab: جاتاتان (awal s/d akhir)
Nahwu: الفية (250 awal)`,
    },
    {
      kelas: "Kelas VI",
      kitab: `PPL: جاتاتان (awal s/d akhir)
BMK: تقريب (separoh akhir)
Tauhid: حجة اهل السنة (awal s/d akhir)
Akhlaq: ايهاالولد (separoh akhir)
Feqih: فتح القريب (separoh akhir)
B.Arab: جاتاتان (awal s/d akhir)
Nahwu: الفية (250 s/d 500)`,
    },
  ];

  const pembagianKelas = [
    "Kelas I Diniyah",
    "Kelas II Diniyah",
    "Kelas III Diniyah",
    "Kelas IV Diniyah",
    "Kelas V Diniyah",
    "Kelas VI Diniyah",
  ];

  const strukturOrganisasi = [
    "Kepala Assyafiiyah",
    "Sie Pendidikan",
    "Kepala Madin",
    "Sekretaris",
    "Bendahara",
    "Dewan Guru Madin",
    "Murid - Murid Madin",
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Konten Utama */}
      <div className="container mx-auto mt-5 px-4">
        <h1 className="text-center text-3xl font-bold mb-4">Madrasah Diniyah</h1>
        <p className="mb-4">
          Madrasah Diniyah di Pondok Pesantren Assyafiiyah adalah salah satu cara agar siswa dapat memahami
          berbagai ilmu agama dengan cepat. Madrasah, yang berasal dari kata "Da Ra Sa" (belajar), secara
          harfiah berarti "tempat belajar agama Islam".
        </p>

        {/* Tabel Kitab yang Diajarkan */}
        <h2 className="text-2xl font-semibold mt-4">Kitab yang Diajarkan</h2>
        <div className="overflow-x-auto mt-2">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 border">Kelas</th>
                <th className="px-4 py-2 border">Kitab yang Diajarkan</th>
              </tr>
            </thead>
            <tbody>
              {kitabKelas.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-4 py-2 border">{item.kelas}</td>
                  <td className="px-4 py-2 border">
                    <pre className="whitespace-pre-wrap font-mono">{item.kitab}</pre>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pembagian Kelas */}
        <h2 className="text-2xl font-semibold mt-4">Pembagian Kelas</h2>
        <ul className="list-disc list-inside mt-2">
          {pembagianKelas.map((kelas, index) => (
            <li key={index}>{kelas}</li>
          ))}
        </ul>

        {/* Struktur Kepengurusan */}
        <h2 className="text-2xl font-semibold mt-4">Struktur Kepengurusan Madrasah Diniyah</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          {strukturOrganisasi.map((position, index) => (
            <div
              key={index}
              className="border border-black px-4 py-2 font-bold bg-gray-100"
            >
              {position}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MadrasahDiniyah;
