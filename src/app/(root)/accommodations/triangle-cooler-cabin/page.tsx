import CampDetail from "@/components/CampDetails";
import React from "react";

const TriangleCoolerCabinPage = () => {
  const triangleCamps = {
    name: "Triangle Cooler Cabin",
    tag: "Couple Favorite",
    guests: 2,
    price: {
      weekdays: 4500,
      saturday: 5500,
      sunday: 5000,
    },
    description:
      "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
    images: [
      {
        url: "/triangle-cooler-cabin/triangle-cooler-cabin-4.webp",
        imageClassName: "object-[20%_30%]",
      },
      {
        url: "/triangle-cooler-cabin/triangle-cooler-cabin-5.webp",
        imageClassName: "object-[20%_30%]",
      },
      {
        url: "/triangle-cooler-cabin/triangle-cooler-cabin-1.webp",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-cooler-cabin/triangle-cooler-cabin-2.webp",
        imageClassName: "object-center",
      },
      {
        url: "/triangle-cooler-cabin/triangle-cooler-cabin-3.webp",
        imageClassName: "object-center",
      },
      {
        url: "/triangle-cooler-cabin/triangle-cooler-cabin-6.webp",
        imageClassName: "object-center",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleCoolerCabinPage;
