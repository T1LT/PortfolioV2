import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Providers from "@/providers/ThemeProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://nishantracherla.com/"),
  title: "Nishant Racherla",
  description:
    "Nishant Racherla is a passionate Full-Stack Web Developer, skilled in Next.js, React, Redux, TypeScript, and more!",
  openGraph: {
    images: "/opengraph-image.png",
  },
  twitter: {
    images: "/twitter-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} bg-white dark:bg-[rgb(17,17,16)]`}
      >
        <ToasterProvider />
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
