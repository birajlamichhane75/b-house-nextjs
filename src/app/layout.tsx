import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Providers } from "./redux/provider";
import Facebookchat from "../../components/Facebookchat";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <div><Navbar /></div>

        <div className="page">
          <Providers>
          {children}
          <Facebookchat />
          </Providers>
        </div>
        
        <div>
        <Footer />
        </div>
      </body>
    </html>
  );
}
