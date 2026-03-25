import CampDetail from "@/components/CampDetails";
import React from "react";

const triangleCamps = {
  name: "Triangle AC Cabin with Mini Pool",
  tag: "Couple Favorite",
  guests: "2–3 Guests • Riverside Stay",
  price: {
    weekdays: 6000,
    saturday: 6750,
    sunday: 6500,
  },
  description: `Elevate your glamping experience with our most exclusive stay. This premium Triangle Wooden AC Cabin is designed for those who want total privacy, air-conditioned comfort, and the luxury of their own Private Mini Pool right outside their cabin.

Perfect for a romantic escape or a small family treat, this cabin offers a level of seclusion and relaxation that is unmatched.`,
  stayIncludes: [
    "Luxury Triangle AC Cabin (2–3 Guests Capacity)",
    "Private Mini Pool (Exclusively for your cabin)",
    "Fully Air-Conditioned Interior",
    "Private Washroom next to cabin",
    "Private Lawn & Dining Area",
    "Private Bonfire & BBQ Area",
    "High-Quality Bedding & Linens",
    "Ambient Lighting & Charging Points",
  ],
  whyChoose: [
    "Peaceful riverside atmosphere",
    "Private spaces no crowd disturbance",
    "Ideal for couples & celebrations",
    "Homely food experience",
    "Budget-friendly romantic stay",
    "Free Parking",
  ],
  images: [
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_8239.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_1967.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_1966.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_1968.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_1965.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_2835.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_3348.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_3735.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_3946.JPG.jpeg",
      imageClassName: "object-contain",
    },
  ],
};

export async function generateMetadata() {
  const data = triangleCamps;const slug = data.name
  .toLowerCase()
  .replace(/\band\b/g, "")        // remove "and"
  .replace(/\s+/g, " ")           // normalize spaces after removal
  .trim()
  .replace(/\s+/g, "-")           // convert spaces to hyphens
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
const TriangleACCabinWithMiniPoolPage = () => {
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleACCabinWithMiniPoolPage;
