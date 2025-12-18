import Image from "next/image";

export default function Body() {
  return (
    <main className="flex flex-col w-full">

      <section
        id="home"
        className="bg-white text-blue-900 py-32 px-6 w-full"
        dir="rtl"
      >
        <div className="flex flex-col md:flex-row items-center md:justify-between max-w-6xl mx-auto">
          
          {/* النص */}
          <div className="md:w-1/2 text-right mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-4 leading-snug">
              نربط المحلات التجارية بعالم التجارة الإلكترونية
            </h1>
            <p className="text-xl">
              حلول لوجستية متكاملة تدعمها التقنية الحديثة لتطوير تجربة التجارة الإلكترونية في المملكة
            </p>
          </div>

          {/* الصورة */}
          <div className="md:w-1/2 flex justify-start">
            <Image
              src="/images/sideimg.jpeg"
              alt="توضيح"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
<div className="w-full border-t-2 border-blue-900 my-5"></div>

{/* من نحن */}
<section
  id="about"
  className="bg-white text-black py-32 px-6 w-full"
  dir="rtl"
>
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-black">
      من نحن
    </h2>
    <div className="w-24 h-1 bg-blue-900 mx-auto mt-2 rounded"></div>
  </div>

  <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto gap-12">

    <div className="md:w-1/2 text-right space-y-6">
      <h3 className="text-4xl text-blue-900 font-bold">
        STORA
      </h3>

      <p className="text-lg leading-8">
        نحن شركة تقنية لوجستية متخصصة في ربط المحلات التجارية بعالم التجارة
        الإلكترونية. تتوزع مخازننا في جميع مدن المملكة لتقديم خدمات لوجستية
        متكاملة تلبي احتياجات شركائنا.
      </p>

      <h4 className="text-2xl font-semibold text-blue-900">
        هدفنا
      </h4>
      <p className="text-lg leading-8">
        تطوير التجربة اللوجستية للتجارة الإلكترونية في المملكة، من خلال توفير
        خدمات متكاملة تلبي احتياجات الشركاء.
      </p>

      <h4 className="text-2xl font-semibold text-blue-900">
        رؤيتنا
      </h4>
      <p className="text-lg leading-8">
        أن نكون الشركة الرائدة في المجال اللوجستي وإدارة طلبات التجارة
        الإلكترونية في المنطقة، من خلال توظيف التقنية الحديثة والتدريب
        لتلبية احتياجات الشركاء.
      </p>
    </div>

    <div className="md:w-1/2 flex flex-col gap-6">

      {/* 1 */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
        <p className="text-5xl font-bold text-blue-900 mb-2">
          406
        </p>
        <p className="text-xl font-semibold text-gray-600 mb-1">
          مليار ريال
        </p>
        <p className="text-gray-600">
          حجم سوق التجارة الإلكترونية
        </p>
      </div>

      {/* 2 */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
        <p className="text-5xl font-bold text-blue-900 mb-2">
          13.5%
        </p>
        <p className="text-xl font-semibold text-gray-600 mb-1">
          نمو سنوي
        </p>
        <p className="text-gray-600">
          معدل نمو التجارة الإلكترونية
        </p>
      </div>

      {/* 3 */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center">
        <p className="text-5xl font-bold text-blue-900 mb-2">
          77%
        </p>
        <p className="text-xl font-semibold text-gray-600 mb-1">
          من السكان
        </p>
        <p className="text-gray-600">
          يفضلون التسوق عبر الإنترنت
        </p>
      </div>

    </div>
  </div>
</section>



{/* خدماتنا */}
<section
  id="services"
  className="bg-blue-900 text-white py-32 px-6 w-full"
  dir="rtl"
>
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-white">خدماتنا</h2>
    <div className="w-24 h-1 bg-sky-200 mx-auto mt-2 rounded"></div>
    <p className="text-white text-lg mt-4 leading-7 max-w-2xl mx-auto">
      نقدم مجموعة متكاملة من الخدمات اللوجستية والتقنية لدعم شركائنا في عالم التجارة الإلكترونية
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* 1 */}
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 text-center flex flex-col items-center">
      <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mb-4">
        <Image src="/display-code.png" alt="الربط التقني" width={40} height={40} />
      </div>
      <h4 className="text-xl font-bold text-blue-900 mb-4">الربط التقني</h4>

      <ul className="w-full space-y-2 text-right">
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          نظام تقني ولوحة تحكم لمراقبة المخزون
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
         تطبيق لاستلام الطلبات على هاتف الموظفين
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
        أجهزة طباعة كروت الإهداء وماسح ضوئي
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
       تدريب الموظفين على التعامل مع الطلبات
        </li>
      </ul>
    </div>
    {/* 2 */}
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
      <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mb-4">
        <Image src="/boxes.png" alt="أداره منتجات المتاجر" width={40} height={40} />
      </div>
      <h4 className="text-xl font-bold text-blue-900 mb-4">أداره منتجات المتاجر</h4>

      <ul className="w-full space-y-2 text-right">
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          إدارة ومتابعة متكاملة للمخزون
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          تنظيم المنتجات بكفاءة في الأرفف
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          نظام تتبع المخزون المباشر
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          تسريع تنفيذ الطلبات بدقة عالية
        </li>
      </ul>
    </div>

    {/* 3 */}
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
      <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mb-4">
        <Image src="/gift.png" alt="تغليف المنتجات" width={40} height={40} />
      </div>
      <h4 className="text-xl font-bold text-blue-900 mb-4">تغليف المنتجات</h4>

      <ul className="w-full space-y-2 text-right">
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          فريق متخصص في تنسيق وتغليف الورد
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          أربطة وإكسسوارات مخصصة للتغليف
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          دعم من فريق متخصص لمتابعة موظفي المحل
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          تزويد المحل بأحدث صيحات التغليف
        </li>
      </ul>
    </div>

    {/* 4 */}
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
      <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mb-4">
        <Image src="/truck-container.png" alt="خدمات الاستلام السريع" width={40} height={40} />
      </div>
      <h4 className="text-xl font-bold text-blue-900 mb-4">خدمات الاستلام السريع</h4>

      <ul className="w-full space-y-2 text-right">
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          شبكة توزيع داخلية قوية
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          استلام وتوصيل المنتجات بسرعة وكفاءة
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          تغطية جميع أحياء المدينة
        </li><li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          فريق دعم متاح على مدار الساعة
        </li>
      </ul>
    </div>

    {/* 5 */}
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
      <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mb-4">
        <Image src="/chart-line-up.png" alt="تحليل البيانات" width={40} height={40} />
      </div>
      <h4 className="text-xl font-bold text-blue-900 mb-4">تحليل البيانات</h4>

      <ul className="w-full space-y-2 text-right">
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          نظام تحليل متقدم للمخزون وحركة الطلبات
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          تقارير شاملة وبيانات مفصلة عن الأداء
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          تقارير شهرية لإدارة المحل
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          دعم اتخاذ القرارات الاستراتيجية
        </li>
      </ul>
    </div>

    {/* 6 */}
    <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
      <div className="w-16 h-16 bg-sky-200 rounded-full flex items-center justify-center mb-4">
        <Image src="/headphones.png" alt="الدعم المستمر" width={40} height={40} />
      </div>
      <h4 className="text-xl font-bold text-blue-900 mb-4">الدعم المستمر</h4>

      <ul className="w-full space-y-2 text-right">
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          دعم مخصص للشركاء
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          حل المشكلات التقنية بسرعة
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          إدارة الالتزام لضمان استمرارية الأعمال
        </li>
        <li className="flex items-center text-black gap-2">
          <span className="text-blue-900 font-bold">✓</span>
          تواصل مستمر لتحسين الخدمة
        </li>
      </ul>
    </div>

  </div>
</section>



{/* فريقنا */}
<section
  id="team"
  className="bg-white text-black py-32 px-6 w-full"
  dir="rtl"
>
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-black">
      فريقنا
    </h2>
    <div className="w-24 h-1 bg-blue-900 mx-auto mt-2 rounded"></div>
    <p className="text-gray-500 text-lg mt-4 leading-7 max-w-2xl mx-auto">
      فريق ملتزم يهتم بالتفاصيل والجودة، ويحل جميع المشكلات لضمان استمرار الشركات الاستراتيجية
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-0 text-center flex flex-col">
      <Image
        src="/images/team.jfif"
        alt="اخصائيين في اللوجستيات"
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-6">
        <h4 className="text-2xl font-bold text-blue-900 mb-2">اخصائيين في اللوجستيات</h4>
        <p className="text-gray-600">خبراء في تخطيط و تنفيذ العمليات اللوجستية بكفاءة عالية</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-0 text-center flex flex-col">
      <Image
        src="/images/team.jfif"
        alt="خبراء في ادارة المخزون"
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-6">
        <h4 className="text-2xl font-bold text-blue-900 mb-2">خبراء في ادارة المخزون</h4>
        <p className="text-gray-600">متخصصون في تنظيم و اداره المخزون بطرق مبتكرة و فعاله</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-0 text-center flex flex-col">
      <Image
        src="/images/team.jfif"
        alt="خبراء في التكنولوجيا"
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-6">
        <h4 className="text-2xl font-bold text-blue-900 mb-2">خبراء في التكنولوجيا</h4>
        <p className="text-gray-600">مطورون و مهندسون يبتكرون حلولا تقنية متقدمة لتحسين العمليات</p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-0 text-center flex flex-col">
      <Image
        src="/images/team.jfif"
        alt="اخصائيين في التغليف"
        width={400}
        height={200}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-6">
        <h4 className="text-2xl font-bold text-blue-900 mb-2">اخصائيين في التغليق</h4>
        <p className="text-gray-600">فنانون في تنسيق ة تغليف المنتجات بطرق مبتكرة و جذابة</p>
      </div>
    </div>

  </div>
</section>


    </main>
  );
}
