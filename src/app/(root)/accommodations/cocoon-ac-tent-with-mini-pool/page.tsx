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
      "Step into luxury with our most spacious and unique offering. The Cocoon AC Tent is designed for those who want a one-of-a-kind architectural stay combined with the luxury of a Private Mini Pool. With its organic shape and climate-controlled interior, it’s the perfect lakeside sanctuary for families, or couples seeking extra space.",
    stayIncludes: [
      "Private Mini Pool (Exclusively for your tent)",
      "Fully Air-Conditioned Spacious Living Area",
      "Private Washroom (Professionally Cleaned)",
      "Private Lawn & Dining Area",
      "Private Bonfire & BBQ Setup",
      "Premium Bedding & Fresh In-house Laundry",
      "Dedicated Caretaker for your convenience",
      "Ambient Lighting & Multiple Charging Points",
      "Private Bluetooth Speaker",
    ],
    whyChoose: [
      "Spacious for up to 4 adults",
      "Private pool, lawn & dining",
      "High hygiene standards",
      "Modern Instagrammable design",
       "Free Parking",
    ],
    images: [
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_3119.PNG",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_4652.PNG",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_4653.PNG",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_4110.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_5677.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_1920.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_3849.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_3837.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_1926.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_5236.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/videos/cocoon-ac-tent-mini-tool.mp4",
        imageClassName: "object-center",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default CocoonACTentWithMiniPool;
