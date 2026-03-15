import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Muneeb Hassan — Full-Stack Developer",
  description:
    "Portfolio of Muneeb Hassan, a full-stack developer specializing in Next.js, Python, microservices, and cloud infrastructure.",
  keywords: [
    "Muneeb Hassan",
    "Full-Stack Developer",
    "Next.js",
    "Python",
    "FastAPI",
    "Microservices",
    "Portfolio",
  ],
  authors: [{ name: "Muneeb Hassan", url: "https://github.com/muneebxhasan" }],
  openGraph: {
    title: "Muneeb Hassan — Full-Stack Developer",
    description:
      "Full-stack developer building scalable web apps, APIs, and cloud systems.",
    url: "https://muneebhasan.dev",
    siteName: "Muneeb Hassan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muneeb Hassan — Full-Stack Developer",
    description:
      "Full-stack developer building scalable web apps, APIs, and cloud systems.",
    creator: "@muneebxhasan",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${jakarta.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
