import estedadFont from "@/constants/localFonts";
import "./globals.css";

export const metadata = {
   title: "ترخینه",
   description: "ترخینه",
};

export default function RootLayout({ children }) {
   return (
      <html
         lang="fa"
         dir="rtl">
         <body className={`${estedadFont.variable} font-sans`}>{children}</body>
      </html>
   );
}
