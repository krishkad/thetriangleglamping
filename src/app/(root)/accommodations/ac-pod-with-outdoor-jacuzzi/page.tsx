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
    description: `Experience the perfect blend of modern comfort and nature in our fully air-conditioned luxury pod featuring a private outdoor Jacuzzi.

Designed for couples and special celebrations, this stay offers privacy, relaxation, and a premium glamping experience under the open sky.`,
    stayIncludes: [
      "Air-Conditioned Pod Room",
      "Comfortable Bedding",
      "Sofa cum Bed",
      "Attached Washroom",
      "Ambient Lighting",
      "Mobile Charging Points",
      "Private Garden Area",
      "Private Dining Space",
      "Private Bonfire & BBQ Area",
      "Private Bluetooth Speaker",
      "Private Hammock",
      "Dedicated Caretaker at your service",
    ],
    whyChoose: [
      "Private outdoor jacuzzi",
      "Fully air-conditioned comfort",
      "Premium romantic ambience",
      "Complete privacy",
      "Ideal for celebrations & proposals",
      "Luxury upgrade from tents",
       "Free Parking",
    ],
    images: [
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_9902.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_9893.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_9884.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_4111.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_4112.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_1035.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_6612.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_6603.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_0455.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/ac-pod-with-outdoor-jacuzzi/IMG_5236.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/videos/ac-pod-outdoor-jacuzzi.mp4",
        imageClassName: "object-center",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default ACPodWithOutdoorJacuzzi;
