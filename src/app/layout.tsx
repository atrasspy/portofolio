import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ============================================================
// Font Optimization - Next.js automatic font loading
// ============================================================
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// ============================================================
// SEO Metadata
// ============================================================
export const metadata: Metadata = {
  title: {
    default: "Atras Satrio Putra Yahza | Software Engineer",
    template: "%s | Atras Satrio Putra Yahza",
  },
  description:
    "Experienced Software Engineer with 4+ years of expertise in full-stack development, microservices architecture, and AI-augmented development. Specializing in Java, Spring Boot, and fintech solutions.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot",
    "Microservices",
    "Fintech",
    "AI-Augmented Development",
    "Jakarta",
    "Indonesia",
  ],
  authors: [{ name: "Atras Satrio Putra Yahza" }],
  creator: "Atras Satrio Putra Yahza",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Atras Satrio Putra Yahza | Software Engineer",
    description:
      "Experienced Software Engineer specializing in enterprise-level applications and microservices architecture.",
    siteName: "Atras Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atras Satrio Putra Yahza | Software Engineer",
    description:
      "Experienced Software Engineer specializing in enterprise-level applications and microservices architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

// ============================================================
// Root Layout
// ============================================================
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
