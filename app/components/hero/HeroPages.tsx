"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 mt-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left p-20"
        >
          <h1 className="text-white my-2 text-2xl sm:text-3xl md:text-4xl lg:leading-normal font-extrabold">
            Welcome to TOKEN-2022
            <br></br>
            tckr symbol: 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solanapurple to-solanagreen" >
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
            The first memecoin of the token2022 standard
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
            <a href="https://raydium.io/" target="_blank" rel="noopener noreferrer">
              <span
                className="font-extrabold inline-block py-3 px-6 w-full sm:w-fit rounded-full mr-4 lg:ml-10 bg-solanagreen hover:bg-slate-800 text-black hover:text-white transition-all duration-300"
              >
                $BUY (soon)
              </span>
            </a>
            <a href="https://birdeye.so/" target="_blank" rel="noopener noreferrer">
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
          // className="col-span-8 place-self-center mt-4 lg:mt-0 p-10"
          className="place-self-center mt-4 lg:mt-0 p-10"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/2022logo-transparent.png"
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