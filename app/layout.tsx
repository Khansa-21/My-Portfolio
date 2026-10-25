import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";

    const theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : systemTheme;

    document.documentElement.dataset.theme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Khansa Ehsan | Full-Stack Developer",
    template: "%s | Khansa Ehsan",
  },
  description:
    "Portfolio of Khansa Ehsan, a full-stack developer building thoughtful web experiences",
  keywords: [
    "Khansa Ehsan",
    "Full-Stack Developer",
    "MERN Developer",
    "React Developer",
    "Angular Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Khansa Ehsan" }],
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#160a1c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
      </head>

      <body>{children}</body>
    </html>
  );
}
