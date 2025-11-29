import { pricingCards } from "@/constants";
import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <p className="section-description mt-5">
          Free forever. Upgrade for unlimited tasks, better security, and
          exclusive features.
        </p>
        <div className="mt-5 flex flex-col lg:flex-row gap-5 justify-between">
          {pricingCards.map(
            ({ planType, price, tag, buttonText, features, theme }) => (
              <PricingCard
                key={planType}
                planType={planType}
                price={price}
                tag={tag}
                buttonText={buttonText}
                features={features}
                theme={theme}
              />
            )
          )}
        </div>
      </div>
    </section>
    // <div className="py-20 sm:py-24 px-5">
    //   <div className="flex flex-col gap-5">
    //     <p className="tag w-fit self-center">Boost your productivity</p>
    //     <p className="font-bold text-3xl sm:text-6xl text-center">
    //       A more effective way <br /> to track progress
    //     </p>
    //     <div className="max-w-sm sm:max-w-md mx-auto text-center text-[#010D3E]">
    //       <p>
    //         Effortlessly turn your ideas into a fully functional, responsive,
    //         no-code SaaS website in just minutes with the set of free components
    //         for Framer.
    //       </p>
    //     </div>
    //     <div className="flex flex-col lg:flex-row gap-5 justify-between mt-5">
    //   {pricingCards.map(
    //     ({ planType, price, tag, buttonText, features, theme }) => (
    //       <PricingCard
    //         key={planType}
    //         planType={planType}
    //         price={price}
    //         tag={tag}
    //         buttonText={buttonText}
    //         features={features}
    //         theme={theme}
    //       />
    //     )
    //   )}
    // </div>
    //   </div>
    // </div>
  );
};

export default Pricing;
