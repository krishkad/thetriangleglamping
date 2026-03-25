import CampDetail from "@/components/CampDetails";
import React from "react";

const triangleCamps = {
  name: "AC Pod with Outdoor Jacuzzi",
  tag: "Couple Favorite",
  guests: "2–4 Guests • Riverside Stay",
  price: {
    weekdays: 7000,
    saturday: 8000,
    sunday: 7500,
  },
  description: `Experience the perfect blend of modern comfort and nature in our fully air-conditioned luxury pod featuring a private outdoor Jacuzzi.

Designed for couples and special celebrations, this stay offers privacy, relaxation, and a premium glamping experience under the open sky.`,
  stayIncludes: [
    "Outdoor 2-Seater Private Jacuzzi",
    "Air-Conditioned Pod Room",
    "Comfortable Bedding",
    "Sofa cum Bed",
    "Attached Washroom",
    "Ambient Lighting",
    "Mobile Charging Points",
    "Private Garden Area",
    "Private Dining Space",
    "Private Bonfire & BBQ Area",
    "Private Bluetooth Speaker",
    "Private Hammock",
  ],
  whyChoose: [
    "Private outdoor jacuzzi",
    "Fully air-conditioned comfort",
    "Premium romantic ambience",
    "Complete privacy",
    "Ideal for celebrations & proposals",
    "Luxury upgrade from tents",
    "Free Parking",
  ],
  images: [
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_9902.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_9893.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_9884.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_4111.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_4112.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_1035.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_6612.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_6603.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_0455.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/ac-pod-with-outdoor-jacuzzi/IMG_5236.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_3735.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/videos/ac-pod-outdoor-jacuzzi.mp4",
      imageClassName: "object-center",
    },
  ],
};

export async function generateMetadata() {
  const data = triangleCamps;
  const slug = data.name
    .toLowerCase()
    .replace(/\band\b/g, "") // remove "and"
    .replace(/\s+/g, " ") // normalize spaces after removal
    .trim()
    .replace(/\s+/g, "-") // convert spaces to hyphens
    .replace(/[^\w-]+/g, "");

  const url = `https://thetriangleglamping.com/stays/${slug}`;

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

const ACPodWithOutdoorJacuzzi = () => {
  return <CampDetail camp={triangleCamps} />;
};

export default ACPodWithOutdoorJacuzzi;
