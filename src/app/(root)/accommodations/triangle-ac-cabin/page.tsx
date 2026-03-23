import CampDetail from "@/components/CampDetails";
import React from "react";

const TriangleACCabinPage = () => {
  const triangleCamps = {
    name: "Triangle AC Cabin",
    tag: "Couple Favorite",
    guests: 2,
    price: {
      weekdays: 4750,
      saturday: 5750,
      sunday: 5250,
    },
    description:
      "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
    images: [
      {
        url: "/triangle-ac-cabin-with-mini-pool/triangle-ac-cabin-with-mini-pool-1.webp",
        imageClassName: "object-center",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/triangle-ac-cabin-with-mini-pool-2.webp",
        imageClassName: "object-center",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/triangle-ac-cabin-with-mini-pool-6.webp",
        imageClassName: "object-center",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/triangle-ac-cabin-with-mini-pool-7.webp",
        imageClassName: "object-center",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleACCabinPage;
