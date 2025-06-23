import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
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

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} antialiased box-border px-4 flex flex-col min-w-screen min-w-dvw relative`}
      >
        <Header />
          {children}
      </body>
    </html>
  );
}
