import type React from "react"
import "./globals.css"
import { Playfair_Display } from "next/font/google"
import type { Metadata } from "next"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Chauraha | A Nepali Film",
  description: "A tale of love, duty, and the crossroads of life",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable}`}>{children}</body>
    </html>
  )
}

