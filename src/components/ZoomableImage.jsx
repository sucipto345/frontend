import React, { useState, useRef, useEffect } from "react";

const ZoomableImage = ({ src, alt, className, isPortrait }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(null);
  const [initialDistance, setInitialDistance] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Deteksi perangkat mobile
  const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  };

  // Fungsi untuk menghitung jarak antara dua sentuhan
  const getDistance = (touch1, touch2) => {
    return Math.hypot(touch1.pageX - touch2.pageX, touch1.pageY - touch2.pageY);
  };

  // Handler sentuhan dimulai (mobile)
  const handleTouchStart = (e) => {
    if (!isMobile()) return;

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

  // Handler pergerakan sentuhan (mobile)
  const handleTouchMove = (e) => {
    if (!isMobile()) return;

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

  // Handler sentuhan berakhir (mobile)
  const handleTouchEnd = () => {
    if (!isMobile()) return;

    setTouchStart(null);
    setInitialDistance(null);

    // Reset posisi jika zoom kembali ke 1
    if (scale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  // Handler mouse untuk desktop
  const handleMouseMove = (e) => {
    if (isMobile()) return;

    if (isZoomed && imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ x, y });
    }
  };

  // Toggle zoom untuk desktop
  const toggleZoom = () => {
    if (isMobile()) return;
    setIsZoomed(!isZoomed);
    setScale(isZoomed ? 1 : 2);
    setPosition({ x: 0, y: 0 });
  };

  // Reset zoom dengan double tap/click
  const handleDoubleInteraction = () => {
    if (isMobile()) {
      if (scale === 1) {
        setScale(2);
      } else {
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    } else {
      toggleZoom();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden touch-none select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseMove={handleMouseMove}
      onClick={toggleZoom}
      onDoubleClick={handleDoubleInteraction}
    >
      <div
        className="relative will-change-transform transition-transform duration-300"
        style={{
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          transformOrigin: isMobile()
            ? "center center"
            : `${zoomPosition.x}% ${zoomPosition.y}%`,
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
                ? "max-h-[70vh] sm:max-h-[65vh] w-auto"
                : "max-w-[70vw] sm:max-w-[65vw] h-auto"
            }
            ${isMobile() ? "" : isZoomed ? "transform scale-150" : ""}
          `}
          draggable="false"
          style={
            !isMobile() && isZoomed
              ? {
                  cursor: "zoom-out",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }
              : { cursor: "zoom-in" }
          }
        />
      </div>

      {(scale > 1 || isZoomed) && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
          Zoom: {Math.round(isMobile() ? scale * 100 : isZoomed ? 150 : 100)}%
        </div>
      )}
    </div>
  );
};

export default ZoomableImage;
