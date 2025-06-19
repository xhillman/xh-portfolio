import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xavier Hillman",
  description: "Software developer portfolio of Xavier Hillman",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen h-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-full box-border relative`}
      >
        {children}
      </body>
    </html>
  );
}
