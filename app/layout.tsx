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
  metadataBase: new URL("https://www.khansaehsan.cv"),
  title: "Khansa Ehsan | Junior Full-Stack Developer in Lahore",
  description:
    "Khansa Ehsan is a Lahore-based junior full-stack developer building web applications with React, Angular, Node.js, TypeScript, and SQL. Explore projects and experience.",
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Khansa Ehsan" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Khansa Ehsan Portfolio",
    title: "Khansa Ehsan | Junior Full-Stack Developer",
    description:
      "Explore Khansa Ehsan's web development projects and experience with React, Angular, Node.js, TypeScript, and SQL.",
  },
  twitter: {
    card: "summary",
    title: "Khansa Ehsan | Junior Full-Stack Developer",
    description:
      "Web development projects and experience with React, Angular, Node.js, TypeScript, and SQL.",
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
