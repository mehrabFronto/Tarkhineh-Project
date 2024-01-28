import { useEffect, useRef } from "react";

const useOutsideClick = (cb, exceptionId, listenCapturing = true) => {
   const ref = useRef();

   useEffect(() => {
      const handleOutsideClick = (e) => {
         if (
            ref.current &&
            !ref.current.contains(e.target) &&
            e.target?.id !== exceptionId
         ) {
            // console.log(e.target?.id);
            cb();
         }
      };

      document.addEventListener("click", handleOutsideClick, listenCapturing);

      return () => {
         document.removeEventListener(
            "click",
            handleOutsideClick,
            listenCapturing,
         );
      };
   }, [cb]);

   return ref;
};

export default useOutsideClick;
