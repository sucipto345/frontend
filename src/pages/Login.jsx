import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!formData.email) {
      setError("Email harus diisi");
      return;
    }

    if (!formData.password) {
      setError("Password harus diisi");
      return;
    }

    try {
      // Tambahkan validasi email sederhana
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Format email tidak valid");
        return;
      }

      // Log data yang akan dikirim
      console.log("Mencoba login dengan:", {
        email: formData.email,
        passwordLength: formData.password.length,
      });

      const response = await login(formData.email, formData.password);

      // Log response dari login
      console.log("Login berhasil:", response);

      navigate("/");
    } catch (err) {
      // Log error secara mendetail
      console.error("Login error detail:", {
        message: err.message,
        stack: err.stack,
      });

      setError(err.message || "Login gagal");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-slate-700 rounded-b-[100px] p-8 flex-1 flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-md"
        >
          <h1 className="text-black text-3xl font-bold mb-4 ml-12">
            Selamat Datang
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Masukkan Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Masukkan Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none mx-32 focus:shadow-outline"
              type="submit"
            >
              Masuk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
