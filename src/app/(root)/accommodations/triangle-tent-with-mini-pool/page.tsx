import CampDetail from "@/components/CampDetails";
import React from "react";

const TriangleTentWithMiniPoolPage = () => {
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
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleTentWithMiniPoolPage;
