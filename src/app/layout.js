import "./globals.css";
import Link from "next/link";
import { User, HomeIcon, Contact,Briefcase } from "lucide-react";
import {DM_Sans} from 'next/font/google'

const font = DM_Sans({subsets: ["latin"]})

export const metadata = {
  title: "Folio",
  description: "for aditya supare",
};


function TopNav() {
  return (
    <nav className="w-full flex items-center border-b-[1px] border-[#b8b79d] justify-between p-4 border-opacity-20 ">
      <Link href='/'>
      <div className="flex items-center rounded-full border-[1px] border-[#b8b79d]  font-bold text-lg text-[#e1e0bd] py-2 px-7 space-x-4 border-opacity-20">
        <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
        FoliO 
      </div>
      </Link>


      <div className="flex items-center border-[1px] border-[#b8b79d]  text-[#e1e0bd] rounded-full py-3 px-7 space-x-4 border-opacity-20">
        <Link href="/" passHref>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#3566c0]">
            <HomeIcon className="size-4 opacity-90 " />
            <span className="hidden md:inline">Home</span>
          </div>
        </Link>
        <Link href="/projects" passHref>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#3566c0]">
            <Briefcase className="size-4" />
            <span className="hidden md:inline">My Projects</span>
          </div>
        </Link>
        <Link href="/about" passHref>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#3566c0]">
            <User className="size-4" />
            <span className="hidden md:inline">About Me</span>
          </div>
        </Link>
      </div>

      
      <div>
        <Link href="/contact" passHref>
          <div className="flex items-center mr-4 gap-1 cursor-pointer text-[#e1e0bd] hover:text-[#3566c0] border-[#b8b79d]  rounded-full border-[1px] py-3 px-3 border-opacity-20">
            <Contact className="size-4" />
            <span className="hidden md:inline">Contact Me</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.DM_Sans}>
        <TopNav/>
        {children}
      </body>
    </html>
  );
}
