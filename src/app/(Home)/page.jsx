import SearchBox from "@/common/SearchBox";
import Slider from "@/common/Slider";
import Branches from "./components/Branches";
import Introduction from "./components/Introduction";
import Menu from "./components/Menu";

const Home = () => {
   return (
      <div>
         {/* slider */}
         <section className="mb-sm xl:mb-2xl">
            <Slider />
         </section>

         {/* mobil search box */}
         <div className="w-full px-5 xl:hidden mb-md">
            <SearchBox />
         </div>

         <Menu />

         <Introduction />

         <Branches />
      </div>
   );
};

export default Home;
