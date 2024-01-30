import SearchBox from "@/common/SearchBox";
import Slider from "@/common/Slider";

const Home = () => {
   return (
      <div>
         {/* slider */}
         <section className="mb-sm">
            <Slider />
         </section>

         {/* mobil search box */}
         <div className="w-full px-5 xl:hidden">
            <SearchBox />
         </div>
      </div>
   );
};

export default Home;
