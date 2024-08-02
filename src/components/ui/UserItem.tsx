'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link';
export default function UserItem() {
    return (
        <Link href="/account" passHref>
            <div className="flex items-center justify-between gap-4 border rounded-[8px]">
                <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
                    <p>NT</p>
                    {/* <Avatar>
                        <AvatarImage
                            src="https://scontent.fsgn6-1.fna.fbcdn.net/v/t39.30808-6/278062645_1268519473558429_2170989430981313743_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE5BPlYJ9CEuQgzjUdZE3CrTX_vnDl0prRNf--cOXSmtNgkBP6f4u2clguwdw3x-CYOFrOOIh68XJ4M5vpJdzBa&_nc_ohc=D2jJdRUEtDIQ7kNvgENcWEL&_nc_ht=scontent.fsgn6-1.fna&oh=00_AYCc_Iivh2ja1uoag1QTNRZJWXOWeGYjTNDI-o8fUMvzpA&oe=66AD7617"
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar> */}
                </div>
                <div className="grow">
                    <p className="text-[16px] font-bold text-white">Pham Ngoc Tho</p>
                    <p className="text-[12px] font-bold text-neutral-300">ngoctho20141106@gmail.com</p>
                </div>
            </div>
        </Link>
    );
}
