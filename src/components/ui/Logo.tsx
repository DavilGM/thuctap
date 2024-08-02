'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
export default function Logo() {
    return (
        <Link href="/" passHref>
            <div className="w-30 h-12 flex items-center justify-center">
                <img
                    src="https://hcdc.vn/public/img/images/news/2019/11/news-1569819039115.png"
                    alt="Logo"
                    className="w-full h-full object-cover"
                />
            </div>
        </Link>
    );
}
