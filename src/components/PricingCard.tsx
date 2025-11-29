import { Check, Sparkle, Sparkles, Star } from "lucide-react";
import React from "react";

export interface PricingCardProps {
  planType: string;
  price: string;
  tag?: string;
  buttonText: string;
  features: Array<string>;
  theme?: "dark" | "light";
}

const PricingCard = ({
  planType,
  price,
  tag,
  buttonText,
  features,
  theme,
}: PricingCardProps) => {
  return (
    <div
      className={`border border-[#EFF0F6] w-full rounded-3xl shadow-xl shadow-black/10 py-8 px-10 space-y-8 h-fit self-end ${
        theme === "dark" && "bg-black"
      }`}
    >
      {tag ? (
        <div className="flex items-center justify-between">
          <p
            className={`font-bold text-lg lg:text-xl ${
              theme === "dark" ? "text-white" : "text-[#6F6C90]"
            }`}
          >
            {planType}
          </p>
          <div className={` px-5 py-1  flex items-center gap-2`}>
            <p
              className={`bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF)] text-transparent bg-clip-text [-webkit-background-clip:text] text-lg font-medium`}
            >
              {tag}
            </p>
            <Sparkles
              size={20}
              className=""
              fill={`${theme === "dark" ? "#DD7DFF" : "#8BCB92"}`}
              color={`${theme === "dark" ? "#DD7DFF" : "#8BCB92"}`}
            />
          </div>
        </div>
      ) : (
        <p
          className={`font-bold text-lg lg:text-xl ${
            theme === "dark" ? "text-white" : "text-[#6F6C90]"
          }`}
        >
          {planType}
        </p>
      )}

      <p
        className={`font-bold text-3xl lg:text-5xl ${
          theme === "dark" && "text-white"
        }`}
      >
        ${price}
        <span
          className={`text-sm ${
            theme === "dark" ? "text-[#999999]" : "text-[#6F6C90]"
          }`}
        >
          /month
        </span>
      </p>
      <button
        className={`w-full rounded-lg py-2 font-medium text-lg ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        {buttonText}
      </button>
      <div className="space-y-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex gap-2 items-center ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <Check size={20} />
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
