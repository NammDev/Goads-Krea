import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo/site-config";

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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}: AI Creative Suite for Images, Video & 3D`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Generate, edit, and enhance images, videos, and 3D assets with Krea's creative AI suite. Start for free with real-time tools, powerful models, and collaborative workflows.",
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author }],
  openGraph: {
    title: `${siteConfig.name}: AI Creative Suite for Images, Video & 3D`,
    description:
      "Generate, edit, and enhance images, videos, and 3D assets with Krea's creative AI suite.",
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} – AI Creative Suite`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name}: AI Creative Suite for Images, Video & 3D`,
    description:
      "Generate, edit, and enhance images, videos, and 3D assets with Krea's creative AI suite.",
    images: [siteConfig.ogImage],
    site: siteConfig.twitter.site,
    creator: siteConfig.twitter.handle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} no-scrollbar`}>
      <body className="bg-primary-0 dark:bg-primary-950 h-full min-h-full">
        {children}
      </body>
    </html>
  );
}
