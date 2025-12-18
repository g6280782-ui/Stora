"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white sticky top-0 shadow-md shadow-gray-400 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* اسم الشركة على اليسار */}
        <div className="text-2xl font-bold text-blue-900">
          Stora
        </div>

        {/* روابط الهيدر على اليمين */}
        <nav className="flex space-x-6 text-black">
          <Link href="#home" className="hover:text-blue-900 hover:underline">الرئيسية</Link>
          <Link href="#about" className="hover:text-blue-900 hover:underline">من نحن</Link>
          <Link href="#services" className="hover:text-blue-900 hover:underline">خدماتنا</Link>
          <Link href="#team" className="hover:text-blue-900 hover:underline">فريقنا</Link>
        </nav>
      </div>
    </header>
  );
}
