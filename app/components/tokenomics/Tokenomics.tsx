"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link"

const Tokenomics = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          // className="col-start-2 col-span-6 mx-16 text-center sm:text-left pl-10 pr-10 rounded-lg shadow-lg border-white border-2 "
          className="sm:mt-40 border-2 border-white p-5 bg-transparent text-white m-5 rounded-lg">

          <h2 className="text-lg text-center text-yellow-400 mb-2">Tokenomics</h2>
          <p><strong>Total Supply:</strong> 10,000,000,000</p>
          <ul className="list-disc pl-5">
            <li><strong>40% - Liquidity:</strong> Initial liquidity locked with Solana in the treasury.</li>
            <li><strong>40% - Airdrop:</strong> Distributed to wallets contributing Solana to the treasury.</li>
            <li><strong>15% - Grants, Marketing & Development:</strong> For longevity, distributed to creators and organizations in Solana DeFi.</li>
            <li><strong>5% - CEX Integrations:</strong> For future centralized exchange integration.</li>
          </ul>
          <h2 className="text-lg text-center text-yellow-400 mt-4 mb-2">Transfer Fee</h2>
          <p><strong>Rate:</strong> 2.2%</p>
          <ul className="list-disc pl-5">
            <li><strong>50% - Burned:</strong> Weekly token burn, with proof shared on Twitter.</li>
            <li><strong>50% - Staking Rewards:</strong> Added to the pool for distribution to stakers.</li>
          </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              // className="col-span-8 place-self-center mt-4 lg:mt-0 p-10"
              className="place-self-center mt-4 lg:mt-0 p-10"
            >
              <div className="bg-[#181818] w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] relative">
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

export default Tokenomics