"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

import { burgerMenuItems, listItems, userNavLinks } from "@/constants";
import useOutsideClick from "@/hooks/useOutsideClick";
import { Loadable } from "next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints";

const Header = () => {
   const [activeSegments, setActiveSegments] = useState("");
   const [isOpen, setIsOpen] = useState(false);

   return (
      <header>
         <nav
            className="container px-[1.25rem] py-md lg:px-16 xl:px-[6.75rem] lg:py-lg xl:py-xl
            flexRowBetween xl:gap-x-[54px]">
            {/* burger menu button */}
            <button
               onClick={() => setIsOpen(true)}
               className="flexRowCenter lg:hidden">
               <Image
                  src="/images/menu.svg"
                  alt="Tarkhineh"
                  width={24}
                  height={24}
               />
            </button>

            {isOpen && (
               <MobileBurgerMenu
                  onClose={() => setIsOpen(false)}
                  onActive={setActiveSegments}
                  activeSegments={activeSegments}
               />
            )}

            {/* logo */}
            <div className="flexRowCenter items-start gap-x-1 xl:gap-x-2">
               <Image
                  src="/images/Logo.svg"
                  alt="logo"
                  width={29}
                  height={32}
                  className="w-[29px] h-[32px] lg:w-[40px] lg:h-[45px] xl:w-[46px] xl:h-[51px]"
               />
               <Image
                  src="/images/Vector.svg"
                  alt="Tarkhineh"
                  width={67}
                  height={32}
                  className="w-[67px] h-[32px] lg:w-[93px] lg:h-[40px] xl:w-[99px] xl:h-[46px]"
               />
            </div>

            {/* desktop navbar */}

            <DesktopNavbar
               activeSegments={activeSegments}
               onActive={setActiveSegments}
            />

            {/* header buttons */}
            <HeaderButtons
               activeSegments={activeSegments}
               onActive={setActiveSegments}
            />
         </nav>
      </header>
   );
};

export default Header;

const MobileBurgerMenu = ({ onClose, onActive, activeSegments }) => {
   const pathname = usePathname();

   const clickHandler = (key) => {
      if (key === activeSegments) onActive("");
      else onActive(key);
   };

   return (
      <div className="lg:hidden">
         {/* backdrop */}
         <div
            className="fixed w-full h-screen top-0 left-0 z-20 backdrop-blur-[2px]
            bg-secondary-900 bg-opacity-15"
            onClick={onClose}
         />

         {/* menu */}
         <div className="absolute w-3/4 bg-secondary-0 h-screen z-30 top-0 right-0">
            {/* banner */}
            <div className="relative w-full">
               <Image
                  src="/images/top Frame.png"
                  alt="banner"
                  width={256}
                  height={94}
                  className="w-full"
               />

               <button
                  onClick={onClose}
                  className="w-6 h-6 absolute top-4 left-4">
                  <Image
                     src="/images/Close-white.svg"
                     alt="banner"
                     width={24}
                     height={24}
                  />
               </button>
            </div>

            {/* list items */}
            <ul className="flexColStart px-md">
               {burgerMenuItems.map(
                  ({ label, href, icon, segments }, index) => (
                     <li
                        key={index}
                        className={`flexRowStart gap-x-1 w-full transition-all border-b last:border-b-0 ${
                           href === pathname
                              ? "regular-14 text-primary-400"
                              : "regular-12 text-secondary-800"
                        }`}>
                        {segments ? (
                           <div className="w-full">
                              <div
                                 onClick={() => clickHandler(segments.key)}
                                 className="exception w-full flexRowBetween py-sm">
                                 <div className="exception flexRowStart gap-x-1 w-full">
                                    <Image
                                       src={icon}
                                       alt={Loadable}
                                       width={12}
                                       height={12}
                                       className={`exception ${
                                          href === pathname
                                             ? "w-4 h-4"
                                             : "w-3 h-3"
                                       }`}
                                    />
                                    <span className="exception">{label}</span>
                                 </div>
                                 <Image
                                    src={"/images/arrow-down-black.svg"}
                                    alt="arrow-down"
                                    width={16}
                                    height={16}
                                    className={` transition-all duration-500 exception ${
                                       segments.key === activeSegments
                                          ? "rotate-180"
                                          : ""
                                    }`}
                                 />
                              </div>

                              {segments.key === activeSegments && (
                                 <ul className="mt-xs">
                                    {segments.list.map((segment, index) => (
                                       <li
                                          key={index}
                                          className="text-secondary-700 border-b last:border-b-0
                                          last:mb-md">
                                          <Link
                                             prefetch={false}
                                             onClick={onClose}
                                             className="px-sm py-[4px] block"
                                             href={segment.href}>
                                             {segment.label}
                                          </Link>
                                       </li>
                                    ))}
                                 </ul>
                              )}
                           </div>
                        ) : (
                           <Link
                              href={href}
                              onClick={onClose}
                              className="w-full block">
                              <div className="py-sm w-full flexRowStart gap-x-1">
                                 <Image
                                    src={icon}
                                    alt="arrow-down"
                                    width={12}
                                    height={12}
                                    className={` ${
                                       href === pathname ? "w-4 h-4" : "w-3 h-3"
                                    }`}
                                 />
                                 <span>{label}</span>
                              </div>
                           </Link>
                        )}
                     </li>
                  ),
               )}
            </ul>
         </div>
      </div>
   );
};

const DesktopNavbar = ({ activeSegments, onActive }) => {
   const pathname = usePathname();

   const clickHandler = (key) => {
      if (key === activeSegments) onActive("");
      else onActive(key);
   };

   return (
      <ul className="hidden lg:flexRowCenter w-full lg:gap-x-4 xl:gap-x-6">
         {listItems.map(({ label, href, icon, segments }) => (
            <li
               key={label}
               className={`flexRowCenter gap-x-1 transition-all cursor-pointer relative
                     ${
                        pathname === href
                           ? "lg:bold-18 xl:bold-20 text-primary-400 border-b border-primary-400"
                           : "lg:regular-18 xl:regular-20 text-secondary-700"
                     }`}>
               {icon ? (
                  <Fragment>
                     <div
                        className="flexRowCenter gap-x-1 exception"
                        onClick={() => clickHandler(segments.key)}>
                        <span className="exception">{label}</span>
                        <Image
                           src="/images/arrow-down.svg"
                           alt="Tarkhineh"
                           width={16}
                           height={16}
                           className={`transition-all duration-500 exception ${
                              activeSegments === segments.key
                                 ? "rotate-180"
                                 : ""
                           }`}
                        />
                     </div>
                     {activeSegments === segments.key && (
                        <DesktopItemSegments
                           segments={segments.list}
                           onClose={() => onActive("")}
                        />
                     )}
                  </Fragment>
               ) : (
                  <Link href={href}>{label}</Link>
               )}
            </li>
         ))}
      </ul>
   );
};

const HeaderButtons = ({ activeSegments, onActive }) => {
   const clickHandler = (key) => {
      if (key === activeSegments) onActive("");
      else onActive(key);
   };

   return (
      <div className="flexRowCenter gap-x-1 lg:gap-x-2">
         <button className="hidden lg:flexRowCenter size-6 lg:size-8 xl:size-10 bg-primary-50 rounded-sm">
            <Image
               src="/images/search-normal.svg"
               alt="Tarkhineh"
               width={16}
               height={16}
               className="size-4 lg:size-5 xl:size-6"
            />
         </button>
         <button className="flexRowCenter size-6 lg:size-8 xl:size-10 bg-primary-50 rounded-sm">
            <Image
               src="/images/shopping-cart.svg"
               alt="Tarkhineh"
               width={16}
               height={16}
               className="size-4 lg:size-5 xl:size-6"
            />
         </button>
         <div className="relative exception">
            <button
               onClick={() => clickHandler(userNavLinks.key)}
               className="flexRowCenter gap-x-1 w-10 h-6 lg:w-12 lg:h-8 xl:w-14 xl:h-10 bg-primary-50 rounded-sm
               exception">
               <Image
                  src="/images/user.svg"
                  alt="Tarkhineh"
                  width={16}
                  height={16}
                  className="size-4 lg:size-5 xl:size-6 exception"
               />
               <Image
                  src="/images/arrow-down-green.svg"
                  alt="Tarkhineh"
                  width={16}
                  height={16}
                  className={`transition-all duration-500 exception ${
                     activeSegments === userNavLinks.key ? "rotate-180" : ""
                  }`}
               />
            </button>

            {activeSegments === userNavLinks.key && (
               <DesktopItemSegments
                  segments={userNavLinks.segments}
                  onClose={() => onActive("")}
                  activeSegments={activeSegments}
               />
            )}
         </div>
      </div>
   );
};

const DesktopItemSegments = ({ segments, onClose, activeSegments = "" }) => {
   const ref = useOutsideClick(onClose, "exception");

   return (
      <ul
         ref={ref}
         className={`absolute bg-secondary-0 shadow-md rounded-sm flexColStart z-20 ${
            activeSegments === userNavLinks.key
               ? "-bottom-56 -right-24"
               : "-bottom-44 right-4"
         }`}>
         {segments.map(({ label, href, icon }) => (
            <Link
               prefetch={false}
               key={label}
               href={href}
               className={`flexRowStart gap-x-1 text-secondary-800 regular-14 w-[144px] 
               border-b last:border-b-0 ${icon ? "p-sm" : "px-md py-sm"}`}>
               {icon && (
                  <Image
                     src={icon}
                     alt={label}
                     width={16}
                     height={16}
                  />
               )}
               <span>{label}</span>
            </Link>
         ))}
      </ul>
   );
};
