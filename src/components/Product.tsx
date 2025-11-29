"use client";

import Image from "next/image";
import ProductImage from "../assets/images/ProductImage.svg";
import TorusImage from "../assets/images/torus1.png";
import PyramidImage from "../assets/images/pyramid1.png";
import { features } from "@/constants";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Product = () => {
  const productRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={productRef}
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-description mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website in just minutes with the set of free components
            for Framer.
          </p>
        </div>
        <div className="relative">
          <div className="flex justify-center">
            <Image
              src={ProductImage}
              alt="Product Image"
              className="mt-10 w-full"
            />
          </div>
          <motion.img
            src={PyramidImage.src}
            alt="Pyramid Image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-20 -top-12"
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={TorusImage.src}
            alt="Torus Image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY: translateY,
            }}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {features.map(({ icon, title, description }) => (
            <div key={title} className="space-y-3">
              <Image src={icon} alt="" />
              <p className="font-bold">{title}</p>
              <p>{description}</p>
              <button className="flex gap-2 items-center font-medium hover:underline hover:underline-offset-4">
                Learn More <ArrowRight size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
