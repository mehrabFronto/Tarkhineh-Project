const Home = () => {
   return (
      <div className="p-10">
         <h1 className="text-primary-400">خانه</h1>
         <p>متن تستی</p>
         <div className="p-10">
            <div className="input__container">
               <input
                  id="test"
                  type="text"
                  className="input input--md"
               />
               <label
                  htmlFor="test"
                  className="input__label">
                  رمز عبور
               </label>
            </div>
         </div>
      </div>
   );
};

export default Home;
