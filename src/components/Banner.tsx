import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className="text-white/60 hidden md:block">
        Streamline your workflow and boost your productivity.
      </p>
      <div className="inline-flex gap-1 items-center">
        <p>Get started for free</p>
        <ArrowRight
          size={16}
          className="inline-flex justify-center items-center"
        />
      </div>
    </div>
    // <div className="bg-black text-white py-3">
    //   <div className="flex gap-x-2 items-center justify-center">
    //     <p className="hidden sm:inline-flex opacity-60">
    //       This page is included in a free SaaS Website Kit.{" "}
    //     </p>
    //     <div className="flex gap-x-2 items-center text-sm sm:text-base">
    //       <p>View the complete kit</p>
    //       <ArrowRight size={20} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Banner;
