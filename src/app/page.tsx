"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Chào mừng đến với HCDC!</h1>
        <p className="mt-2 text-lg text-gray-600">Hệ thống quản lý sức khỏe cộng đồng</p>
      </header>
      <footer className="mt-8 text-center text-gray-600">
        <p>&copy; 2024 HCDC. Tất cả các quyền được bảo lưu.</p>
      </footer>
    </div>
  );
}
