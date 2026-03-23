import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const base = process.env.NEXT_PUBLIC_BASE_URL as string;

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(base),

  title: {
    default: "Pawna Lake Camping | Luxury Tents & Lakeside Experience",
    template: "%s | Pawna Lake Camping",
  },

  description:
    "Book premium Pawna Lake camping with luxury tents, BBQ, live music, boating and stunning lakeside views. Perfect for couples, families, and groups.",

  keywords: [
    "Pawna Lake Camping",
    "Lonavala Camping",
    "Couple Camping",
    "Couple Camping Pawna",
    "Couple Camping Lonavla",
  ],

  openGraph: {
    type: "website",
    url: base,
    siteName: "Pawna Camps",
    title: "Pawna Lake Camping",
    description:
      "Premium Pawna Lake camping with BBQ, boating and luxury tents.",
    images: [
      {
        url: `${base}/images/accommodations/delux/delux-1.webp`,
        width: 1600,
        height: 900,
        alt: "Pawna Lake Luxury Camping",
      },
      {
        url: `${base}/images/accommodations/delux/delux-2.webp`,
        width: 1600,
        height: 900,
      },
      {
        url: `${base}/images/accommodations/triangle/triangle-1.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [`${base}/images/accommodations/delux/delux-1.webp`],
  },

  alternates: {
    canonical: base,
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="image"
          content={cn(
            `${process.env.NEXT_PUBLIC_BASE_URL}/images/accommodations/delux/delux-1.webp`
          )}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17767702220"
          strategy="afterInteractive"
        />

        <Script id="google-ads-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17767702220');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17776658067"
          strategy="afterInteractive"
        />

        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17776658067');
          `}
        </Script>
      </body>
    </html>
  );
}
