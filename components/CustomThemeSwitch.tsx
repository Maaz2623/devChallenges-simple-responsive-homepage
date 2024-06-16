import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const CustomThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border-2 flex lg:flex relative rounded-full border-transparent w-[51px] bg-[#223344] h-[25px] justify-between"
    >
      <Image
        className="z-20"
        src={
          theme === "dark"
            ? "/assets/Moon_fill.svg"
            : "/assets/Moon_fill_light.svg"
        }
        width={22}
        height={18}
        alt="Moon"
      />
      <Image
        className="z-20"
        src={
          theme === "light"
            ? "/assets/Sun_fill.svg"
            : "/assets/Sun_fill_light.svg"
        }
        width={22}
        height={18}
        alt="Moon"
      />
      <span
        className={`absolute transition-all duration-100 left-0 h-full w-1/2 rounded-full z-10 bg-white ${
          theme === "dark" ? "translate-x-0" : "translate-x-6"
        }`}
      />
    </div>
  );
};

export default CustomThemeSwitch;
