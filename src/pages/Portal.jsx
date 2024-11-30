import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { Link } from 'react-router-dom';  // Pastikan Link diimpor dari react-router-dom
import designIcon from '../assets/icons/art.png';
import websiteIcon from '../assets/icons/coding.png';
import animationIcon from '../assets/icons/animate.png';
import feedsIcon from '../assets/icons/story.png';
import logoCompany from '../assets/images/logo-company.png';
import companyImg from '../assets/icons/instaycreative.jpg';
import whatsappIcon from '../assets/icons/whatsapp.png';
import telegramIcon from '../assets/icons/telegram.png';

const Portal = () => {
  const [showRules, setShowRules] = useState(false);

  const services = [
    {
      icon: designIcon,
      label: "DESIGN GRAFIS",
      description: "Creative Solutions",
      path: "/design",
    },
    {
      icon: websiteIcon,
      label: "TEMPLATE",
      description: "TEMPLATE",
      path: "/template",
    },
    {
      icon: animationIcon,
      label: "ANIMASI",
      description: "Motion Graphics",
      path: "/animation",
    },
    {
      icon: feedsIcon,
      label: "FEEDS AND STORIES",
      description: "Content Creation",
      path: "/feeds",
    },
  ];

  const rules = [
    "1.Demi Kelancaran Proses akan di kerjakan setelah adanya pembayaran lunas / DP Minimal dari 50% total harga",
    "2.Revisi Max 3x, lebih dari itu akan di kenakan biaya tambahan",
    "3.Pembatalan sepihak DP akan di anggap hangus",
    "4.Semua hasil akan di tampilkan di channel  InStayCreative",
    "5.Pembelian Desain di atas 250.000, berhak mendapatkan bonus desain yang sudah kami siapkan",
    "8. Patuhi hak cipta dan kekayaan intelektual"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-300">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Main Logo Section */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-2xl font-bold text-white mb-2">InStayCreative</h1>
        </div>

        {/* Join Us Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto mb-12">
          <div className="flex flex-col items-center">
            <div className="bg-purple-200 rounded-full p-3 w-20 h-20 flex items-center justify-center mb-4 shadow-md">
              <div className="relative w-full h-full">
                <img
                  src={logoCompany}
                  alt="InStayCreative Small Logo"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-black mb-4">Join Us</h2>
            
            <div className="flex flex-row space-x-6 mb-6">
                
              <a href="https://whatsapp.com/channel/0029VarAXPl7tkjEIzBbXq3r" className=" text-white p-3 rounded-full hover:bg-purple-900 transition-all hover:-translate-y-1">
              <img src={whatsappIcon} className='w-12'/>
              </a>
              <a href="https://t.me/InstayCreative_ISC" className=" text-white p-3 rounded-full hover:bg-purple-900 transition-all hover:-translate-y-1">
              <img src={telegramIcon} className='w-12'/>
              </a>
            </div>

            {/* Rules Button */}
            <button 
              onClick={() => setShowRules(true)}
              className="bg-purple-800 text-white px-8 py-3 rounded-full font-medium hover:bg-purple-900 transition-all hover:-translate-y-1 w-full sm:w-auto"
            >
              RULES
            </button>
          </div>
        </div>
      </div>

{/* Responsive Services Grid */}
<div className="max-w-6xl mx-auto mb-12">
  {/* Mobile View (2x2 grid) */}
  <div className="block sm:hidden">
    <div className="grid grid-cols-2 gap-4">
      {services.map((service, index) => (
        <Link
          to={service.path}
          key={index}
          className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <img
                src={service.icon}
                className="w-6 h-6"
              />
            </div>
            <span className="text-sm font-semibold text-gray-800 text-center">
              {service.label.split(" ")[0]}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>

  {/* Desktop View (1x4 grid) */}
  <div className="hidden sm:grid sm:grid-cols-4 gap-6">
    {services.map((service, index) => (
      <Link
        to={service.path}
        key={index}
        className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
      >
        <div className="w-16 h-16 mx-auto mb-4">
          <img src={service.icon} alt={service.label} className="w-full h-full" />
        </div>
        <h3 className="text-black font-medium text-sm sm:text-base">{service.label}</h3>
      </Link>
    ))}
  </div>
</div>

      {/* Footer */}
      <div className="text-center text-slate-600 text-sm py-4">
        <p>Powered by InStayCreative</p>
      </div>

      {/* Rules Modal */}
      {showRules && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex flex-col justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black ">Rules</h2>
                <button 
                  onClick={() => setShowRules(false)}
                  className="text-gray-500 hover:text-gray-700 transition-colors "
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-4">
                {rules.map((rule, index) => (
                  <div 
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-gray-700">{rule}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={() => setShowRules(false)}
                  className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portal;
