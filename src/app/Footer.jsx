"use client";

import { footerLinks } from "@/constants";
import { toPersianDigits } from "@/utils/toPersianDigits";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const inputs = [
   { key: "name", label: "نام و نام خانوادگی", type: "text" },
   { key: "phoneNumber", label: "شماره تماس", type: "number" },
   { key: "email", label: "آدرس ایمیل", type: "email" },
];

const MESSAGE_LIMIT = 200;

const Footer = () => {
   const [contactInfo, setContactInfo] = useState({
      name: "",
      phoneNumber: "",
      email: "",
   });

   const [{ message, messageCount }, setMessage] = useState({
      message: "",
      messageCount: 0,
   });

   const changeHandler = ({ target }) => {
      const { value, name } = target;
      setContactInfo({
         ...contactInfo,
         [name]: value,
      });
   };

   const setFormattedMessage = (text) => {
      let characters = text.split("");
      if (characters.length > MESSAGE_LIMIT) {
         setMessage({
            message: characters.slice(0, MESSAGE_LIMIT).join(""),
            messageCount: MESSAGE_LIMIT,
         });
      } else {
         setMessage({ message: text, messageCount: characters.length });
      }
   };

   useEffect(() => {
      setFormattedMessage(message);
   }, []);

   return (
      <footer className="container bg-footer-mobile xl:bg-footer-desktop bg-cover">
         <div className="grid grid-cols-2 xl:grid-cols-4 py-md xl:py-xl px-5 xl:px-28">
            {/* links */}
            {footerLinks.map(({ title, links, socials }) => (
               <div
                  key={title}
                  className="space-y-2 xl:space-y-4 col-span-1">
                  <h4 className="regular-12 xl:bold-20 text-secondary-0">
                     {title}
                  </h4>
                  <ul className="pr-sm xl:pr-3">
                     {links.map(({ label, href }) => {
                        return (
                           <li
                              className="regular-10 xl:medium-14 text-secondary-0"
                              key={href}>
                              <Link
                                 className="py-0.5 xl:py-2 block w-1/2"
                                 href={href}>
                                 {label}
                              </Link>
                           </li>
                        );
                     })}
                  </ul>
                  {socials && (
                     <div className="flexRowStart gap-x-2 xl:gap-x-4 mt-[4px] xl:mt-sm pr-sm xl:pr-3">
                        {socials.map((item, index) => (
                           <Link
                              key={index}
                              href={item.href}
                              className="block">
                              <Image
                                 src={item.icon}
                                 width={24}
                                 height={24}
                                 alt="socials"
                                 className="size-4 xl:size-6"
                              />
                           </Link>
                        ))}
                     </div>
                  )}
               </div>
            ))}

            {/* send message form */}
            <form className="hidden xl:block col-span-2 space-y-4">
               <h4 className="regular-12 xl:bold-20 text-secondary-0">
                  پیام به ترخینه
               </h4>

               <div className="grid grid-cols-2 grid-rows-4 pr-3 gap-x-[26px]">
                  {/* contact info */}
                  <div className="col-span-1 row-span-3 flexColCenter gap-y-5">
                     {inputs.map(({ label, key, type }) => (
                        <div
                           key={key}
                           className="w-full input__container">
                           <input
                              name={key}
                              value={contactInfo[key]}
                              onChange={changeHandler}
                              id={key}
                              type={type}
                              className={`input input--md w-full bg-transparent border-secondary-700 
                              hover:border-secondary-500 text-secondary-0 ${
                                 !!contactInfo[key] ? "activatedInput" : ""
                              }`}
                           />

                           <label
                              htmlFor={key}
                              className="input__label !text-secondary-0 top-2 right-4 regular-14">
                              {label}
                           </label>
                        </div>
                     ))}
                  </div>

                  {/* message */}
                  <div className="col-span-1 row-span-4 flexColEnd gap-y-4 items-end">
                     <div className="w-full input__container h-full">
                        <textarea
                           value={message}
                           onChange={(e) => setFormattedMessage(e.target.value)}
                           id="message"
                           name="message"
                           className={`input input--md w-full h-full bg-transparent border-secondary-700 
                           hover:border-secondary-500 text-secondary-0 resize-none hide-scrollbar ${
                              !!message ? "activatedInput" : ""
                           }`}
                        />

                        <label
                           htmlFor={"message"}
                           className="input__label !text-secondary-0 top-2 right-4 regular-14">
                           پیام شما
                        </label>

                        <p className="regular-12 text-secondary-0 absolute -bottom-7 right-2">
                           {toPersianDigits(messageCount)}/
                           {toPersianDigits(MESSAGE_LIMIT)}
                        </p>
                     </div>

                     <button className="btn btn--md btn--secondary--stroke w-3/5 medium-14">
                        ارسال پیام
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </footer>
   );
};

export default Footer;