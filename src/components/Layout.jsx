// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
// import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col bg-slate-700">
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
