import CampDetail from "@/components/CampDetails";
import React from "react";

const TriangleACCabinWithMiniPoolPage = () => {
  const triangleCamps = {
    name: "Triangle AC Cabin with Mini Pool",
    tag: "Couple Favorite",
    guests: 2,
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
      "Dedicated Caretaker for personalized service",
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
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleACCabinWithMiniPoolPage;
