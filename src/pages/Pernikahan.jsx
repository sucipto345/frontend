import React, { useState, useEffect } from "react";
import "./Pernikahan/1/css/style.css";
import "./Pernikahan/1/css/open.css";
import "./Pernikahan/1/css/couple.css";
import "./Pernikahan/1/css/groom.css";
import "./Pernikahan/1/css/bride.css";
import "./Pernikahan/1/css/journey.css";
import "./Pernikahan/1/css/event1.css";
import "./Pernikahan/1/css/event2.css";
import "./Pernikahan/1/css/count.css";
import "./Pernikahan/1/css/gift.css";
import "./Pernikahan/1/css/wish.css";
import "./Pernikahan/1/css/thank.css";
import "./Pernikahan/1/css/gallery.css";
import "./Pernikahan/1/css/navbar.css";
import "./Pernikahan/1/css/surah.css";
import "./Pernikahan/1/css/filter.css";
import laguLestari from "./Pernikahan/1/asset/audio/lestari.mp3";

const Pernikahan = () => {
  const [showInvitation, setShowInvitation] = useState(false);
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Nomor rekening telah disalin!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const openInvitation = () => {
    setShowInvitation(true);
    const audio = document.getElementById("bgMusic");
    if (audio) {
      audio.play().catch((error) => {
        console.log("Audio autoplay failed:", error);
      });
    }
  };

  const openMaps = () => {
    window.open("https://maps.app.goo.gl/85VBy7qgq7st7dGz7", "_blank");
  };

  useEffect(() => {
    const countdownTimer = () => {
      const weddingDate = new Date("2024-09-29T00:00:00").getTime();

      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(timer);
          setCountdown({
            days: "00",
            hours: "00",
            minutes: "00",
            seconds: "00",
          });
        } else {
          setCountdown({
            days: days.toString().padStart(2, "0"),
            hours: hours.toString().padStart(2, "0"),
            minutes: minutes.toString().padStart(2, "0"),
            seconds: seconds.toString().padStart(2, "0"),
          });
        }
      }, 1000);

      return () => clearInterval(timer);
    };

    countdownTimer();
  }, []);

  return (
    <>
      {!showInvitation ? (
        <div className="cover">
          <div className="cover-content">
            <div className="wedding-title">Undangan Pernikahan</div>
            <div className="couple-names">Irfan & Syifa</div>
            <div className="wedding-date">29.09.24</div>
            <div className="dear-guest">Kepada yth</div>
            <div className="dear-guest-bold">Tamu Undangan</div>
            <button className="open-inv-btn" onClick={openInvitation}>
              Buka Undangan
            </button>
          </div>
        </div>
      ) : (
        <div className="container">
          {/* Navbar */}
          <div className="navbar">
            <a href="#section1">
              <i className="fa fa-home"></i>
            </a>
            <a href="#section2">
              <i className="fa fa-heart"></i>
            </a>
            <a href="#section3">
              <i className="fa fa-calendar"></i>
            </a>
            <a href="#section4">
              <i className="fa fa-camera"></i>
            </a>
            <a href="#section5">
              <i className="fa fa-gift"></i>
            </a>
            <a href="#section6">
              <i className="fa fa-thumbs-up"></i>
            </a>
          </div>

          {/* Countdown Section */}
          <div className="couple-section" id="section1">
            <h3>Pernikahan</h3>
            <h1>Irfan & Syifa</h1>
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-number">{countdown.days}</span>
                <span className="countdown-label">Hari</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{countdown.hours}</span>
                <span className="countdown-label">Jam</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{countdown.minutes}</span>
                <span className="countdown-label">Menit</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">{countdown.seconds}</span>
                <span className="countdown-label">Detik</span>
              </div>
            </div>
          </div>

          {/* Gift Section */}
          <div id="section5" className="container-gift">
            <div className="wd_heading text-center">
              <div className="section-heading">
                <h1>Kirim Hadiah</h1>
              </div>
              <div className="gift-options">
                <div className="gift-option">
                  <h2>Mandiri</h2>
                  <img
                    src="asset/images/madara.jpeg"
                    alt="BRI"
                    className="gift-image"
                  />
                  <p>
                    Bank Mandiri
                    <br />
                    Nomor : 310019108433
                    <br />
                    Nama: IRFANSYAH NANDA PRAS
                  </p>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard("310019108433")}
                  >
                    Salin Nomor Rekening
                  </button>
                </div>
                <div className="gift-option">
                  <h2>Mandiri</h2>
                  <img
                    src="asset/images/madara.jpeg"
                    alt="DANA"
                    className="gift-image"
                  />
                  <p>
                    Bank Mandiri
                    <br />
                    Nomor : 310019544728
                    <br />
                    Nama : SHARINA SYIFA ZAHRA
                  </p>
                  <button
                    className="copy-btn"
                    onClick={() => copyToClipboard("310019544728")}
                  >
                    Salin Nomor Rekening
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Audio Element */}
          <audio id="bgMusic" loop>
            <source src={laguLestari} type="audio/mpeg" />
          </audio>
        </div>
      )}
    </>
  );
};

export default Pernikahan;
