import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import FeatureIcon1 from "../assets/icons/FeatureIcon1.png";
import FeatureIcon2 from "../assets/icons/FeatureIcon2.png";
import FeatureIcon3 from "../assets/icons/FeatureIcon3.png";
import FeatureIcon4 from "../assets/icons/FeatureIcon4.png";
import { PricingCardProps } from "@/components/PricingCard";

export const navItems = ["About", "Features", "Customers", "Updates", "Help"];

export const logos = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const features = [
  {
    icon: FeatureIcon1,
    title: "Integration Ecosystem",
    description: "Track your progress and motivate your efforts everyday.",
  },
  {
    icon: FeatureIcon2,
    title: "Goal Setting and Tracking",
    description: "Set and track goals with manageable task breakdowns.",
  },
  {
    icon: FeatureIcon3,
    title: "Secure Data Encryption",
    description: "Ensure your data’s safety with top-tier encryption.",
  },
  {
    icon: FeatureIcon4,
    title: "Customizable Notifications",
    description: "Get alerts on tasks and deadlines that matter most.",
  },
];

export const pricingCards: Array<PricingCardProps> = [
  {
    planType: "Free",
    price: "0",
    buttonText: "Get started free",
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    planType: "Pro",
    price: "9",
    buttonText: "Sign up now",
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
    theme: "dark",
    tag: "Most Popular",
  },
  {
    planType: "Business",
    price: "19",
    buttonText: "Sign up now",
    features: [
      "Up to 100 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export compatibilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const footerItems = [
  {
    title: "Product",
    subTitles: ["Features", "Integration", "Updates", "FAQ", "Pricing"],
  },
  {
    title: "Company",
    subTitles: ["About", "Blog", "Careers", "Manifesto", "Press", "Contact"],
  },
  {
    title: "Resources",
    subTitles: ["Examples", "Community", "Guides", "Docs"],
  },
  {
    title: "Legal",
    subTitles: ["Privacy", "Terms", "Security"],
  },
];
