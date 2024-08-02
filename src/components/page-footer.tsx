'use client'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="flex space-x-4">
                    <Link href="/" className="hover:underline">Trang Chủ</Link>
                    <Link href="/about" className="hover:underline">Giới Thiệu</Link>
                    <Link href="/contact" className="hover:underline">Liên Hệ</Link>
                </div>
                <div>
                    <p>&copy; {new Date().getFullYear()} HCDC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
