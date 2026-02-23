import type { Metadata } from "next";
import { JetBrains_Mono, Barlow_Condensed } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Nikita Kaminskiy — IT Lead & Builder",
  description:
    "AI Consultant & Automation Specialist. I help executives understand AI, adopt it, and turn it into a real competitive edge.",
  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon_io/favicon.ico",
    apple: "/favicon_io/apple-touch-icon.png",
  },
  manifest: "/favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${barlowCondensed.variable} antialiased`}
      >
        <Script
          defer
          src="https://analytics.120987346.xyz/script.js"
          data-website-id="dbce534d-1496-4440-9bf3-ba1ab10ceeda"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
