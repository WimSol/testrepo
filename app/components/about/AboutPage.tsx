"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link"

// const AboutPage = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-12 place-content-center md:mt-40 3xl:mt-80">

//         {/* <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           // className="col-span-8 place-self-center mt-4 lg:mt-0 p-10"
//           className="col-span-6 place-self-center mt-4 lg:mt-0 p-10"
//         >
//           <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//             <Image
//               src="/Treasurewallet.png"
//               alt="hero image"
//               className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//               width={400}
//               height={400}
//             />
//           </div>
//         </motion.div> */}

//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="col-start-2 col-span-10 xl:col-start-4 xl:col-span-6 mx-16 text-center sm:text-left pl-10 pr-10 rounded-lg shadow-lg bg-gradient-to-br from-gray-700 to-gray-900 border-white border-2"
        
//         >
//           <h1 className="text-white text-center my-2 text-2xl sm:text-3xl md:text-4xl lg:leading-normal font-extrabold" style={{ fontFamily: 'Pixeloid, sans-serif' }}>
//             ABOUT TOKEN 2022
            
//             <div className="w-4/5 h-1 bg-white mx-auto my-4"></div>
            
//           </h1>
//           <p className="text-[#ffffff] text-base sm:text-lg mb-6 lg:text-xl" style={{ fontFamily: 'Pixeloid, sans-serif' }}>
//           Token 2022 is a meme coin hosted on the Solana blockchain, utilizing the innovative Token22 program to establish itself as one of the first genuinely deflationary meme coins on the blockchain. The token will debut with a total supply of 10,000,000,000 tokens, all of which will be accessible from the initial launch date, and no additional tokens will ever be minted. Token 2022 incorporates the Transfer Fee feature from the Token22 program, enabling the creation of a genuinely deflationary token through a weekly token burn.
//           <br></br>
//           <br></br>
//           The transfer fee is set at 2.2% initially, with half of the fee designated for burning and the other half distributed to holders through a staking mechanism. This strategic approach aims to reduce the total token supply over time, making Token 2022 scarcer, while also rewarding holders who participate in the staking process.
//           </p>
//         </motion.div>
        
//       </div>

//   )
// }

// export default AboutPage;

const AboutPage = () => {
  return (
    // <div className="grid grid-cols-1 sm:grid-cols-12 place-content-center md:mt-40 3xl:mt-80">
    <div className="flex flex-col justify-center items-center h-full">
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mx-16 text-center sm:text-left pl-10 pr-10 rounded-lg shadow-lg sm:mt-30 sm:w-5/5 md:w-4/5 lg:w-3/5 xl:w-2/5 bg-gradient-to-br mt-0 sm:mt-20 from-gray-700 to-gray-900 border-white border-2"
        >
          <h1 className="text-white text-center my-2 sm:text-base md:text-4xl 3xl:text-6xl lg:leading-normal font-extrabold" style={{ fontFamily: 'Pixeloid, sans-serif' }}>
            ABOUT TOKEN 2022
            
            <div className="w-4/5 h-1 bg-white mx-auto my-4"></div>
            
          </h1>
          <p className="text-[#ffffff]  text-xs sm:text-base mb-6 lg:text-xl 3xl:text-2xl" style={{ fontFamily: 'Pixeloid, sans-serif' }}>
          Token 2022 is a meme coin hosted on the Solana blockchain, utilizing the innovative Token22 program to establish itself as one of the first genuinely deflationary meme coins on the blockchain. The token will debut with a total supply of 10,000,000,000 tokens, all of which will be accessible from the initial launch date, and no additional tokens will ever be minted. Token 2022 incorporates the Transfer Fee feature from the Token22 program, enabling the creation of a genuinely deflationary token through a weekly token burn.
          <br></br>
          <br></br>
          The transfer fee is set at 2.2% initially, with half of the fee designated for burning and the other half distributed to holders through a staking mechanism. This strategic approach aims to reduce the total token supply over time, making Token 2022 scarcer, while also rewarding holders who participate in the staking process.
          </p>
        </motion.div>
        
      </div>

  )
}

export default AboutPage;