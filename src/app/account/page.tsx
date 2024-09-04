'use client';
'use client';

import { useState } from 'react';

export default function AccountPage() {
    const [formData, setFormData] = useState({
        organizationName: '',
        shortName: '',
        accountName: '',
        email: '',
        phoneNumber: '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdateInfo = () => {
        // Logic cập nhật thông tin tài khoản
        console.log('Thông tin đã được cập nhật:', formData);
    };

    const handleChangePassword = () => {
        // Logic đổi mật khẩu
        console.log('Đổi mật khẩu');
    };

    const handleResetPassword = () => {
        // Logic reset mật khẩu
        console.log('Reset mật khẩu');
    };

    return (
        <div className="flex justify-center p-6">
            <div className="w-full max-w-lg p-6 bg-gray-50 border border-gray-200 rounded-md">
                <h1 className="text-2xl font-bold mb-4 text-gray-700">Thông tin tài khoản</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600">Tên đơn vị</label>
                        <input
                            type="text"
                            name="organizationName"
                            value={formData.organizationName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Tên viết tắt</label>
                        <input
                            type="text"
                            name="shortName"
                            value={formData.shortName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Tên tài khoản</label>
                        <input
                            type="text"
                            name="accountName"
                            value={formData.accountName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Số điện thoại</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-600">Địa chỉ</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                    </div>
                </div>
                <div className="flex space-x-4 mt-6">
                    <button
                        onClick={handleChangePassword}
                        className="p-2 bg-gray-600 text-white rounded-md"
                    >
                        Đổi mật khẩu
                    </button>
                    <button
                        onClick={handleResetPassword}
                        className="p-2 bg-red-600 text-white rounded-md"
                    >
                        Reset mật khẩu
                    </button>
                    <button
                        onClick={handleUpdateInfo}
                        className="p-2 bg-blue-600 text-white rounded-md"
                    >
                        Cập nhật thông tin
                    </button>
                </div>
            </div>
        </div>
    );
}
