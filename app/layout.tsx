import type { Metadata } from "next"
import { Playfair_Display } from "next/font/google"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Tricuro — Strategic Communications & Reputation Management",
  description:
    "Washington, D.C.-based strategic communications firm specializing in public diplomacy, public affairs, and international reputation management.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#111]">{children}</body>
    </html>
  )
}
