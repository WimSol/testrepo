import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head' // Importing the Head component
import './globals.css'
import StarsCanvas from "./components/startbackground/StarBackground";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Token 2022',
  description: '$2022 is a token launching on the Solana Blockchain, leveraging the new Token22 program, to create a new era of Solana meme coins.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <title>Token 2022: Next-Gen Solana Meme Coin | $2022 Token</title>

      {/* <!-- Meta Description --> */}
      <meta name="description" content="Discover $2022, the pioneering meme coin on Solana's Token22 platform. Experience advanced privacy, dynamic tokenomics, and seamless integration with leading wallets and exchanges. Join the new era of meme coins with $2022." />

      {/* <!-- Meta Keywords --> */}
      <meta name="keywords" content="Token 2022, Solana Blockchain, Meme Coin, Cryptocurrency, Token22 program, $2022, Privacy Coin, Crypto Investment, Blockchain Technology, Digital Currency, Crypto Wallets, Exchanges" />

      {/* <!-- Open Graph Tags for Social Media --> */}
      <meta property="og:title" content="Token 2022: Revolutionize Your Crypto Experience with $2022" />
      <meta property="og:description" content="Embark on a journey with $2022, a unique meme coin leveraging Solana's Token22 program for enhanced privacy and innovative tokenomics. Perfect for savvy crypto enthusiasts and investors." />
      <meta property="og:image" content="https://token2022.xyz/Logocoin.png" />
      <meta property="og:url" content="https://token2022.xyz" />
      <meta property="og:type" content="website" />

      {/* <!-- Twitter Card Data --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Token 2022: Next-Gen Solana Meme Coin | $2022 Token" />
      <meta name="twitter:description" content="Join the revolution with $2022, the pioneering meme coin on Solana's Token22 platform, offering privacy, innovation, and seamless crypto experience." />
      <meta name="twitter:image" content="https://token2022.xyz/Logocoin.png" />
        {/* Add additional meta tags here as needed */}
      </Head>
      <body className={inter.className}>
        <StarsCanvas />
        {children}
      </body>
    </html>
  )
}