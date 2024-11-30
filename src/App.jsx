import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Design from "./pages/Design";
import Feeds from "./pages/Feeds";
import Animation from "./pages/Animation";
import Login from "./pages/Login";
// import Daftar from "./pages/Daftar";
import Portal from "./pages/Portal";
import Template from "./pages/Template";
import Pernikahan1 from "./pages/Pernikahan";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function App() {
  // useEffect(() => {
  //   // Menonaktifkan klik kanan
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //   };

  //   // Menonaktifkan pintasan keyboard tertentu
  //   const handleKeyDown = (e) => {
  //     if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
  //       e.preventDefault();
  //     }
  //     if (e.ctrlKey && e.key === "u") {
  //       e.preventDefault();
  //     }
  //     if (e.ctrlKey && e.shiftKey && e.key === "J") {
  //       e.preventDefault();
  //     }
  //   };

  //   // Menonaktifkan drag and drop
  //   const handleDragStart = (e) => {
  //     e.preventDefault();
  //   };

  //   // Menambahkan event listener
  //   document.addEventListener("contextmenu", handleContextMenu);
  //   document.addEventListener("keydown", handleKeyDown);
  //   document.addEventListener("dragstart", handleDragStart);

  //   // Membersihkan event listener saat komponen di-unmount
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //     document.removeEventListener("keydown", handleKeyDown);
  //     document.removeEventListener("dragstart", handleDragStart);
  //   };
  // }, []);
  return (
    <Router>
      <Routes>
        {/* Rute yang menggunakan Layout */}
        <Route element={<Layout scrollToSection={scrollToSection} />}>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/template" element={<Template />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/daftar" element={<Daftar />} /> */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>

        {/* Rute tanpa Layout */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portal" element={<Portal />} />
        <Route path="/pernikahan" element={<Pernikahan1 />}></Route>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
