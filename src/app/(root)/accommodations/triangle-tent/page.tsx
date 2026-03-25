import CampDetail from "@/components/CampDetails";
import React from "react";

import type { Metadata } from "next";

const triangleCamps = {
  name: "Triangle Tent",
  tag: "Couple Favorite",
  guests: "2–3 Guests • Riverside Stay",
  price: {
    weekdays: 3500,
    saturday: 4250,
    sunday: 4000,
  },
  description:
    "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples and small groups seeking comfort, privacy, and a cozy nature experience.",
  stayIncludes: [
    "Comfortable Mattress, Fresh Blanket & Pillows",
    "Table Fan & Lighting",
    "Mobile Charging Point",
    "Private Lawn Area",
    "Private Bonfire & BBQ Setup",
    "Private Dining Area",
    "Riverside Sitting Bench",
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
      url: "/triangle-tent/triangle-tent-16.webp",
      imageClassName: "object-center",
    },
    {
      url: "/triangle-tent/triangle-tent-3.webp",
      imageClassName: "object-[28%_38%]",
    },
    {
      url: "/triangle-tent/triangle-tent-12.webp",
      imageClassName: "object-cover object-[20%_30%]",
    },
    {
      url: "/triangle-tent/triangle-tent-11.webp",
      imageClassName: "object-[58%_68%]",
    },
    {
      url: "/triangle-tent/IMG_9202.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-tent/triangle-tent-21.webp",
      imageClassName: "object-[38%_48%]",
    },
    {
      url: "/triangle-tent/IMG_9205.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-tent/triangle-tent-17.webp",
      imageClassName: "object-[58%_68%]",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_3735.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/triangle-ac-cabin-with-mini-pool/IMG_3946.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/videos/triangle-tent.mp4",
      imageClassName: "object-center",
    },
  ],
};

export async function generateMetadata() {
  const data = triangleCamps;

  const slug = data.name
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

const TriangleTentPage = () => {
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleTentPage;
