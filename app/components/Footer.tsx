import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6" dir="rtl">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* معلومات الشركة */}
        <div className="md:w-1/3 space-y-2 text-right">
          <h4 className="text-xl font-bold">STORA</h4>
          <p className="text-gray-200">
            شركة تقنية لوجستية تربط المحلات التجارية بالتجارة الإلكترونية، نقدم حلولاً متكاملة لتطوير تجربة التجارة الإلكترونية في المملكة
          </p>
        </div>

        <div className="md:w-1/2 flex flex-row justify-start gap-12 text-right">
          
          {/* روابط سريعة */}
          <div className="space-y-1">
            <h4 className="text-xl font-bold">روابط سريعة</h4>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:text-sky-300">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-sky-300">من نحن</a></li>
              <li><a href="#services" className="hover:text-sky-300">خدماتنا</a></li>
              <li><a href="#team" className="hover:text-sky-300">فريقنا</a></li>
            </ul>
          </div>

          {/* تواصل معنا */}
          <div className="space-y-1">
            <h4 className="text-xl font-bold">تواصل معنا</h4>
            <p>البريد الإلكتروني: Stora.inf@gmail.com</p>
            <p>الهاتف: 0550661234</p>
          </div>

        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-right text-gray-400 text-sm">
        © 2023 STORA. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
