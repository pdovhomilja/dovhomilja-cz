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
  title: "Pavel Dovhomilja | AI Industry Leader & EndorphinIT Co-founder",
  description: "Innovative entrepreneur and AI expert driving the future of workplace automation through Xmation AI employee platform. Transforming businesses with cutting-edge AI solutions.",
  keywords: "Pavel Dovhomilja, AI, artificial intelligence, EndorphinIT, Xmation, startup founder, AI employee platform, workplace automation, innovation",
  authors: [{ name: "Pavel Dovhomilja" }],
  openGraph: {
    title: "Pavel Dovhomilja | AI Industry Leader & EndorphinIT Co-founder",
    description: "Innovative entrepreneur and AI expert driving the future of workplace automation through Xmation AI employee platform.",
    url: "https://dovhomilja.cz",
    siteName: "Pavel Dovhomilja",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavel Dovhomilja | AI Industry Leader & EndorphinIT Co-founder",
    description: "Innovative entrepreneur and AI expert driving the future of workplace automation through Xmation AI employee platform.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
