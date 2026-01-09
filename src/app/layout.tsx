import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Krea: AI Creative Suite for Images, Video & 3D",
  description:
    "Generate, edit, and enhance images, videos, and 3D assets with Krea's creative AI suite. Start for free with real-time tools, powerful models, and collaborative workflows.",
  keywords: [
    "AI",
    "image generation",
    "video generation",
    "3D generation",
    "creative AI",
    "Krea",
  ],
  authors: [{ name: "Krea" }],
  openGraph: {
    title: "Krea: AI Creative Suite for Images, Video & 3D",
    description:
      "Generate, edit, and enhance images, videos, and 3D assets with Krea's creative AI suite.",
    type: "website",
    url: "https://www.krea.ai/",
    images: [
      {
        url: "https://s.krea.ai/opengraph.webp",
        width: 1200,
        height: 630,
        alt: "Krea – AI Creative Suite",
      },
    ],
    siteName: "Krea",
  },
  twitter: {
    card: "summary_large_image",
    title: "Krea: AI Creative Suite for Images, Video, & 3D",
    description:
      "Generate, edit, and enhance images, videos, and 3D assets with Krea's creative AI suite.",
    images: ["https://s.krea.ai/opengraph.webp"],
    site: "@krea_ai",
    creator: "@krea_ai",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} no-scrollbar`}>
      <body className="bg-primary-0 dark:bg-primary-950 h-full min-h-full">{children}</body>
    </html>
  );
}
