import CampDetail from "@/components/CampDetails";
import React from "react";

const CocoonACTentWithMiniPool = () => {
  const triangleCamps = {
    name: "Cocoon AC Tent with Mini Pool",
    tag: "Couple Favorite",
    guests: 2,
    price: {
      weekdays: 6500,
      saturday: 7500,
      sunday: 7000,
    },
    description:
      "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
    images: [
      {
        url: "/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-9.webp",
        imageClassName: "object-center",
      },
      // {
      //   url: "/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-2.webp",
      //   imageClassName: "object-center",
      // },
      {
        url: "/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-4.webp",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-5.webp",
        imageClassName: "object-contain",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-6.webp",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-7.webp",
        imageClassName: "object-[10%_20%]",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/cocoon-ac-tent-with-mini-pool-8.webp",
        imageClassName: "object-contain",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default CocoonACTentWithMiniPool;
