import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

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
    <html lang="en w-screen">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-screen min-w-dvw min-h-screen min-h-dvh box-border relative overflow-auto p-4 grid grid-rows-[auto_1fr]`}
      >
        <Header />
          {children}
      </body>
    </html>
  );
}
