import React, { useState } from 'react';
import { register } from '../services/auth'; // Import fungsi register
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Daftar = () => {
    const [formData, setFormData] = useState({
        name: '',
        name_parent: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [globalError, setGlobalError] = useState('');
    const [success, setSuccess] = useState('');

    // Inisialisasi useNavigate
    const navigate = useNavigate();

    // Definisikan fungsi handleChange
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi sederhana
        if (!formData.name || !formData.name_parent || !formData.email || !formData.password) {
            setGlobalError('Harap isi semua field');
            return;
        }

        try {
            // Tambahkan console.log untuk melihat data yang dikirim
            console.log('Data yang dikirim:', formData);

            const response = await register(
                formData.name,
                formData.name_parent,
                formData.email,
                formData.password
            );

            // Proses selanjutnya setelah registrasi berhasil
            setSuccess('Registrasi berhasil!');
            setGlobalError('');

            // Redirect ke halaman login
            navigate('/login');
        } catch (error) {
            // Tangani error
            console.error('Full error:', error);
            setGlobalError(error.message || 'Terjadi kesalahan saat registrasi');
            setSuccess('');
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="bg-slate-700 rounded-b-[100px] p-8 flex-1 flex flex-col justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 m-10 rounded-2xl shadow-md">
                    <h1 className="text-black text-3xl font-bold mb-4 ml-12">Selamat Datang</h1>
                    {globalError && <p className="text-red-500 mb-4">{globalError}</p>}
                    {success && <p className="text-green-500 mb-4">{success}</p>}
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Masukan Nama Panjang"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <p className="text-red-500">{errors.name}</p>}
                    </div>
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="name_parent">
                            Nama Orang Tua
                        </label>
                        <input 
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name_parent"
                            type="text"
                            placeholder="Masukan Nama Ayah/Ibu"
                            value={formData.name_parent}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Masukan Username"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                    </div>
                    <div className="mb-2">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Masukan Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Daftar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Daftar;