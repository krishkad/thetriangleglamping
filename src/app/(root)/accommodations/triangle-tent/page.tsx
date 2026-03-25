import CampDetail from "@/components/CampDetails";
import React from "react";

const TriangleTentPage = () => {
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
        url: "/videos/triangle-tent.mp4",
        imageClassName: "object-center",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleTentPage;
