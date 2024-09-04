'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div className="flex">
            {isSidebarVisible && (
                <div className="w-[300px] min-w-[300px] border-r border-gray-200 min-h-screen p-4 bg-gray-50 relative">
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-2 right-2 p-2 bg-gray-600 text-white rounded-md focus:outline-none"
                    >
                        Ẩn sidebar
                    </button>
                    <div className="space-y-2 mt-10">
                        <Link href="/DVG/DSChiDinh" legacyBehavior>
                            <a className={`block p-2 rounded-md cursor-pointer ${pathname === '/DVG/DSChiDinh' ? 'bg-gray-600 text-white' : 'hover:bg-gray-400'}`}>
                                Danh sách chỉ định
                            </a>
                        </Link>
                        <Link href="/DVG/DSChoLayMau" legacyBehavior>
                            <a className={`block p-2 rounded-md cursor-pointer ${pathname === '/DVG/DSChoLayMau' ? 'bg-gray-600 text-white' : 'hover:bg-gray-400'}`}>
                                Danh sách chờ lấy mẫu
                            </a>
                        </Link>
                        <Link href="/DVG/DSChoGuiMau" legacyBehavior>
                            <a className={`block p-2 rounded-md cursor-pointer ${pathname === '/DVG/DSChoGuiMau' ? 'bg-gray-600 text-white' : 'hover:bg-gray-400'}`}>
                                Danh sách chờ gửi mẫu
                            </a>
                        </Link>
                        <Link href="/DVG/DSMauDaGui" legacyBehavior>
                            <a className={`block p-2 rounded-md cursor-pointer ${pathname === '/DVG/DSMauDaGui' ? 'bg-gray-600 text-white' : 'hover:bg-gray-400'}`}>
                                Danh sách mẫu đã gửi
                            </a>
                        </Link>
                        <Link href="/DVG/DSKetQua" legacyBehavior>
                            <a className={`block p-2 rounded-md cursor-pointer ${pathname === '/DVG/DSKetQua' ? 'bg-gray-600 text-white' : 'hover:bg-gray-400'}`}>
                                Danh sách kết quả
                            </a>
                        </Link>
                        <Link href="/DVG/DSLoai" legacyBehavior>
                            <a className={`block p-2 rounded-md cursor-pointer ${pathname === '/DVG/DSLoai' ? 'bg-gray-600 text-white' : 'hover:bg-gray-400'}`}>
                                Danh sách loại
                            </a>
                        </Link>
                    </div>
                </div>
            )}
            {!isSidebarVisible && (
                <div className="p-4">
                    <button
                        onClick={toggleSidebar}
                        className="p-2 bg-gray-600 text-white rounded-md focus:outline-none"
                    >
                        Hiện sidebar
                    </button>
                </div>
            )}
        </div>
    );
}
