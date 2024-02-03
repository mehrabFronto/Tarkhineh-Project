import { menuCategories } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
   return (
      <section className="flexColCenter gap-y-[72px] xl:gap-y-[158px] px-5 xl:px-[108px]">
         <h3 className="bold-16 xl:bold-24">منوی رستوران</h3>
         <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-[106px] xl:gap-6 w-full">
            {menuCategories.map(({ title, href, image }) => (
               <div
                  key={href}
                  className="relative col-span-1 bg-primary-400 h-20 xl:h-40 w-full rounded-sm
                  shadow-cards">
                  <div className="flexRowCenter">
                     <Image
                        alt={title}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        className={`absolute w-[120px] h-[120px] xl:w-[240px] ${
                           image.height == 290
                              ? "-top-16 xl:-top-40 xl:h-[290px]"
                              : "-top-14 xl:-top-28 xl:h-[240px]"
                        }`}
                     />
                  </div>

                  <div className="h-full flexColEnd">
                     <Link
                        href={href}
                        className="btn btn--tertiary--fill btn--sm xl:btn--md shadow-sm w-[96px] 
                        xl:w-[155px] relative -bottom-6">
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
