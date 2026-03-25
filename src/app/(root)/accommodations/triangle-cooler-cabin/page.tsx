import CampDetail from "@/components/CampDetails";
import React from "react";

const TriangleCoolerCabinPage = () => {
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
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleCoolerCabinPage;
