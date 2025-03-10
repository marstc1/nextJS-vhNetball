import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Victoria Hawkins Charity Netball Event",
  description: "Annual netball tournament in memory of Victoria Hawkins to raise money for Nelson's Journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
