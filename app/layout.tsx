import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    default: "RepurposeTube — Turn Any YouTube Video Into 6 Content Formats Instantly",
    template: "%s | RepurposeTube",
  },
  description:
    "Paste a YouTube URL and get a blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts — all generated in parallel by AI.",
  metadataBase: new URL("https://repurposetube.com"),
  openGraph: {
    siteName: "RepurposeTube",
    url: "https://repurposetube.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@repurposetube",
  },
  alternates: {
    canonical: "https://repurposetube.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
