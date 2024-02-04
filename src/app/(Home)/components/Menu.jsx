import { menuCategories } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
   return (
      <section className="flexColCenter gap-y-[72px] lg:gap-y-[100px] xl:gap-y-[158px] px-5 lg:px-16 xl:px-[108px]">
         <h3 className="bold-16 lg:bold-20 xl:bold-24">منوی رستوران</h3>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-[106px] lg:gap-6 w-full">
            {menuCategories.map(({ title, href, image }) => (
               <div
                  key={href}
                  className="relative col-span-1 bg-primary-400 h-20 lg:h-[7.5rem] xl:h-40 w-full rounded-sm
                  shadow-cards">
                  <div className="flexRowCenter">
                     <Image
                        alt={title}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        className={`absolute size-[120px] lg:w-[175px] xl:w-[240px] ${
                           image.height == 290
                              ? "-top-16 lg:-top-[120px] xl:-top-40 lg:h-[210px] xl:h-[290px]"
                              : "-top-14 lg:-top-20 xl:-top-28 lg:h-[175px] xl:h-[240px]"
                        }`}
                     />
                  </div>

                  <div className="h-full flexColEnd">
                     <Link
                        prefetch={false}
                        href={href}
                        className="btn btn--tertiary--fill btn--sm xl:btn--md shadow-sm w-[96px] 
                        lg:w-[120px] xl:w-[155px] relative -bottom-6 lg:-bottom-[18px] xl:-bottom-5">
                        {title}
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};

export default Menu;
