"use client"
import Footer from "@src/components/Footer";
import FooterSlider from "@src/components/FooterSlider";
import Navbar from "@src/components/Navbar";
import ScrollButton from "@src/components/ScrollButton";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false)
  const route = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      route.push(pathname);
    }, 500);
  }, [pathname])

  return (
    <html lang="en">
      <body>
        {isLoading
          ?
          <div className="flex justify-center items-center w-100% h-[100vh]">
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
          </div>
          :
          <>
            <Navbar />
            {children}
            <FooterSlider />
            <ScrollButton />
            <Footer />
          </>}
      </body>
    </html>
  );
}
