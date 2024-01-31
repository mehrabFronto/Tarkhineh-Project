/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

function withOpacity(variableName) {
   return ({ opacityValue }) => {
      if (opacityValue !== undefined) {
         return `rgba(var(${variableName}), ${opacityValue})`;
      }
      return `rgb(var(${variableName}))`;
   };
}

module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/common/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         fontFamily: {
            sans: ["var(--font-estedad)", ...fontFamily.sans],
         },

         colors: {
            primary: {
               900: withOpacity("--color-primary-900"),
               800: withOpacity("--color-primary-800"),
               700: withOpacity("--color-primary-700"),
               600: withOpacity("--color-primary-600"),
               550: withOpacity("--color-primary-550"),
               500: withOpacity("--color-primary-500"),
               450: withOpacity("--color-primary-450"),
               400: withOpacity("--color-primary-400"),
               350: withOpacity("--color-primary-350"),
               300: withOpacity("--color-primary-300"),
               250: withOpacity("--color-primary-250"),
               200: withOpacity("--color-primary-200"),
               150: withOpacity("--color-primary-150"),
               100: withOpacity("--color-primary-100"),
               50: withOpacity("--color-primary-50"),
            },
            secondary: {
               900: withOpacity("--color-secondary-900"),
               800: withOpacity("--color-secondary-800"),
               700: withOpacity("--color-secondary-700"),
               600: withOpacity("--color-secondary-600"),
               500: withOpacity("--color-secondary-500"),
               400: withOpacity("--color-secondary-400"),
               300: withOpacity("--color-secondary-300"),
               200: withOpacity("--color-secondary-200"),
               100: withOpacity("--color-secondary-100"),
               0: withOpacity("--color-secondary-0"),
            },
            success: withOpacity("--color-success"),
            success_light: withOpacity("--color-success-light"),
            success_extraLight: withOpacity("--color-success-extraLight"),
            warning: withOpacity("--color-warning"),
            warning_light: withOpacity("--color-warning-light"),
            warning_extraLight: withOpacity("--color-warning-extraLight"),
            error: withOpacity("--color-error"),
            error_light: withOpacity("--color-error-light"),
            error_extraLight: withOpacity("--color-error-extraLight"),
         },

         boxShadow: {
            xs: "0px 2px 2px 0px rgba(var(--color-shadow))",
            sm: "0px 4px 4px 0px rgba(var(--color-shadow))",
            md: "0px 6px 6px 0px rgba(var(--color-shadow))",
            lg: "0px 8px 8px 0px rgba(var(--color-shadow))",
            xl: "0px 12px 12px 0px rgba(var(--color-shadow))",
            "2xl": "0px 16px 16px 0px rgba(var(--color-shadow))",
            cards: "0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.10), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 16px 6px 0px rgba(0, 0, 0, 0.01), 0px 25px 7px 0px rgba(0, 0, 0, 0.00)",
         },

         container: {
            center: true,
         },

         borderRadius: {
            none: "0",
            sm: "0.25rem",
            md: "0.5rem",
            lg: "1rem",
            xl: "1.5rem",
            "2xl": "2rem",
            "3xl": "3rem",
         },

         margin: {
            xs: "0.5rem",
            sm: "1rem",
            md: "1.5rem",
            lg: "2.5rem",
            xl: "3rem",
            "2xl": "3.5rem",
            "3xl": "4rem",
            "4xl": "5rem",
            "5xl": "7.5rem",
            "6xl": "10rem",
         },

         padding: {
            sm: "0.5rem",
            md: "1rem",
            lg: "1.5rem",
            xl: "2rem",
         },

         backgroundImage: {
            "slider-1-desktop": "url('/images/slider-1-desktop.png')",
            "slider-1-mobile": "url('/images/slider-1-mobile.png')",
            "slider-2-desktop": "url('/images/slider-2-desktop.png')",
            "slider-2-mobile": "url('/images/slider-2-mobile.png')",
            "slider-3-desktop": "url('/images/slider-3-desktop.png')",
            "slider-3-mobile": "url('/images/slider-3-mobile.png')",
         },
      },
   },
   plugins: [],
};
