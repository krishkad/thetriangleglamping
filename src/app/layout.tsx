import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
    default: "The Triangle Glamping | Luxury Glamping in Alandi, Pune",
    template: "%s | The Triangle Glamping",
  },

  description:
    "Experience luxury glamping near Alandi & Pimpri-Chinchwad at The Triangle. Private cabins, bonfire, BBQ, and peaceful nature stays near Pune. Perfect for couples, families, and weekend getaways.",

  keywords: [
    "Triangle Glamping Pune",
    "Glamping near Alandi",
    "Glamping Pimpri Chinchwad",
    "Luxury Glamping Pune",
    "Couple Glamping Pune",
    "Weekend Getaway Pune",
    "Luxury Glamping Mumbai",
    "Couple Glamping Mumbai",
    "Weekend Getaway Mumbai",
    "Glamping near PCMC",
    "Private Cabin Glamping Pune",
    "Private Cabin Glamping Mumbai",
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
            `${process.env.NEXT_PUBLIC_BASE_URL}/cocoon-ac-tent/cocoon-ac-tent-1.webp`,
          )}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5B0KYG8D08"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-5B0KYG8D08');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
