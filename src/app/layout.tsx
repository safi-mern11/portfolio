import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header"
import Footer from "./components/common/Footer";

const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira.className}>
        <div className="relative w-screen mx-auto min-h-screen overflow-hidden bg-[#011627] rounded-[8px] border border-[#1E2D3D]">
        <Header/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
