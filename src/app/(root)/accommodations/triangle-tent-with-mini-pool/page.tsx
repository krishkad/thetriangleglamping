import CampDetail from "@/components/CampDetails";
import React from "react";

const TriangleTentWithMiniPoolPage = () => {
  const triangleCamps = {
    name: "Triangle Tent with Mini Pool",
    tag: "Couple Favorite",
    guests: 2,
    price: {
      weekdays: 4000,
      saturday: 4750,
      sunday: 4500,
    },
    description:
      "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
    images: [
      {
        url: "/triangle-tent-with-mini-pool/triangle-tent-1.webp",
        imageClassName: "object-cover",
      },
      {
        url: "/triangle-tent-with-mini-pool/triangle-tent-2.webp",
        imageClassName: "object-cover",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleTentWithMiniPoolPage;
