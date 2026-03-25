import CampDetail from "@/components/CampDetails";
import React from "react";

const triangleCamps = {
  name: "Triangle Tent with Mini Pool",
  tag: "Couple Favorite",
  guests: "2–3 Guests • Riverside Stay",
  price: {
    weekdays: 4000,
    saturday: 4750,
    sunday: 4500,
  },
  description:
    "Upgrade your getaway with a stylish triangle tent featuring your own private mini pool, offering the perfect mix of nature, comfort, and luxury. Wake up to serene river views, relax in your personal pool, and enjoy a romantic stay designed for unforgettable moments.",
  stayIncludes: [
    "Comfortable Mattress, Fresh Blanket & Pillows",
    "Table Fan & Lighting",
    "Mobile Charging Point",
    "Private Mini Pool",
    "Private Lawn Area",
    "Private Bonfire & BBQ Setup",
    "Private Dining Area",
    "Riverside Sitting Bench",
    "Private Washroom at walkable distance",
    "Enjoy complete privacy with beautiful riverside vibes.",
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
      url: "/triangle-tent-with-mini-pool/IMG_4604.JPG.jpeg",
      imageClassName: "object-[20%_30%]",
    },
    {
      url: "/triangle-tent-with-mini-pool/IMG_4648.JPG.jpeg",
      imageClassName: "object-[30%_40%]",
    },
    {
      url: "/triangle-tent-with-mini-pool/IMG_4590.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-tent-with-mini-pool/IMG_9202.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-tent-with-mini-pool/IMG_9196.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-tent-with-mini-pool/IMG_9205.JPG.jpeg",
      imageClassName: "object-contain",
    },
    {
      url: "/triangle-tent-with-mini-pool/IMG_3775.JPG.jpeg",
      imageClassName: "object-cover",
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
      url: "/videos/triangle-ac-cabin-mini-pool.mp4",
      imageClassName: "object-cover",
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

const TriangleTentWithMiniPoolPage = () => {
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleTentWithMiniPoolPage;
