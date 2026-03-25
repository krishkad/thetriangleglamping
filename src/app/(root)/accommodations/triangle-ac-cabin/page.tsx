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
    description: `Stay Experience the perfect blend of rustic nature and modern luxury in our Triangle Wooden AC Cabin. Designed for guests who seek the ultimate glamping experience without compromising on climate-controlled comfort.

Set against a serene riverside backdrop, this premium cabin offers a cool, peaceful sanctuary perfect for escaping the heat while enjoying the great outdoors.`,
    stayIncludes: [
      "Fully Air-Conditioned Interior",
      "Comfortable Bedding",
      "Private Washroom next to the cabin",
      "Private Landscaped Lawn",
      "Exclusive Private Dining Area",
      "Dedicated Personal Caretaker",
      "Private Bonfire & BBQ Zone",
      "Riverside Sitting Bench",
      "Ambient Mood Lighting & Multiple Charging Points",
    ],
    whyChoose: [
      "Peaceful riverside atmosphere",
      "Private spaces no crowd disturbance",
      "Ideal for couples & celebrations",
      "Homely food experience",
      "Budget-friendly romantic stay",
       "Free Parking",
    ],
    images: [
     {
        url: "/triangle-ac-cabin/IMG_3345.jpg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin/IMG_8263.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin/IMG_3346.jpg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin/IMG_7139.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin/IMG_9203.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin/IMG_9238.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin/IMG_7569.JPG.jpeg",
        imageClassName: "object-contain",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default TriangleACCabinPage;
