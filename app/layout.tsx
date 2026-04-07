import type { Metadata } from "next"
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "RepurposeTube — Turn Any YouTube Video Into 6 Content Formats Instantly",
    template: "%s | RepurposeTube",
  },
  description:
    "Paste a YouTube URL and RepurposeTube generates a blog post, Twitter/X thread, LinkedIn post, YouTube SEO package, newsletter email, and Shorts scripts — all in parallel using AI. Free to start, no credit card needed.",
  keywords: [
    "youtube repurposing tool",
    "repurpose youtube video",
    "youtube to blog post",
    "youtube to twitter thread",
    "youtube to linkedin post",
    "youtube seo generator",
    "youtube content repurposing",
    "ai content repurposing tool",
    "youtube transcript to content",
    "youtube to newsletter",
    "youtube to shorts script",
  ],
  authors: [{ name: "RepurposeTube", url: "https://repurposetube.com" }],
  creator: "RepurposeTube",
  publisher: "RepurposeTube",
  metadataBase: new URL("https://repurposetube.com"),
  alternates: {
    canonical: "https://repurposetube.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://repurposetube.com",
    siteName: "RepurposeTube",
    title: "RepurposeTube — Turn Any YouTube Video Into 6 Content Formats Instantly",
    description:
      "Paste a YouTube URL and get a blog post, Twitter/X thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — all generated in parallel. Free to start.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RepurposeTube — One YouTube URL, 6 Content Formats, 60 Seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@repurposetube",
    creator: "@repurposetube",
    title: "RepurposeTube — Turn Any YouTube Video Into 6 Content Formats",
    description:
      "One YouTube URL → 6 content formats in 60 seconds. Blog post, Twitter thread, LinkedIn post, YouTube SEO package, newsletter, and Shorts scripts — all in parallel.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
