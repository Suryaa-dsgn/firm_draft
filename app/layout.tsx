import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Deltayfe LLC",
    default: "Agentic AI & Engineering Services for Private Equity | Deltayfe LLC",
  },
  description:
    "Reusable AI agents that cut cost, accelerate diligence, and standardize execution across PE portfolios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans bg-canvas text-ink antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
