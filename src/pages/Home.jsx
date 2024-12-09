import React from "react";
import { Link } from "react-router-dom";
import designIcon from "../assets/icons/art.png";
import websiteIcon from "../assets/icons/coding.png";
import animationIcon from "../assets/icons/animate.png";
import feedsIcon from "../assets/icons/story.png";
import ContactUs from "../assets/icons/messenger.png";
// import Slider from "../components/Slider";

const Home = () => {
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

  const previews = [
    {
      id: 1,
      title: "COMMING SOON 1",
      src: "path_to_image_1.jpg", // Replace with actual image path
      link: "/content/1",
    },
    {
      id: 2,
      title: "COMMING SOON 2",
      src: "path_to_image_2.jpg", // Replace with actual image path
      link: "/content/2",
    },
    {
      id: 3,
      title: "COMMING SOON 3",
      src: "path_to_image_3.jpg", // Replace with actual image path
      link: "/content/3",
    },
  ];

  return (
    <div className="relative z-0">
      <div className="flex flex-col justify-center items-center w-full mt-40 ">
        {/* Kurangi margin bottom */}
        {/* <Slider /> */}
      </div>

      {/* Services Navigation */}
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10 mt-20 sm:mt-28 md:mt-16">
        {/* Mobile View (2x2 grid) */}
        <div className="block sm:hidden max-w-lg mx-auto">
          <div className="grid grid-cols-2 shadow-lg gap-4">
            {services.map((service, index) => (
              <Link
                to={service.path}
                key={index}
                className="bg-white rounded-lg p-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                    <img
                      src={service.icon}
                      alt={service.label}
                      className="w-6 h-6"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-800 text-center">
                    {service.label.split(" ")[0]}
                  </span>
                  <span className="text-xs text-gray-500 mt-1">
                    {service.description}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop View (horizontal layout) */}
        <div className="hidden sm:block max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="grid sm:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Link
                  to={service.path}
                  key={index}
                  className="flex flex-col items-center justify-center text-center space-y-3 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.label}
                      className="w-8 h-8"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium text-gray-800">
                      {service.label}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white relative -mt-24 pt-32 pb-20">
        <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 bg-slate-700 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Undangan Website
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {previews.map((preview) => (
              <div
                key={preview.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={preview.link}>
                  <img
                    src={preview.src}
                    alt={preview.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{preview.title}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/content">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Tampilkan Selengkapnya{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-6xl text-center text-white mb-10" id="about">
          About Us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
          {/* Content Column 1 */}
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Our Services</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Content Column 2 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white ">
              Why Choose Us
            </h3>
            <ul className="space-y-2 text-white">
              <li>✓ Professional Design Services</li>
              <li>✓ Custom Website Development</li>
              <li>✓ Creative Animation Solutions</li>
              <li>✓ Social Media Content Creation</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Fixed Button */}
      <div className="fixed bottom-10 right-14 z-50">
        <Link to="/contact">
          <button className="flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 focus:outline-none">
            <img
              src={ContactUs}
              alt="Contact Us"
              className=" object-cover w-12"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
