import React, { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../services/authService';

// Membuat Context
const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  register: () => {}
});

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Cek autentikasi saat komponen dimuat
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        // Ambil token dari localStorage
        const token = localStorage.getItem('token');
        
        if (token) {
          // Validasi token
          const userData = await authService.getCurrentUser();
          setUser(userData);
          setIsAuthenticated(true);
        }
      } catch (error) {
        // Hapus token jika tidak valid
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Fungsi Login
  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      
      // Simpan token di localStorage
      localStorage.setItem('token', response.token);
      
      // Set user dan authentication
      setUser(response.user);
      setIsAuthenticated(true);
      
      return response;
    } catch (error) {
      // Tangani error login
      console.error('Login failed', error);
      throw error;
    }
  };

  // Fungsi Logout
  const logout = async () => {
    try {
      // Panggil logout dari backend jika diperlukan
      await authService.logout();
      
      // Hapus token dari localStorage
      localStorage.removeItem('token');
      
      // Reset state
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  // Fungsi Register
  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      
      // Simpan token setelah register
      localStorage.setItem('token', response.token);
      
      // Set user dan authentication
      setUser(response.user);
      setIsAuthenticated(true);
      
      return response;
    } catch (error) {
      console.error('Registration failed', error);
      throw error;
    }
  };

  // Tampilkan loading selama cek autentikasi
  if (loading) {
    return <div>Loading...</div>;
  }

  // Sediakan context value
  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        login, 
        logout, 
        register 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook untuk menggunakan AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  // Pastikan hook digunakan dalam AuthProvider
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};