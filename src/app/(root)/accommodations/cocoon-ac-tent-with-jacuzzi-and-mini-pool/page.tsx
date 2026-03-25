import CampDetail from "@/components/CampDetails";
import React from "react";

const triangleCamps = {
  name: "Cocoon AC Tent with Jacuzzi & Mini Pool",
  tag: "Couple Favorite",
  guests: "2–4 Guests • Riverside Stay",
  price: {
    weekdays: 8000,
    saturday: 9000,
    sunday: 8500,
  },
  description: `Experience the most premium stay at our glampsite, designed for guests who want complete privacy, luxury comfort, and unforgettable celebration moments.

The Cocoon AC Tent combines a private outdoor Jacuzzi, exclusive mini pool, and fully air-conditioned luxury tent, creating a one-of-a-kind glamping experience surrounded by peaceful nature.`,
  stayIncludes: [
    "Outdoor 2-Seater Private Jacuzzi",
    "Private Mini Pool (Exclusive Use)",
    "Private Swing Seating",
    "Private Garden Area",
    "Private Dining Space",
    "Private Bonfire & BBQ Area",
    "Private Washroom",
    "Private Bluetooth Speaker",
    "Fully Air-Conditioned Tent",
    "Comfortable Premium Bedding",
    "Ambient Lighting & Charging Points",
    "Remote Operational curtains",
  ],
  whyChoose: [
    "Most premium stay",
    "Private jacuzzi + mini pool",
    "Fully air-conditioned comfort",
    "Perfect for celebrations & proposals",
    "Private garden & full privacy",
    "Ideal for couples & small families",
    "Free Parking",
  ],
  images: [
    {
      url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5114.JPG.jpeg",
      imageClassName: "object-center",
    },

    {
      url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5127.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5332.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5330.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_3161.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_3210.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_4491.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_1930.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_6615.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_0455.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_3735.JPG.jpeg",
      imageClassName: "object-center",
    },
  ],
};

export async function generateMetadata() {
  const data = triangleCamps;

  const url = `https://thetriangleglamping.com/stays/cocoon-ac-tent-with-jacuzzi-mini-pool`;

  const title = `${data.name} near Pune and Mumbai | Private Glamping Stay`;
  const description =
    data.description ||
    `${data.name} near Pune with private setup, BBQ, bonfire & peaceful nature stay. Perfect for couples & weekend getaways.`;

  const image = data.images[0].url || "/og-default.jpg";

  return {
    title,
    description,

    keywords: [
      data.name,
      "glamping near Pune",
      "camping near Mumbai",
      "private cabin Pune",
      "weekend getaway Pune",
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "The Triangle Glamping",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: data.name,
        },
      ],
      locale: "en_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

const CocoonACTentWithJacuzziAndMiniPoolPage = () => {
  return <CampDetail camp={triangleCamps} />;
};

export default CocoonACTentWithJacuzziAndMiniPoolPage;
