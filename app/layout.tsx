import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
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
      <body className={inter.className}>
        <StarsCanvas />
        {children}
        
        </body>
    </html>
  )
}
