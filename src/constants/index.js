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

export const menuCategories = [
   {
      title: "غذای اصلی",
      image: {
         src: "/images/plate-1.png",
         width: 240,
         height: 240,
      },
      href: "/menu/main-course",
   },
   {
      title: "پیش غذا",
      image: {
         src: "/images/plate-2.png",
         width: 240,
         height: 240,
      },
      href: "/menu/appetizer",
   },
   {
      title: "دسر",
      image: {
         src: "/images/plate-3.png",
         width: 240,
         height: 240,
      },
      href: "/menu/dessert",
   },
   {
      title: "نوشیدنی",
      image: {
         src: "/images/beverages.png",
         width: 240,
         height: 290,
      },
      href: "/menu/beverages",
   },
];

export const branches = [
   {
      name: "شعبه اکباتان",
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      imageUrl: "/images/branch-1.png",
      href: "/branch/oktaban",
   },
   {
      name: "شعبه چالوس",
      address:
         "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
      imageUrl: "/images/branch-2.png",
      href: "/branch/chaloos",
   },
   {
      name: "شعبه اقدسیه",
      address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
      imageUrl: "/images/branch-3.png",
      href: "/branch/aghdasieh",
   },
   {
      name: "شعبه ونک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      imageUrl: "/images/branch-4.png",
      href: "/branch/vanak",
   },
];
