import CampDetail from "@/components/CampDetails";
import React from "react";

const ACPodWithOutdoorJacuzzi = () => {
  const triangleCamps = {
    name: "AC Pod with Outdoor Jacuzzi",
    tag: "Couple Favorite",
    guests: 2,
    price: {
      weekdays: 7000,
      saturday: 8000,
      sunday: 7500,
    },
    description:
      "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
    images: [
      {
        url: "/ac-pod-with-outdoor-jacuzzi/ac-pod-with-outdoor-jacuzzi-1.webp",
        imageClassName: "object-[0%_10%]",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/ac-pod-with-outdoor-jacuzzi-2.webp",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/ac-pod-with-outdoor-jacuzzi-3.webp",
        imageClassName: "object-[10%_20%]",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/ac-pod-with-outdoor-jacuzzi-5.webp",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/ac-pod-with-outdoor-jacuzzi-4.webp",
        imageClassName: "object-[60%_70%]",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default ACPodWithOutdoorJacuzzi;
