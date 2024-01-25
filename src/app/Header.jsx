"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useState } from "react";

import { listItems, userNavLinks } from "@/constants";
import useOutsideClick from "@/hooks/useOutsideClick";

const Header = () => {
   const pathname = usePathname();
   const [activeSegments, setActiveSegments] = useState("");
   const ref = useOutsideClick(() => setActiveSegments(""));

   return (
      <header>
         <nav
            className="container px-[1.25rem] py-md xl:px-[6.75rem] xl:py-xl flexRowBetween
            xl:gap-x-[54px]">
            {/* burger menu button */}
            <button className="flexRowCenter xl:hidden">
               <Image
                  src="/images/menu.svg"
                  alt="Tarkhineh"
                  width={24}
                  height={24}
               />
            </button>

            {/* logo */}
            <div className="flexRowCenter xl:items-start gap-x-1 xl:gap-x-2">
               <Image
                  src="/images/Logo.svg"
                  alt="logo"
                  width={29}
                  height={32}
                  className="w-[29px] h-[32px] xl:w-[46px] xl:h-[51px]"
               />
               <Image
                  src="/images/Vector.svg"
                  alt="Tarkhineh"
                  width={67}
                  height={32}
                  className="w-[67px] h-[32px] xl:w-[99px] xl:h-[46px]"
               />
            </div>

            {/* desktop list items */}
            <ul className="hidden xl:flexRowCenter w-full gap-x-6">
               {listItems.map(({ label, href, icon, segments }) => (
                  <li
                     key={label}
                     className={`flexRowCenter gap-x-1 transition-all cursor-pointer relative
                     ${
                        pathname === href
                           ? "bold-20 text-primary-400 border-b border-primary-400"
                           : "regular-20 text-secondary-700"
                     }`}>
                     {icon ? (
                        <Fragment>
                           <div
                              className="flexRowCenter gap-x-1"
                              onClick={() => setActiveSegments(segments.key)}>
                              <span>{label}</span>
                              <Image
                                 src="/images/arrow-down.svg"
                                 alt="Tarkhineh"
                                 width={16}
                                 height={16}
                                 className={`transition-all duration-500 ${
                                    activeSegments === segments.key
                                       ? "rotate-180"
                                       : ""
                                 }`}
                              />
                           </div>
                           {activeSegments === segments.key && (
                              <DesktopItemSegments
                                 segments={segments.list}
                                 onClose={() => setActiveSegments("")}
                              />
                           )}
                        </Fragment>
                     ) : (
                        <Link href={href}>{label}</Link>
                     )}
                  </li>
               ))}
            </ul>

            {/* other buttons */}
            <div className="flexRowCenter gap-x-1 xl:gap-x-2">
               <button className="hidden xl:flexRowCenter size-6 xl:size-10 bg-primary-50 rounded-sm">
                  <Image
                     src="/images/search-normal.svg"
                     alt="Tarkhineh"
                     width={16}
                     height={16}
                     className="w-4 h-4 xl:w-6 xl:h-6"
                  />
               </button>
               <button className="flexRowCenter size-6 xl:size-10 bg-primary-50 rounded-sm">
                  <Image
                     src="/images/shopping-cart.svg"
                     alt="Tarkhineh"
                     width={16}
                     height={16}
                     className="w-4 h-4 xl:w-6 xl:h-6"
                  />
               </button>
               <div className="relative">
                  <button
                     ref={ref}
                     onClick={() => setActiveSegments(userNavLinks.key)}
                     className="flexRowCenter gap-x-1 w-10 h-6 xl:w-14 xl:h-10 bg-primary-50 rounded-sm">
                     <Image
                        src="/images/user.svg"
                        alt="Tarkhineh"
                        width={16}
                        height={16}
                        className="w-4 h-4 xl:w-6 xl:h-6"
                     />
                     <Image
                        src="/images/arrow-down-green.svg"
                        alt="Tarkhineh"
                        width={16}
                        height={16}
                        className={`transition-all duration-500 ${
                           activeSegments === userNavLinks.key
                              ? "rotate-180"
                              : ""
                        }`}
                     />
                  </button>

                  {activeSegments === userNavLinks.key && (
                     <DesktopItemSegments
                        segments={userNavLinks.segments}
                        onClose={() => setActiveSegments("")}
                        activeSegments={activeSegments}
                     />
                  )}
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Header;

const DesktopItemSegments = ({ segments, onClose, activeSegments = "" }) => {
   const ref = useOutsideClick(onClose);

   return (
      <ul
         ref={ref}
         className={`absolute bg-secondary-0 shadow-md rounded-sm flexColStart ${
            activeSegments === userNavLinks.key
               ? "-bottom-56 -right-24"
               : "-bottom-44 right-4"
         }`}>
         {segments.map(({ label, href, icon }) => (
            <Link
               key={label}
               href={href}
               className={`flexRowStart gap-x-1 text-secondary-800 regular-14 w-[144px] ${
                  icon ? "p-sm" : "px-md py-sm"
               }`}>
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
