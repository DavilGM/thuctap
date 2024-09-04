'use client';

import { useState } from 'react';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        // Logic xử lý đăng nhập
        console.log('Đăng nhập với thông tin:', formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-gray-700 text-center">Đăng nhập</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600">Tên tài khoản</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-4 mt-6">
                    <button
                        onClick={handleLogin}
                        className="p-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                    >
                        Đăng nhập
                    </button>
                    <a href="#" className="text-sm text-gray-600 text-center hover:underline">
                        Quên mật khẩu?
                    </a>
                </div>
            </div>
        </div>
    );
}
