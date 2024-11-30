import React, { useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import Sonic from "../assets/animasi/sonic-chicken[motion_logo].gif";

const animate = [
  {
    type: "gif",
    src: Sonic,
    hashtag: "#VideoProject",
    category: "Motion Logo",
    worker: "Worker V",
    client: "Client M",
  },
];

const Animation = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => {
    setSelectedItem(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-24">
      <div className="flex justify-between w-full py-4">
        <Link to="/" className="text-lg cursor-pointer pl-12">
          ← Back to Home
        </Link>
        <Link to="/portal" className="text-lg cursor-pointer pr-12">
          Back to Portal →
        </Link>
      </div>

      <main className="p-4 mt-8">
        <h1 className="text-2xl font-bold pb-12">Animate Gallery</h1>

        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {animate.map((item, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer relative group"
              onClick={() => openModal(item)}
            >
              <img
                src={item.src}
                alt={item.hashtag}
                className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity rounded-lg" />
            </div>
          ))}
        </Masonry>
      </main>

      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          {isZoomed ? (
            <div className="relative w-full h-full flex justify-center items-center">
              <button
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedItem.src}
                alt={selectedItem.hashtag}
                className="max-h-screen w-auto object-contain"
              />
            </div>
          ) : (
            <div className="bg-gray-800 rounded-lg max-w-5xl w-full mx-4 relative">
              <button
                className="absolute top-4 right-4 text-white text-xl hover:text-gray-300 z-10"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Gambar di atas */}
              <div className="relative p-4">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.hashtag}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={toggleZoom}
                  className="absolute bottom-8 right-8 bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Zoom
                </button>
              </div>

              {/* Informasi di bawah */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-6">
                  {selectedItem.hashtag}
                </h2>
                <div className="space-y-4">
                  <p>
                    <strong>Category:</strong> {selectedItem.category}
                  </p>
                  <p>
                    <strong>Worker:</strong> {selectedItem.worker}
                  </p>
                  <p>
                    <strong>Client:</strong> {selectedItem.client}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Animation;
