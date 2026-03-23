import CampDetail from "@/components/CampDetails";
import React from "react";

const CocconACTent = () => {
  const triangleCamps = {
    name: "Cocoon AC Tent",
    tag: "Couple Favorite",
    guests: 2,
    price: {
      weekdays: 6000,
      saturday: 7000,
      sunday: 6500,
    },
    description:
      "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
    images: [
      {
        url: "/cocoon-ac-tent/cocoon-ac-tent-1.webp",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent/cocoon-ac-tent-2.webp",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent/cocoon-ac-tent-4.webp",
        imageClassName: "object-[20%_30%]",
      },
      {
        url: "/cocoon-ac-tent/cocoon-ac-tent-5.webp",
        imageClassName: "object-[30%_40%]",
      },
      {
        url: "/cocoon-ac-tent/cocoon-ac-tent-6.webp",
        imageClassName: "object-[30%_40%]",
      },
      {
        url: "/cocoon-ac-tent/cocoon-ac-tent-7.webp",
        imageClassName: "object-contain",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default CocconACTent;
