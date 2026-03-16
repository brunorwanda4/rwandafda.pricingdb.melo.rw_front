import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rwanda FDA Medicine Pricing Database",
    template: "%s | Rwanda FDA Pricing System",
  },
  description:
    "Official medicine pricing database managed by the Rwanda Food and Drugs Authority (Rwanda FDA). This platform provides standardized and regulated prices of medicines available in Rwanda for transparency and regulatory compliance.",

  keywords: [
    "Rwanda FDA",
    "medicine pricing Rwanda",
    "drug price database Rwanda",
    "pharmaceutical pricing Rwanda",
    "medical regulation Rwanda",
  ],

  authors: [{ name: "Rwanda Food and Drugs Authority" }],
  creator: "Rwanda Food and Drugs Authority",
  publisher: "Rwanda Food and Drugs Authority",

  metadataBase: new URL("https://rwandafda.gov.rw"),

  openGraph: {
    title: "Rwanda FDA Medicine Pricing Database",
    description:
      "Official platform for managing and accessing regulated medicine prices in Rwanda.",
    url: "https://rwandafda.gov.rw",
    siteName: "Rwanda FDA",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Rwanda FDA Logo",
      },
    ],
  },

  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "government",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
