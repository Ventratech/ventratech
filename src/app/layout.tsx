import type { Metadata } from "next";
import { Inter, Roboto_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "Ventratech Builds",
  description: "Custom PC builds with performance and care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0066FF" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={`${inter.variable} ${robotoMono.variable} ${orbitron.variable} font-sans bg-[#0b1120] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
