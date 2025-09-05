import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikita Kaminskiy",
  description: "I automate business processes with AI to save time and money for SMBs.",
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
