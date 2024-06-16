"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CustomThemeSwitch from "./CustomThemeSwitch";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import CustomSheet from "./CustomSheet";

const Navbar = () => {
  const selectedLink = usePathname();

  const { theme } = useTheme();

  return (
    <div className="px-8 py-4 md:px-20 md:py-8  flex-1 flex justify-between items-center">
      {/* Logo  */}
      <div className="">
        <Image
          src={
            theme === "light"
              ? "/assets/alarado-icon-homepage.svg"
              : "/assets/alarado-icon-homepage-dark.svg"
          }
          width={150}
          height={100}
          alt="logo"
        />
      </div>

      {/* {Navlinks}  */}
      <div className="hidden md:flex justify-between items-center gap-4 lg:gap-8 ">
        {navLinks.map((link) => (
          <Link
            className={`font-medium ${
              link.id === 1
                ? "text-[#111729] dark:text-white"
                : "text-[#909193]"
            }`}
            href="/"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Theme Switch  */}
      <div className="hidden md:flex">
        <CustomThemeSwitch />
      </div>

      <div className="flex md:hidden">
        <CustomSheet />
      </div>
    </div>
  );
};

export default Navbar;
