import CampDetail from "@/components/CampDetails";
import React from "react";

const CocoonACTentWithJacuzziAndMiniPoolPage = () => {
  const triangleCamps = {
    name: "Cocoon AC Tent with Jacuzzi & Mini Pool",
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
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/cocoon-ac-tent-with-jacuzzi-mini-pool-6.webp",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/cocoon-ac-tent-with-jacuzzi-mini-pool-8.webp",
        imageClassName: "object-[10%_30%]",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/cocoon-ac-tent-with-jacuzzi-mini-pool-7.webp",
        imageClassName: "object-[20%_40%]",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/cocoon-ac-tent-with-jacuzzi-mini-pool-2.webp",
        imageClassName: "object-[60%_70%]",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default CocoonACTentWithJacuzziAndMiniPoolPage;
