import { useEffect, useRef } from "react";

const useOutsideClick = (cb, exceptionKey, listenCapturing = true) => {
   const ref = useRef();

   useEffect(() => {
      const handleOutsideClick = (e) => {
         if (
            ref.current &&
            !ref.current.contains(e.target) &&
            ![...e.target.classList].includes(exceptionKey)
         ) {
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
