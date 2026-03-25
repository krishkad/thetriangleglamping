import CampDetail from "@/components/CampDetails";
import React from "react";

const triangleCamps = {
  name: "Triangle Cooler Cabin",
  tag: "Couple Favorite",
  guests: "2–3 Guests • Riverside Stay",
  price: {
    weekdays: 4500,
    saturday: 5500,
    sunday: 5000,
  },
  description:
    "Enjoy a peaceful nature escape in our Triangle Wooden Cooler Cabin, designed for guests who want the charm of glamping with added comfort and privacy. Surrounded by serene riverside vibes, this cabin offers a cozy wooden stay experience perfect for relaxing day and celebrations.",

  stayIncludes: [
    "Comfortable Bedding",
    "Air Cooler for Added Comfort",
    "Private Washroom",
    "Private Lawn Area",
    "Private Dining Space",
    "Private Hammock",
    "Private Bonfire & BBQ Area",
    "Private Riverside Sitting Bench",
    "Ambient Lighting & Charging Points",
  ],
  whyChoose: [
    "Cozy wooden cabin stay",
    "Private washroom & space",
    "Peaceful riverside setting",
    "Comfort meets nature",
    "Great for couples & families",
    "Budget-friendly upgrade",
    "Free Parking",
  ],
  images: [
    {
      url: "/triangle-cooler-cabin/IMG_3346.jpg",
      imageClassName: "object-[20%_30%]",
    },
    {
      url: "/triangle-cooler-cabin/IMG_7891.JPG.jpeg",
      imageClassName: "object-[20%_30%]",
    },
    {
      url: "/triangle-cooler-cabin/IMG_8263.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-cooler-cabin/IMG_7139.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-cooler-cabin/IMG_9203.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-cooler-cabin/IMG_9238.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-cooler-cabin/IMG_7572.JPG.jpeg",
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
    {
      url: "/videos/triangle-cooler-cabin.mp4",
      imageClassName: "object-contain",
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

const TriangleCoolerCabinPage = () => {
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleCoolerCabinPage;
