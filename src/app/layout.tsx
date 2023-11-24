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
  openGraph: {
    title: "Nishant Racherla",
    description:
      "Nishant Racherla is a passionate Full-Stack Web Developer, skilled in React, Next.js, Redux, TypeScript, and more!",
    url: "https://portfolio-v2-t1lt.vercel.app/",
    siteName: "Nishant Racherla",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
      {
        url: "/opengraph-image-min.png",
        width: 800,
        height: 420,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishant Racherla",
    description:
      "Nishant Racherla is a passionate Full-Stack Web Developer, skilled in React, Next.js, Redux, TypeScript, and more!",
    siteId: "1141343774951346177",
    creator: "@NishantRacherla",
    creatorId: "1141343774951346177",
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
      },
      {
        url: "/twitter-image-min.png",
        width: 800,
        height: 420,
      },
    ],
  },
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
