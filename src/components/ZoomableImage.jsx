import React, { useState, useRef, useEffect } from "react";

const ZoomableImage = ({ src, alt, className, isPortrait }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);
  const [initialDistance, setInitialDistance] = useState(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Fungsi untuk menghitung jarak antara dua sentuhan
  const getDistance = (touch1, touch2) => {
    return Math.hypot(touch1.pageX - touch2.pageX, touch1.pageY - touch2.pageY);
  };

  // Handler sentuhan dimulai
  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      // Satu jari untuk pergerakan
      setTouchStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
    } else if (e.touches.length === 2) {
      // Dua jari untuk zoom
      setInitialDistance(getDistance(e.touches[0], e.touches[1]));
    }
  };

  // Handler pergerakan sentuhan
  const handleTouchMove = (e) => {
    if (e.touches.length === 1 && touchStart && scale > 1) {
      // Geser gambar
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - touchStart.x,
        y: touch.clientY - touchStart.y,
      });
    } else if (e.touches.length === 2) {
      // Zoom dengan dua jari
      const currentDistance = getDistance(e.touches[0], e.touches[1]);
      const delta = currentDistance / initialDistance;

      // Batasi zoom
      const newScale = Math.min(Math.max(scale * delta, 1), 3);
      setScale(newScale);
      setInitialDistance(currentDistance);
    }
  };

  // Handler sentuhan berakhir
  const handleTouchEnd = () => {
    setTouchStart(null);
    setInitialDistance(null);

    // Reset posisi jika zoom kembali ke 1
    if (scale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  // Reset zoom dengan double tap
  const handleDoubleClick = () => {
    if (scale === 1) {
      setScale(2);
    } else {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden touch-none select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={handleDoubleClick}
    >
      <div
        className="relative will-change-transform transition-transform duration-300"
        style={{
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          transformOrigin: "center center",
        }}
      >
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`
            ${className} 
            ${
              isPortrait
                ? "max-h-[55vh] sm:max-h-[85vh] w-auto"
                : "max-w-[55vw] sm:max-w-[85vw] h-auto"
            }
          `}
          draggable="false"
        />
      </div>

      {scale > 1 && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
          Zoom: {Math.round(scale * 100)}%
        </div>
      )}
    </div>
  );
};

export default ZoomableImage;
