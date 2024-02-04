import { branches } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Branches = () => {
   return (
      <section
         className="flexColCenter gap-y-3 lg:gap-y-6 px-5 lg:px-0 mt-md lg:mt-lg xl:mt-xl mb-md 
         lg:mb-lg xl:mb-xl">
         <h3 className="bold-16 lg:bold-20 xl:bold-24">ترخینه گردی</h3>
         <div
            className="flexColCenter lg:flexRowCenter gap-y-3 lg:gap-x-4 xl:gap-x-6 w-full lg:px-16
            xl:px-[108px]">
            {branches.map(({ name, address, imageUrl, href }) => (
               <div
                  key={href}
                  className="w-full relative group">
                  <div
                     className="w-full border border-secondary-400 rounded-sm lg:rounded-md overflow-hidden
                     group-hover:border-primary-400 group-hover:shadow-cards transition-all duration-300">
                     {/* mobile */}
                     <Link
                        prefetch={false}
                        href={href}
                        className="flexRowStart gap-x-1 lg:hidden">
                        <div className="w-[144px] h-20">
                           <Image
                              src={imageUrl}
                              width={288}
                              height={230}
                              alt={name}
                              className="w-full h-full object-cover"
                           />
                        </div>

                        <div className="flexColBetween w-full flex-1 gap-y-1 pl-1">
                           <span className="medium-14 text-secondary-800">
                              {name}
                           </span>

                           <p className="text-center regular-10 text-secondary-700 max-w-[155px]">
                              {address}
                           </p>
                        </div>
                     </Link>

                     {/* expand btn */}
                     <button className="absolute bottom-2 right-2 lg:hidden">
                        <Image
                           src="/images/expand-white.svg"
                           width={16}
                           height={16}
                           alt="expand"
                        />
                     </button>

                     {/* desktop */}
                     <div className="hidden lg:flexColCenter gap-y-2 lg:h-[275px] xl:h-[340px] relative">
                        {/* image */}
                        <div className="w-full lg:h-[160px] xl:h-[230px] relative">
                           {/*  overlay while hover */}
                           <div
                              className="absolute w-full h-full lg:group-hover:h-[130px] xl:group-hover:h-[180px]
                              group-hover:bg-black/60 z-20 transition-all duration-300 ease-in-out"></div>

                           <div
                              className="h-full lg:group-hover:h-[130px] xl:group-hover:h-[180px] relative
                              transition-all duration-300">
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
                           className="flexColStart w-full flex-1 gap-y-1 pb-md group-hover:-translate-y-8
                            xl:group-hover:-translate-y-11 transition-all duration-500">
                           <h4 className="lg:semiBold-18 xl:semiBold-20 text-secondary-800">
                              {name}
                           </h4>

                           <p className="text-center lg:medium-12 xl:medium-14 text-secondary-700 max-w-[280px] px-1">
                              {address}
                           </p>
                        </div>

                        {/* navigation btn */}
                        <Link
                           href={href}
                           className="btn btn--sm btn--primary--stroke absolute -bottom-10 group-hover:bottom-3 
                           transition-all duration-700 w-[110px] xl:w-[130px]">
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
