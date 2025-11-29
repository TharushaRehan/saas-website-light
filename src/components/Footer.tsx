import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import InstaIcon from "../assets/icons/insta.svg";
import XIcon from "../assets/icons/x-social.svg";
import TikTokIcon from "../assets/icons/tiktok.svg";
import YoutubeIcon from "../assets/icons/youtube.svg";
import PinterestIcon from "../assets/icons/pinterest.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import { footerItems } from "@/constants";

const Footer = () => {
  return (
    <footer className="py-10 bg-black">
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col gap-y-10 justify-between">
            <div className="space-y-10">
              <div className="relative w-fit">
                <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
                <Image
                  src={logoImage}
                  alt="logo"
                  className="h-12 w-12 relative"
                />
              </div>
              <p className="text-[#BCBCBC] max-w-[240px]">
                Effortlessly turn your ideas into a fully functional,
                responsive, no-code SaaS website.
              </p>
            </div>
            <div className="text-[#BCBCBC] flex gap-x-5 mb-16 lg:mb-0">
              <Image src={XIcon} alt="logo" className="cursor-pointer" />
              <Image src={InstaIcon} alt="logo" className="cursor-pointer" />
              <Image
                src={PinterestIcon}
                alt="logo"
                className="cursor-pointer"
              />
              <Image src={LinkedInIcon} alt="logo" className="cursor-pointer" />
              <Image src={TikTokIcon} alt="logo" className="cursor-pointer" />
              <Image src={YoutubeIcon} alt="logo" className="cursor-pointer" />
            </div>
          </div>
          {/* className="flex flex-col lg:flex-row gap-10" */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
            {footerItems.map(({ title, subTitles }) => (
              <div key={title} className="space-y-5">
                <p className="text-white text-lg font-bold">{title}</p>
                <div className="space-y-3">
                  {subTitles.map((subTitle) => (
                    <p
                      key={subTitle}
                      className="text-[#7B7B7B] hover:text-white transition-all duration-300 cursor-pointer w-fit"
                    >
                      {subTitle}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
    // <div className="flex flex-col lg:flex-row justify-between bg-black py-10 px-5">
    //   <div className="flex flex-col gap-10 justify-between">
    //     <div className="space-y-10">
    // <div className="relative w-fit">
    //   <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md"></div>
    //   <Image src={logoImage} alt="logo" className="h-12 w-12 relative" />
    // </div>
    //       <p className="text-[#BCBCBC] max-w-[240px]">
    //         Effortlessly turn your ideas into a fully functional, responsive,
    //         no-code SaaS website.
    //       </p>
    //     </div>
    // <div className="text-[#BCBCBC] flex gap-x-5 mb-16 lg:mb-0">
    //   <Image src={XIcon} alt="logo" className="cursor-pointer" />
    //   <Image src={InstaIcon} alt="logo" className="cursor-pointer" />
    //   <Image src={PinterestIcon} alt="logo" className="cursor-pointer" />
    //   <Image src={LinkedInIcon} alt="logo" className="cursor-pointer" />
    //   <Image src={TikTokIcon} alt="logo" className="cursor-pointer" />
    //   <Image src={YoutubeIcon} alt="logo" className="cursor-pointer" />
    // </div>
    //   </div>
    // <div className="flex flex-col lg:flex-row gap-10">
    //   {footerItems.map(({ title, subTitles }) => (
    //     <div key={title} className="space-y-5">
    //       <p className="text-white text-lg font-bold">{title}</p>
    //       <div className="space-y-3">
    //         {subTitles.map((subTitle) => (
    //           <p
    //             key={subTitle}
    //             className="text-[#7B7B7B] hover:text-white transition-all duration-300 cursor-pointer"
    //           >
    //             {subTitle}
    //           </p>
    //         ))}
    //       </div>
    //     </div>
    //   ))}
    // </div>
    // </div>
  );
};

export default Footer;
