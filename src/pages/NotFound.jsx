import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
        <p className="text-2xl text-gray-800 mb-8">Halaman Tidak Ditemukan</p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Kembali ke Beranda
          </Link>
          <Link
            to="/portal"
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
