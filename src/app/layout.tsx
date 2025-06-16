import "./globals.css";
import { Inter, Roboto_Mono } from "next/font/google";
import { cn } from "@/lib/utils";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Ventratech",
  description: "Custom PCs built with power and precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, robotoMono.variable)}>
        {children}
      </body>
    </html>
  );
}
