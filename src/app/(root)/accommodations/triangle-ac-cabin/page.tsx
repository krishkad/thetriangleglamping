import CampDetail from "@/components/CampDetails";
import React from "react";

const triangleCamps = {
  name: "Triangle AC Cabin",
  tag: "Couple Favorite",
  guests: "2–3 Guests • Riverside Stay",
  price: {
    weekdays: 4750,
    saturday: 5750,
    sunday: 5250,
  },
  description: `Stay Experience the perfect blend of rustic nature and modern luxury in our Triangle Wooden AC Cabin. Designed for guests who seek the ultimate glamping experience without compromising on climate-controlled comfort.

Set against a serene riverside backdrop, this premium cabin offers a cool, peaceful sanctuary perfect for escaping the heat while enjoying the great outdoors.`,
  stayIncludes: [
    "Fully Air-Conditioned Interior",
    "Comfortable Bedding",
    "Private Washroom next to the cabin",
    "Private Landscaped Lawn",
    "Exclusive Private Dining Area",
    "Dedicated Personal Caretaker",
    "Private Bonfire & BBQ Zone",
    "Riverside Sitting Bench",
    "Ambient Mood Lighting & Multiple Charging Points",
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
      url: "/triangle-ac-cabin/IMG_3345.jpg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin/IMG_8263.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin/IMG_3346.jpg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin/IMG_7139.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin/IMG_9203.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-ac-cabin/IMG_9238.JPG.jpeg",
      imageClassName: "object-contain",
    },

    {
      url: "/triangle-ac-cabin/IMG_7569.JPG.jpeg",
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
const TriangleACCabinPage = () => {
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleACCabinPage;
