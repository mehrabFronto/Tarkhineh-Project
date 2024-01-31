import Image from "next/image";

const Introduction = () => {
   return (
      <section
         className="mt-xl xl:mt-[72px] bg-introduction-mobile xl:bg-introduction-desktop
         bg-no-repeat bg-cover px-5 xl:px-[108px] py-md xl:py-[48px] flexColBetween 
         xl:flexRowBetween xl:items-end gap-y-6">
         <div className="space-y-2 xl:space-y-4 max-w-[600px]">
            <h4 className="text-secondary-0 regular-16 xl:bold-24 xl:mb-2">
               رستوران‌های زنجیره‌ای ترخینه
            </h4>
            <p className="text-secondary-0 regular-10 xl:regular-20 text-justify tracking-wide">
               مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
               ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
               رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل
               بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و
               درخور شان شما عزیزان ارائه دهیم.
            </p>

            <div className="flexRowEnd">
               <button className="btn btn--tertiary--stroke btn--sm xl:btn-md gap-x-2 w-1/2 xl:w-[29%]">
                  <span className="text-secondary-0 regular-12">
                     اطلاعات بیشتر
                  </span>
                  <Image
                     src="/images/arrow-left-white.svg"
                     width={16}
                     height={16}
                     alt="arrow-left"
                     className="xl:w-6 xl:h-6"
                  />
               </button>
            </div>
         </div>

         <div className="grid grid-cols-2 gap-y-4 xl:gap-y-2 gap-x-12 xl:gap-x-6 w-full xl:w-auto">
            <div className="flexColCenter gap-y-1 xl:gap-y-4 col-span-1 xl:px-3 xl:py-md">
               <Image
                  src="/images/user-white.svg"
                  width={24}
                  height={24}
                  alt="user"
                  className="xl:size-12"
               />
               <span className="text-secondary-0 regular-12 xl:regular-18">
                  پرسنلی مجرب و حرفه‌ای
               </span>
            </div>
            <div className="flexColCenter gap-y-1 col-span-1">
               <Image
                  src="/images/diagram.svg"
                  width={24}
                  height={24}
                  alt="diagram"
                  className="xl:size-12"
               />
               <span className="text-secondary-0 regular-12 xl:regular-18">
                  کیفیت بالای غذاها
               </span>
            </div>
            <div className="flexColCenter gap-y-1 col-span-1">
               <Image
                  src="/images/home-wifi.svg"
                  width={24}
                  height={24}
                  alt="home"
                  className="xl:size-12"
               />
               <span className="text-secondary-0 regular-12 xl:regular-18">
                  محیطی دلنشین و آرام
               </span>
            </div>
            <div className="flexColCenter gap-y-1 xl:gap-y-4 col-span-1 xl:px-3 xl:py-md">
               <Image
                  src="/images/menu-board-white.svg"
                  width={24}
                  height={24}
                  alt="menu"
                  className="xl:size-12"
               />
               <span className="text-secondary-0 regular-12 xl:regular-18">
                  منوی متنوع
               </span>
            </div>
         </div>
      </section>
   );
};

export default Introduction;
