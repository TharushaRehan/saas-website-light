import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaaS Landing Page - Light",
  description: "Used a template from Framer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(font.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
