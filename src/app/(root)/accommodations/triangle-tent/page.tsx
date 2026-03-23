import CampDetail from "@/components/CampDetails";
import React from "react";

const TriangleTentPage = () => {
  const triangleCamps = {
    name: "Triangle Tent",
    tag: "Couple Favorite",
    guests: 2,
    price: {
      weekdays: 3500,
      saturday: 4250,
      sunday: 4000,
    },
    description:
      "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
    images: [
      { url: "/triangle-tent/triangle-tent-16.webp" },
      { url: "/triangle-tent/triangle-tent-11.webp" },
      { url: "/triangle-tent/triangle-tent-10.webp" },
      { url: "/triangle-tent/triangle-tent-9.webp" },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleTentPage;
