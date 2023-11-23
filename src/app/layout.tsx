import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/providers/ThemeProvider";
import ToasterProvider from "@/providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nishant Racherla",
  description:
    "Passionate Full Stack Web Developer, skilled in React, Next.js, Redux, TypeScript, and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-[#252525]`}>
        <ToasterProvider />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
