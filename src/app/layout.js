import "./globals.css";
import { Outfit } from "next/font/google";
import TopNav from "@/components/ui/topnav";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata = {
  title: "Folio",
  description: "for Aditya Supare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scrollbar">
      <body className={`${outfit.className} h-screen `}>
        <TopNav />
        {children}
      </body>
    </html>
  );
}
