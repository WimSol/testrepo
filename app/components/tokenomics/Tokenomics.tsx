"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const Tokenomics = () => {
  const imageSize = typeof window !== 'undefined' ? Math.min(window.innerWidth / 3 - 40, 300) : 300;
  
  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold mb-10">TOKENOMICS</h1>

      {/* Only show on large screens */}
      <div className="hidden lg:flex w-full justify-center gap-4 mb-4">
        {/* First row on large screen: 2 images */}
        <Image
          src="/tokenomicsPIC/1.png"
          alt="Image 1"
          width={imageSize}
          height={imageSize}
          layout="intrinsic"
        />
        <Image
          src="/tokenomicsPIC/2.png"
          alt="Image 2"
          width={imageSize}
          height={imageSize}
          layout="intrinsic"
        />
      </div>
      <div className="hidden lg:flex w-full justify-center gap-4">
        {/* Second row on large screen: 3 images */}
        {[3, 4, 5].map((item) => (
          <Image
            key={item}
            src={`/tokenomicsPIC/${item}.png`}
            alt={`Image ${item}`}
            width={imageSize}
            height={imageSize}
            layout="intrinsic"
          />
        ))}
      </div>

      {/* Only show on medium screens */}
      <div className="hidden md:flex lg:hidden w-full justify-center gap-4 mb-4">
        {/* First row on medium screen: 2 images */}
        <Image
          src="/tokenomicsPIC/1.png"
          alt="Image 1"
          width={imageSize}
          height={imageSize}
          layout="intrinsic"
        />
        <Image
          src="/tokenomicsPIC/2.png"
          alt="Image 2"
          width={imageSize}
          height={imageSize}
          layout="intrinsic"
        />
      </div>
      <div className="hidden md:flex lg:hidden w-full justify-center gap-4">
        {/* Second and third row on medium screen: 2 images each */}
        {[3, 4].map((item) => (
          <Image
            key={item}
            src={`/tokenomicsPIC/${item}.png`}
            alt={`Image ${item}`}
            width={imageSize}
            height={imageSize}
            layout="intrinsic"
          />
        ))}
      </div>
      <div className="hidden md:flex lg:hidden w-full justify-center gap-4">
        <Image
          src="/tokenomicsPIC/5.png"
          alt="Image 5"
          width={imageSize}
          height={imageSize}
          layout="intrinsic"
        />
      </div>

      {/* Always show on small screens */}
      <div className="flex md:hidden w-full justify-center gap-4 flex-wrap">
        {/* All images in a single column on small screens */}
        {[1, 2, 3, 4, 5].map((item) => (
          <Image
            key={item}
            src={`/tokenomicsPIC/${item}.png`}
            alt={`Image ${item}`}
            width={imageSize}
            height={imageSize}
            layout="intrinsic"
          />
        ))}
      </div>
    </div>
  );
};

export default Tokenomics;