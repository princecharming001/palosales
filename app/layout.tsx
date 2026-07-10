import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Static export (GitHub Pages) serves under the /palosales subpath, so public
// assets referenced in metadata must be prefixed manually.
const assetPrefix =
  process.env.NEXT_PUBLIC_STATIC_EXPORT === "true" ? "/palosales" : "";

export const metadata: Metadata = {
  title: "Palo Sales Co-pilot",
  description:
    "A live sales-call co-pilot for Palo — fast, rep-voiced answers to prospect questions, objections, pricing, and positioning.",
  icons: {
    icon: `${assetPrefix}/favicon.svg`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
