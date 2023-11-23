import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/ThemeProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant Racherla",
  description:
    "Nishant Racherla is a passionate Full-Stack Web Developer, skilled in React, Next.js, Redux, TypeScript, and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[rgb(30,30,30)]`}>
        <ToasterProvider />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
