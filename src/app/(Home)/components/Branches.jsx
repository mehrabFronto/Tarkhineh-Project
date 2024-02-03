import { branches } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Branches = () => {
   return (
      <section className="flexColCenter gap-y-3 xl:gap-y-6 px-5 xl:px-0 mt-md xl:mt-xl mb-md xl:mb-xl">
         <h3 className="bold-16 xl:bold-24">ترخینه گردی</h3>
         <div className="flexColCenter xl:flexRowCenter gap-y-3 xl:gap-x-6 w-full xl:px-[108px] ">
            {branches.map(({ name, address, imageUrl, href }) => (
               <div
                  key={href}
                  className="w-full relative group">
                  <div
                     className="w-full border border-secondary-400 rounded-sm xl:rounded-md overflow-hidden
                     group-hover:border-primary-400 group-hover:shadow-cards transition-all duration-300">
                     {/* mobile */}
                     <Link
                        href={href}
                        className="flexRowStart xl:flexColCenter gap-x-1 xl:gap-y-2 xl:hidden">
                        <div className="w-[144px] h-20 xl:w-full xl:h-[230px]">
                           <Image
                              src={imageUrl}
                              width={288}
                              height={230}
                              alt={name}
                              className="w-full h-full object-cover"
                           />
                        </div>

                        <div className="flexColBetween w-full flex-1 gap-y-1 pl-1 xl:pl-0 xl:pb-md">
                           <span className="medium-14 xl:semiBold-20 text-secondary-800">
                              {name}
                           </span>

                           <p
                              className="text-center regular-10 xl:medium-14 text-secondary-700 max-w-[155px]
                           xl:max-w-[270px]">
                              {address}
                           </p>
                        </div>
                     </Link>

                     {/* expand btn */}
                     <button className="absolute bottom-2 right-2 xl:hidden">
                        <Image
                           src="/images/expand-white.svg"
                           width={16}
                           height={16}
                           alt="expand"
                        />
                     </button>

                     {/* desktop */}
                     <div className="hidden xl:flexColCenter gap-y-2 h-[340px] group relative">
                        {/* image */}
                        <div className="w-full h-[230px] relative">
                           {/*  overlay while hover */}
                           <div
                              className="absolute w-full h-full group-hover:h-[180px] group-hover:bg-black/60 z-20 transition-all
                           duration-300 ease-in-out"></div>

                           <div className="h-full group-hover:h-[180px] relative transition-all duration-300">
                              <Image
                                 src={imageUrl}
                                 width={288}
                                 height={230}
                                 alt={name}
                                 className="w-full h-full object-cover"
                              />

                              <button
                                 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]
                              opacity-0 group-hover:opacity-100 z-50">
                                 <Image
                                    src="/images/expand-white.svg"
                                    width={30}
                                    height={30}
                                    alt="expand"
                                 />
                              </button>
                           </div>
                        </div>

                        {/* content */}
                        <div
                           className="flexColStart w-full flex-1 gap-y-1 pb-md 
                        group-hover:-translate-y-11 transition-all duration-500">
                           <h4 className="semiBold-20 text-secondary-800">
                              {name}
                           </h4>

                           <p className="text-center medium-14 text-secondary-700 max-w-[280px] px-1">
                              {address}
                           </p>
                        </div>

                        {/* navigation btn */}
                        <Link
                           href={href}
                           className="btn btn--sm btn--primary--stroke absolute -bottom-10 group-hover:bottom-3 
                        transition-all duration-700 w-[130px]">
                           <span>صفحه شعبه</span>
                           <Image
                              src="/images/arrow-left-green.svg"
                              width={16}
                              height={16}
                              alt="arrow"
                           />
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Branches;
