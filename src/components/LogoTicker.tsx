"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { logos } from "@/constants";

const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {logos.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="logo-ticker-image"
              />
            ))}

            {/* second set of logos to make it infinite animation */}
            {logos.map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                key={alt}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;
