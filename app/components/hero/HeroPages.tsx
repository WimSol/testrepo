"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroPage = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-40 sm:mt-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        //3xl:mt-60 mt-40
        className="text-center p-20"
      >
          <h1 className=" text-white my-2 text-2xl sm:text-3xl md:text-4xl lg:leading-normal font-extrabold" style={{ fontFamily: 'Pixeloid, sans-serif' }}>
            Welcome to TOKEN 2022
            <br></br>
            Ticker symbol:
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r pl-3 from-solanapurple to-solanagreen" style={{ width: '130px' }}>

              <TypeAnimation
                sequence={[
                  " $2022",
                  1000,
                  " $2022",
                  1000,
                  " $2022",
                  2000,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={20}
                style={{ fontFamily: 'Pixeloid, sans-serif' }}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl" style={{ fontFamily: 'Pixeloid, sans-serif' }}>
          Elevate Your Crypto Experience with Token 2022: Where Memes Meet Market
          </p>
          <div>
          {/*   <span

              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white"
            >
              $BUY (soon)
            </span>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-solanapurple hover:bg-slate-800 rounded-full px-5 py-2">
                CHART (soon)
              </span>
            </Link> */}
            <a href="https://token2022.xyz/" target="_blank" rel="noopener noreferrer">
              <span
                className="font-extrabold inline-block py-3 px-6 w-full sm:w-fit rounded-full mr-4 lg:ml-10 bg-solanagreen hover:bg-slate-800 text-black hover:text-white transition-all duration-300"
              >
                $BUY (soon)
              </span>
            </a>
            <a href="https://token2022.xyz/" target="_blank" rel="noopener noreferrer">
              <span
                className="font-extrabold inline-block py-3 px-6 w-full sm:w-fit rounded-full bg-solanapurple hover:bg-slate-800 text-black hover:text-white mt-3 transition-all duration-300"
              >
                CHART (soon)
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        // className="mt-4 lg:mt-0 3xl:mt-60 p-10"
        className="p-10"
      >
        
          <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] 3xl:w-[600px] 3xl:h-[600px] relative">
            <Image
              src="/Logocoin.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
  )
}

export default HeroPage