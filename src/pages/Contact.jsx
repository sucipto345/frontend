import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
      <h1 className="text-3xl font-bold mb-8 ">Contact Us</h1>
      <div className="flex flex-col gap-5 pt-10">
        <a
          href="https://wa.me/your-whatsapp-number" // Ganti dengan nomor WhatsApp Anda
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-64 h-16 bg-green-600 text-white text-lg font-bold rounded-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          Chat WhatsApp
        </a>
        <a
          href="https://t.me/Cs_InStayCreative" // Ganti dengan username Telegram Anda
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-64 h-16 bg-blue-600 text-white text-lg font-bold rounded-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          Chat Telegram
        </a>
        <a
          href="https://forms.gle/81KP75jQjxKrAuwv8" // Ganti dengan link Google Form Anda
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-64 h-16 bg-blue-500 text-white text-lg font-bold rounded-lg cursor-pointer transition-transform transform hover:scale-105"
        >
          Saran
        </a>
      </div>
    </div>
  );
};

export default Contact;
