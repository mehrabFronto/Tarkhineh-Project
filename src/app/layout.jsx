import estedadFont from "@/constants/localFonts";
import Footer from "./Footer";
import Header from "./Header";
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
         <body className={`${estedadFont.variable} font-sans`}>
            <Header />
            <main className="container">{children}</main>
            <Footer />
         </body>
      </html>
   );
}
