import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/page-header";
import Footer from "@/components/page-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <header className="w-full">
          <Header />
        </header>
        <div className="flex flex-1">
          <Sidebar />
          <main className="w-full h-full">{children}</main>
        </div>
        <footer className="w-full mt-auto">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
