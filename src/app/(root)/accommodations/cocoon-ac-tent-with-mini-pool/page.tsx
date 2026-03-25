import CampDetail from "@/components/CampDetails";
import React from "react";

const triangleCamps = {
  name: "Cocoon AC Tent with Mini Pool",
  tag: "Couple Favorite",
  guests: "2–3 Guests • Riverside Stay",

  price: {
    weekdays: 6500,
    saturday: 7500,
    sunday: 7000,
  },
  description:
    "Step into luxury with our most spacious and unique offering. The Cocoon AC Tent is designed for those who want a one-of-a-kind architectural stay combined with the luxury of a Private Mini Pool. With its organic shape and climate-controlled interior, it’s the perfect lakeside sanctuary for families, or couples seeking extra space.",
  stayIncludes: [
    "Private Mini Pool (Exclusively for your tent)",
    "Fully Air-Conditioned Spacious Living Area",
    "Private Washroom (Professionally Cleaned)",
    "Private Lawn & Dining Area",
    "Private Bonfire & BBQ Setup",
    "Premium Bedding & Fresh In-house Laundry",
    "Ambient Lighting & Multiple Charging Points",
    "Private Bluetooth Speaker",
  ],
  whyChoose: [
    "Spacious for up to 4 adults",
    "Private pool, lawn & dining",
    "High hygiene standards",
    "Modern Instagrammable design",
    "Free Parking",
  ],
  images: [
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_3119.PNG",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_4652.PNG",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_4653.PNG",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_4110.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_5677.JPG.jpeg",
      imageClassName: "object-center",
    },

    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_3849.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_3837.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_1926.JPG.jpeg",
      imageClassName: "object-center",
    },
    {
      url: "/cocoon-ac-tent-with-mini-pool/IMG_5236.JPG.jpeg",
      imageClassName: "object-center",
    },
    // {
    //   url: "/cocoon-ac-tent-with-mini-pool/IMG_0455.JPG.jpeg",
    //   imageClassName: "object-center",
    // },
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

    {
      url: "/videos/cocoon-ac-tent-mini-tool.mp4",
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

const CocoonACTentWithMiniPool = () => {
  return <CampDetail camp={triangleCamps} />;
};

export default CocoonACTentWithMiniPool;
