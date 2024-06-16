import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="h-screen hidden lg:flex  text-[#223344] dark:text-[#F2F9FE] flex-col justify-start items-start mt-14"
        style={{
          backgroundImage: "url('/assets/hero-image-simple-homepage.png')",
          backgroundSize: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <div className="w-full md:hidden"></div>
        <div className="w-1/2 ">
          <p className="font-medium">😎 SIMPLE WAY TO COMMUNICATE</p>
          <h1 className="text-[60px] my-5 font-bold text-balance">
            Actions for Accessibility in Design
          </h1>
          <p className="mt-10 text-[#909193] font-medium text-[18px] text-pretty">
            The fastest way to build and deploy websites with resusable
            components.
          </p>
          <div className="flex mt-10">
            <button className="py-3 text-[16px] font-medium px-8 text-white bg-[#2A4DD0] rounded-lg">
              GET STARTED
            </button>
            <button className="py-3 text-[16px] font-extrabold underline-offset-2 decoration-2 px-8 underline text-[#2A4DD0] rounded-lg">
              Get live demo
            </button>
          </div>
          <div className="flex text-[#909193] font-medium text-[14px] justify-start gap-6 items-center mt-10">
            <p className="flex gap-2 justify-center items-center">
              <Image
                src="/assets/Done_ring_round_fill.svg"
                width={20}
                height={20}
                alt="Done"
              />
              No credit card required
            </p>
            <p className="flex gap-2 justify-center items-center">
              <Image
                src="/assets/Done_ring_round_fill.svg"
                width={20}
                height={20}
                alt="Done"
              />
              No software to install
            </p>
          </div>
        </div>
      </div>

      <div className="h-[fit-content] mt-8  lg:hidden">
        <div className="">
          <Image
            src="/assets/hero-image-simple-homepage.png"
            width={1460}
            height={1320}
            alt="Hero Image"
            className=""
          />
        </div>
        <div className="w-full mt-20 pb-40 dark:text-white text-[#223344]">
          <p className="font-medium">😎 SIMPLE WAY TO COMMUNICATE</p>
          <h1 className="text-[60px] my-5 font-bold  text-balance">
            Actions for Accessibility in Design
          </h1>
          <p className="mt-10 text-[#909193] font-medium text-[18px] text-pretty">
            The fastest way to build and deploy websites with resusable
            components.
          </p>
          <div className="flex mt-10">
            <button className="py-3 text-[16px] font-medium px-8 text-white bg-[#2A4DD0] rounded-lg">
              GET STARTED
            </button>
            <button className="py-3 text-[16px] font-extrabold underline-offset-2 decoration-2 px-8 underline text-[#2A4DD0] rounded-lg">
              Get live demo
            </button>
          </div>
          <div className="flex text-[#909193] font-medium text-[14px] justify-start gap-6 items-center mt-10">
            <p className="flex gap-2 justify-center items-center">
              <Image
                src="/assets/Done_ring_round_fill.svg"
                width={20}
                height={20}
                alt="Done"
              />
              No credit card required
            </p>
            <p className="flex gap-2 justify-center items-center">
              <Image
                src="/assets/Done_ring_round_fill.svg"
                width={20}
                height={20}
                alt="Done"
              />
              No software to install
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
