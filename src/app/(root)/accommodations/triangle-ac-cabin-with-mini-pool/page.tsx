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
    description:
      "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
    images: [
      {
        url: "/triangle-ac-cabin-with-mini-pool/triangle-ac-cabin-with-mini-pool-6.webp",
        imageClassName: "object-center",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/triangle-ac-cabin-with-mini-pool-5.webp",
        imageClassName: "object-[10%_30%]",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/triangle-ac-cabin-with-mini-pool-7.webp",
        imageClassName: "object-[20%_40%]",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/triangle-ac-cabin-with-mini-pool-2.webp",
        imageClassName: "object-[60%_70%]",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleACCabinWithMiniPoolPage;
