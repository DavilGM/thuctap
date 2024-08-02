'use client'
import UserItem from "@/components/ui/UserItem";
import Logo from "@/components/ui/Logo";

export default function Header() {
    return (
        <div className="flex justify-between p-4 bg-gray-600">
            <div>
                <Logo />
            </div>
            <div>
                <UserItem />
            </div>
        </div>
    );
}
