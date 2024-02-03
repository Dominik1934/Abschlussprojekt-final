import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });


const metadata: Metadata = {
  title: '24/7 Shop',
  description: 'Online-Shop der 24/7 Bank',
};


export default function RootLayout({ 
  children,
 }: {
  children: React.ReactNode;
 }) {
  return (
    <html lang="de" suppressHydrationWarning>
        <head />
        <body className={`${inter.className} max-w-[1580px] mx-auto`}>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
        </body>
    </html>
  );
}

