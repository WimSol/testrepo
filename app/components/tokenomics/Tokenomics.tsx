"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Tokenomics = () => {
  
  const sharedImageContainerClasses = "w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[250px] 3xl:w-[350px]";
  return (
    <div className="flex flex-col items-center justify-center p-10 mt-40 md:mt-0">
      <h1 className="text-white text-center my-2 sm:text-base md:text-4xl 3xl:text-6xl lg:leading-normal font-extrabold" style={{ fontFamily: 'Pixeloid, sans-serif' }}>
            TOKENOMICS
            
            
          </h1>
      <div className="w-full lg:w-[400px] h-1 bg-white mx-auto my-4"></div>
      {/* Only show on large screens */}
      <div className={"hidden lg:flex justify-center gap-4 mb-4 w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[250px] 3xl:w-[350px]"}>
        {/* First row on large screen: 2 images */}
        <Image
          src="/tokenomicsPIC/1.png"
          alt="Image 1"
          width={1}
          height={1}
          layout="responsive"
        />
        <Image
          src="/tokenomicsPIC/2.png"
          alt="Image 2"
          width={1}
          height={1}
          layout="responsive"
        />
      </div>
      <div className={"hidden lg:flex justify-center gap-4 w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[250px] 3xl:w-[350px]"}>
        {/* Second row on large screen: 3 images */}
        {[3, 4, 5].map((item) => (
          <Image
            key={item}
            src={`/tokenomicsPIC/${item}.png`}
            alt={`Image ${item}`}
            width={1}
            height={1}
            layout="responsive"
          />
        ))}
      </div>

      {/* Only show on medium screens */}
      <div className={"hidden md:flex lg:hidden justify-center gap-4 mb-4 w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[250px] 3xl:w-[350px]"}>
        {/* First row on medium screen: 2 images */}
        <Image
          src="/tokenomicsPIC/1.png"
          alt="Image 1"
          width={1}
          height={1}
          layout="responsive"
        />
        <Image
          src="/tokenomicsPIC/2.png"
          alt="Image 2"
          width={1}
          height={1}
          layout="responsive"
        />
      </div>
      <div className={"hidden md:flex lg:hidden justify-center gap-4 w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[250px] 3xl:w-[350px]"}>
        {/* Second and third row on medium screen: 2 images each */}
        {[3, 4].map((item) => (
          <Image
            key={item}
            src={`/tokenomicsPIC/${item}.png`}
            alt={`Image ${item}`}
            width={1}
            height={1}
            layout="responsive"
          />
        ))}
      </div>
      <div className={"hidden md:flex lg:hidden justify-center gap-4 w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[250px] 3xl:w-[350px]"}>
        <Image
          src="/tokenomicsPIC/5.png"
          alt="Image 5"
          width={1}
          height={1}
          layout="responsive"
        />
      </div>

      {/* Always show on small screens */}
      <div className={"flex md:hidden justify-center gap-4 flex-wrap w-[200px] md:w-[200px] xl:w-[250px] 2xl:w-[250px] 3xl:w-[350px]"}>
        {/* All images in a single column on small screens */}
        {[1, 2, 3, 4, 5].map((item) => (
          <Image
            key={item}
            src={`/tokenomicsPIC/${item}.png`}
            alt={`Image ${item}`}
            width={1}
            height={1}
            layout="responsive"
          />
        ))}
      </div>
      <div className="w-full lg:w-[400px] h-1 bg-white mx-auto my-4"></div>
    </div>
  );
};

export default Tokenomics;