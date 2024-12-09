import React, { useState } from "react";
import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";
import ZoomableImage from "../components/ZoomableImage";
import Design1 from "../assets/project/Design/ai[casing].jpg";
import Design2 from "../assets/project/Design/Apoter-Dalam-IPE-CE[poster].jpg";
import Design3 from "../assets/project/Design/Barber_Shop[spanduk].jpg";
import Design4 from "../assets/project/Design/Barber_Shop1[spanduk].jpg";
import Design5 from "../assets/project/Design/emote1[art].jpg";
import Design6 from "../assets/project/Design/cute[art].jpg";
import Design7 from "../assets/project/Design/haji-dakhli[poster].jpg";
import Design8 from "../assets/project/Design/halal-couple[art].jpg";
import Design9 from "../assets/project/Design/peran-farmais-dalam-ipe-ce[poster].jpg";
import Design10 from "../assets/project/Design/putri-yasmin-nadia[wallpaper].jpg";
import Design11 from "../assets/project/Design/recuitment-pasudam[poster].jpg";
import Design12 from "../assets/project/Design/RizzChoco[kemasan].jpg";

// Dapatkan unique hashtags dari images

const images = [
  {
    src: Design1,
    hashtag: "#Casing",
    category: "Design",
    worker: "Worker A",
    client: "Client X",
  },
  {
    src: Design2,
    hashtag: "#Poster",
    category: "Design",
    worker: "Worker B",
    client: "Client Y",
  },
  {
    src: Design3,
    hashtag: "#Spanduk",
    category: "Design",
    worker: "Worker C",
    client: "Client Z",
  },
  {
    src: Design4,
    hashtag: "#Spanduk",
    category: "Design",
    worker: "Worker C",
    client: "Client Z",
  },
  {
    src: Design5,
    hashtag: "#Art",
    category: "Design",
    worker: "Worker D",
    client: "Client W",
  },
  {
    src: Design6,
    hashtag: "#Art",
    category: "Design",
    worker: "Worker E",
    client: "Client V",
  },
  {
    src: Design7,
    hashtag: "#Poster",
    category: "Design",
    worker: "Worker F",
    client: "Client U",
  },
  {
    src: Design8,
    hashtag: "#Art",
    category: "Design",
    worker: "Worker G",
    client: "Client U",
  },
  {
    src: Design9,
    hashtag: "#Poster",
    category: "Design",
    worker: "Worker H",
    client: "Client T",
  },
  {
    src: Design10,
    hashtag: "#Wallpaper",
    category: "Design",
    worker: "Worker I",
    client: "Anonymous",
  },
  {
    src: Design11,
    hashtag: "#Poster",
    category: "Design",
    worker: "Worker A",
    client: "Anonymous",
  },
  {
    src: Design12,
    hashtag: "#Kemasan",
    category: "Design",
    worker: "Worker A",
    client: "Anonymous",
  },
];

const breakpointColumns = {
  default: 4,
  1100: 4,
  700: 3,
  500: 2,
};

const Design = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [selectedHashtag, setSelectedHashtag] = useState(null);

  // Dapatkan unique hashtags dari images
  const uniqueHashtags = [...new Set(images.map((image) => image.hashtag))];

  // Filter gambar berdasarkan hashtag
  const filteredImages = selectedHashtag
    ? images.filter((image) => image.hashtag === selectedHashtag)
    : images;

  // Buat navigation dinamis
  const navigation = [
    {
      text: "All",
      action: () => setSelectedHashtag(null),
    },
    ...uniqueHashtags.map((hashtag) => ({
      text: hashtag.replace("#", ""),
      action: () => setSelectedHashtag(hashtag),
    })),
  ];

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const toggleZoom = () => setIsZoomed(!isZoomed);

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-24">
      <div className="flex justify-between w-full py-10 px-5">
        <Link
          to="/home"
          className="text-sm cursor-pointer sm:text-lg pl-2 font-bold"
        >
          ← Back to Home
        </Link>
        {/* Navigation/Filter Buttons */}
        <div className="flex space-x-2 overflow-x-auto">
          {navigation.map((nav, index) => (
            <button
              key={index}
              onClick={nav.action}
              className={`
                px-3 py-1 rounded-lg transition-colors duration-200 
                ${
                  selectedHashtag === `#${nav.text}` ||
                  (nav.text === "All" && !selectedHashtag)
                    ? "bg-purple-800 text-white"
                    : "hover:bg-purple-800 text-white"
                }
              `}
            >
              {nav.text}
            </button>
          ))}
        </div>
        <Link
          to="/"
          className="text-sm cursor-pointer sm:text-lg pr-2 font-bold"
        >
          Back to Portal →
        </Link>
      </div>
      <div className="p-4 mt-16">
        <h1 className="text-2xl font-bold pb-12">Design Page</h1>
        {selectedHashtag && ` - ${selectedHashtag}`}

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex gap-4"
          columnClassName="masonry-column"
        >
          {filteredImages.map((image, index) => (
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
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          {isZoomed ? (
            <div
              className="relative w-full max-w-[90vw] max-h-[90vh] flex justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ZoomableImage
                src={selectedImage.src}
                alt="Fullscreen"
                isPortrait={selectedImage.src.includes("portrait")}
                className="rounded-lg object-contain"
              />
            </div>
          ) : (
            <div
              className="bg-gray-800 p-4 rounded-lg max-w-5xl w-full mx-4 relative flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section - Full width on mobile, 50% on desktop */}
              <div className="w-full md:w-1/2 flex justify-center items-center mb-4 md:mb-0 md:mr-4">
                <div className="relative w-full h-full">
                  <img
                    src={selectedImage.src}
                    alt="Fullscreen"
                    className="w-full h-full object-cover rounded-lg max-h-[70vh]"
                  />
                  <button
                    onClick={toggleZoom}
                    className="absolute bottom-4 right-4 bg-white bg-opacity-75 text-gray-800 p-2 rounded-full shadow-lg"
                  >
                    Zoom
                  </button>
                </div>
              </div>

              {/* Details Section - Full width on mobile, 50% on desktop */}
              <div className="w-full md:w-1/2 text-gray-300 p-4 space-y-4 overflow-y-auto max-h-[70vh]">
                <h2 className="text-xl font-semibold text-white">
                  Image Details
                </h2>
                <div className="space-y-2">
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
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Design;
