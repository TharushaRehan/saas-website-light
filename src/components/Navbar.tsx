import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import { MenuIcon } from "lucide-react";
import { navItems } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="py-3 sticky top-0 backdrop-blur-sm shadow-sm z-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <Image src={logoImage} alt="logo" width={40} height={40} />
          <MenuIcon className="md:hidden" />
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            {navItems.map((item) => (
              <Link
                href={`#${item.toLowerCase()}`}
                key={item}
                className="text-black text-opacity-60 font-medium hover:text-opacity-100 transition duration-300"
              >
                {item}
              </Link>
            ))}
            <button className="bg-black text-white py-2 px-4 rounded-lg font-medium inline-flex items-center justify-center tracking-tighter">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </header>
    // <header className="flex justify-between items-center py-4 px-4">
    //   <div className="relative w-fit">
    //     <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
    //     <Image src={logoImage} alt="logo" className="h-12 w-12 relative" />
    //   </div>
    //   <nav className="hidden sm:flex gap-x-5 items-center">
    //   {navItems.map((item) => (
    //     <Link
    //       href={"#"}
    //       key={item}
    //       className="text-black text-opacity-60 font-medium hover:text-opacity-100 transition duration-300"
    //     >
    //       {item}
    //     </Link>
    //   ))}
    //   <button className="bg-black text-white rounded-lg py-2 px-4">
    //     Get for free
    //   </button>
    // </nav>
    //   <div className="sm:hidden">
    //     <MenuIcon />
    //   </div>
    // </header>
  );
};

export default Navbar;
