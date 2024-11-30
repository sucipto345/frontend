import axios from "../lib/axios";

// Register user
export const register = async (name, name_parent, email, password) => {
  try {
    // Tambahkan logging untuk memastikan data benar
    console.log("Registrasi data:", {
      name,
      name_parent,
      email,
      password,
    });

    const response = await api.post("/v1/auth/register", {
      name,
      name_parent,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    // Debug error lebih detail
    console.error("Full Registration Error:", error);
    console.error("Response Error:", error.response);

    if (error.response) {
      // Error dari server dengan response
      const errorMessage = error.response.data.errors
        ? Object.values(error.response.data.errors).flat().join(", ")
        : error.response.data.message || "Registrasi gagal";

      throw new Error(errorMessage);
    } else if (error.request) {
      // Request terkirim tapi tidak ada response
      throw new Error("Tidak ada respon dari server");
    } else {
      // Error sebelum request terkirim
      throw new Error("Gagal mengirim request");
    }
  }
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export const login = async (email, password) => {
  try {
    console.log("Login attempt:", { email });

    const response = await axios.post(
      "v1/auth/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    // Simpan data user dan token
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
    }

    return response.data;
  } catch (error) {
    // Log error detail
    console.error("Detailed login error:", {
      response: error.response,
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });

    // Lempar pesan error yang lebih informatif
    throw new Error(
      error.response?.data?.message ||
        error.response?.data?.error_details ||
        "Login gagal"
    );
  }
};
// Sesuaikan route lainnya
export const logout = async () => {
  try {
    const response = await api.post(
      "/v1/auth/logout",
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error saat logout" };
  }
};

export const deleteAccount = async () => {
  try {
    const response = await api.delete("/v1/auth/delete-account", {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Error saat menghapus akun" };
  }
};
