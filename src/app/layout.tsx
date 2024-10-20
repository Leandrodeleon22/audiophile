import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Wrapper from "@/components/Wrapper";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope.ttf",
      weight: "400",
    },
  ],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Audiophile",
  description: "Audiophile ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable}  antialiased`}>
        <NavBar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
