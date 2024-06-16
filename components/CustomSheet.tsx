"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog"
import { navLinks } from "@/constants";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import CustomThemeSwitch from "./CustomThemeSwitch";

const CustomSheet = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Sheet>
      <SheetTrigger>
        <div className="w-full justify-center items-center">
          <Image
            src={
              theme === "dark" ? "/assets/menu_light.png" : "/assets/menu.png"
            }
            width={24}
            height={24}
            alt="menu"
          />
        </div>
      </SheetTrigger>
      <SheetContent className="dark:bg-[#111729] bg-[#FFFFFF]">
        <div className="flex justify-end items-center">
        <SheetPrimitive.Close>
            <Image src={theme === "dark" ? '/assets/close_light.png' : '/assets/close.png'} width={24} height={24} alt="Close" />
            </SheetPrimitive.Close>
        </div>
        <div className="flex md:hidden flex-col justify-center items-center mt-8 gap-10">
          {navLinks.map((link) => (
            <Link
            key={link.id}
              className={`font-semibold ${
                link.id === 1
                  ? "text-[#111729] dark:text-white"
                  : "text-[#909193]"
              } text-4xl`}
              href="/"
            >
              {link.name}
            </Link>
          ))}
          <CustomThemeSwitch />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
