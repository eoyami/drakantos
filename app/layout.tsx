import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react"
import Footer from "./components/Footer";
import Portrait from "../public/portrait.jpg";

const openGraphImage = {
  url: Portrait.src,
  width: 1200,
  height: 630,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drakantos Non-Official Site",
  description: "Drakantos Non-Official Site",
  openGraph: {
    title: "Drakantos Non-Official Site",
    description: "Drakantos Non-Official Site",
    url: `${openGraphImage.url}`,
    siteName: "Drakantos Non-Official Site",
    images: [
      {
        url: `${openGraphImage.url}`,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Drakantos Non-Official Site",
    description: "Drakantos Non-Official Site",
    card: "summary_large_image",
    images: [
      {
        url: `${openGraphImage.url}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
      <div id="container" className="flex flex-col min-h-screen">
        <Navbar/>
        {children}
        <Analytics/>
      </div>
      <Footer/>
      </body>
    </html>
  );
}
