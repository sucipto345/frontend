// src/lib/axios.js
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";
// const csrfToken = document
//   .querySelector('meta[name="csrf-token"]')
//   .getAttribute("content");
// console.log("CSRF Token:", csrfToken); // Pastikan token diambil dengan benar

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    // "X-CSRF-TOKEN": csrfToken, // Menambahkan token CSRF ke header
  },
});

// Interceptor untuk menambahkan token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Interceptor untuk handle error global
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle unauthorized error (misalnya token expired)
    if (error.response && error.response.status === 401) {
      // Logout user
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;
