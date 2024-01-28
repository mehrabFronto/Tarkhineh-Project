export const listItems = [
   { href: "/", label: "صفحه اصلی" },
   {
      label: "شعبه",
      icon: "/images/arrow-down.svg",
      segments: {
         key: "branch",
         list: [
            { label: "اکتابان", href: "/branch/oktaban" },
            { label: "چالوس", href: "/branch/chaloos" },
            { label: "افدسیه", href: "/branch/aghdasieh" },
            { label: "ونک", href: "/branch/vanak" },
         ],
      },
   },
   {
      label: "منو",
      icon: "/images/arrow-down.svg",
      segments: {
         key: "menu",
         list: [
            { label: "غذای اصلی", href: "/menu/main-course" },
            { label: "پیش غذا", href: "/menu/appetizer" },
            { label: "دسر", href: "/menu/dessert" },
            { label: "نوشیدنی", href: "/menu/beverages" },
         ],
      },
   },
   { href: "/deputize", label: "اعطای نمایندگی" },
   { href: "/about", label: "درباره ما" },
   { href: "/contact", label: "تماس با ما" },
];

export const userNavLinks = {
   key: "user",
   segments: [
      {
         label: "پروفایل",
         href: "/user/profile",
         icon: "/images/user-black.svg",
      },
      {
         label: "پیگیری سفارش",
         href: "/user/check-order",
         icon: "/images/wallet-2.svg",
      },
      {
         label: "علاقه مندی ها",
         href: "/user/favorites",
         icon: "/images/heart.svg",
      },
      {
         label: "آدرس های من",
         href: "/user/my-addresses",
         icon: "/images/location.svg",
      },
      {
         label: "خروج از حساب",
         href: "/",
         icon: "/images/logout.svg",
      },
   ],
};

export const burgerMenuItems = [
   { href: "/", label: "صفحه اصلی", icon: "/images/home.svg" },
   {
      label: "منو",
      icon: "/images/menu-board.svg",
      segments: {
         key: "menu",
         list: [
            { label: "غذای اصلی", href: "/menu/main-course" },
            { label: "پیش غذا", href: "/menu/appetizer" },
            { label: "دسر", href: "/menu/dessert" },
            { label: "نوشیدنی", href: "/menu/beverages" },
         ],
      },
   },
   {
      label: "شعبه",
      icon: "/images/home-hashtag.svg",
      segments: {
         key: "branch",
         list: [
            { label: "اکتابان", href: "/branch/oktaban" },
            { label: "چالوس", href: "/branch/chaloos" },
            { label: "افدسیه", href: "/branch/aghdasieh" },
            { label: "ونک", href: "/branch/vanak" },
         ],
      },
   },
   { href: "/about", label: "درباره ما", icon: "/images/profile-2user.svg" },
   { href: "/contact", label: "تماس با ما", icon: "/images/call-calling.svg" },
];