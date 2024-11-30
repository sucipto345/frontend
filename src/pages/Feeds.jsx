import React, { useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import SosMed1 from "../assets/project/Social-Media/(social-media)Ninomae_Inanis[Youtube].jpg";
import SosMed2 from "../assets/project/Social-Media/(social-media)Amman-Aria-Ramadhan[Youtube].jpg";

const images = [
  {
    src: SosMed1,
    hashtag: "#Banner-Youtube",
    category: "Feeds & Reels",
    worker: "Worker A",
    client: "Client X",
  },
  {
    src: SosMed2,
    hashtag: "#Banner-Youtube",
    category: "Feeds & Reels",
    worker: "Worker B",
    client: "Client Y",
  },
];

const breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const Feeds = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => {
    setSelectedImage(null);
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

      <div className="p-4 mt-16">
        <h1 className="text-2xl font-bold pb-12">Feeds Page</h1>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <img
                src={image.src}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </Masonry>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 backdrop-blur-sm">
          {isZoomed ? (
            <div className="relative flex justify-center items-center">
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedImage.src}
                alt="Fullscreen"
                className="rounded-lg object-contain max-h-[75vh]"
              />
            </div>
          ) : (
            <div className="bg-gray-800 p-4 rounded-lg max-w-5xl w-full mx-4 relative">
              <button
                className="absolute top-4 right-4 text-white text-xl z-10"
                onClick={closeModal}
              >
                ✕
              </button>

              {/* Gambar di atas */}
              <div className="relative flex justify-center items-center mb-4">
                <img
                  src={selectedImage.src}
                  alt="Fullscreen"
                  className="w-full h-auto rounded-lg max-h-[70vh]"
                />
                <button
                  onClick={toggleZoom}
                  className="absolute bottom-4 right-4 bg-white bg-opacity-75 text-gray-800 p-2 rounded-full shadow-lg"
                >
                  Zoom
                </button>
              </div>

              {/* Informasi di bawah */}
              <div className="text-gray-300 p-4 space-y-4">
                <h2 className="text-xl font-semibold text-white">
                  Image Details
                </h2>
                <p>
                  <strong>Hashtag:</strong> {selectedImage.hashtag}
                </p>
                <p>
                  <strong>Category:</strong> {selectedImage.category}
                </p>
                <p>
                  <strong>Worker:</strong> {selectedImage.worker}
                </p>
                <p>
                  <strong>Client:</strong> {selectedImage.client}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Feeds;
