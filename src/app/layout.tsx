import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikita Kaminskiy - AI Automation Engineer",
  description: "AI automation engineer for SMBs. Creating intelligent solutions to save time and money for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
