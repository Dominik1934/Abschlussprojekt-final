import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { ReactNode } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

const metadata: Metadata = {
  title: '24/7 Shop',
  description: 'Online-Shop der 24/7 Bank',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="de" suppressHydrationWarning>
        <head />
        <body> {/*className={`${inter.className} max-w-[1580px] mx-auto`}*/}
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