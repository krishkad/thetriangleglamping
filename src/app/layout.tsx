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
    default: "The Triangle Glamping | Luxury Camping in Alandi, Pune",
    template: "%s | The Triangle Glamping",
  },

  description:
    "Experience luxury glamping near Alandi & Pimpri-Chinchwad at The Triangle. Private cabins, bonfire, BBQ, and peaceful nature stays near Pune. Perfect for couples, families, and weekend getaways.",

  keywords: [
    "Triangle Glamping Pune",
    "Camping near Alandi",
    "Glamping Pimpri Chinchwad",
    "Luxury Camping Pune",
    "Couple Camping Pune",
    "Weekend Getaway Pune",
    "Camping near PCMC",
    "Private Cabin Camping Pune",
  ],

  openGraph: {
    type: "website",
    url: base,
    siteName: "The Triangle Glamping",
    title: "The Triangle Glamping | Alandi, Pune",
    description:
      "Luxury glamping experience near Pune with private setups, bonfire, BBQ, and nature views.",
    images: [
      {
        url: `${base}/cocoon-ac-tent/cocoon-ac-tent-1.webp`,
        width: 1600,
        height: 900,
        alt: "The Triangle Glamping - Luxury Stay Near Pune",
      },
      {
        url: `${base}/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-5.webp`,
        width: 1600,
        height: 900,
      },
      {
        url: `${base}/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-7.webp`,
        width: 1600,
        height: 900,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: [`${base}/cocoon-ac-tent/cocoon-ac-tent-1.webp`],
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
            `${process.env.NEXT_PUBLIC_BASE_URL}/images/accommodations/delux/delux-1.webp`,
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
