"use client";

import Image from "next/image";
import { useState } from "react";

const SearchBox = () => {
   const [searchValue, setSearchValue] = useState("");

   return (
      <form className="input__container">
         <div>
            <input
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
               id="search"
               type="text"
               className={`input input--md w-full ${
                  searchValue ? "activatedInput" : ""
               }`}
            />

            <label
               htmlFor="search"
               className="input__label regular-14 top-2 right-4">
               جستجو
            </label>
         </div>

         <button className="absolute left-4 top-3">
            <Image
               src="/images/search-normal-black.svg"
               width={16}
               height={16}
               alt="search"
            />
         </button>
      </form>
   );
};

export default SearchBox;
