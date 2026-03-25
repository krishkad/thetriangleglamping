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
      "Experience our most unique and spacious stay! The Cocoon AC Tent offers a modern, organic design with a massive interior, making it the perfect choice for families or groups who want high-end comfort combined with the thrill of glamping.",
    stayIncludes: [
      "Private Hammock (Exclusively for your tent)",
      "Fully Air-Conditioned Large Living Space",
      "Private Washroom",
      "Private Lawn & Dining Area",
      "Private Bonfire & BBQ Area",
      "High-End Bedding & Plush Interiors",
      "Dedicated Caretaker for your convenience",
      "Ambient Lighting & Charging Points",
      "Private Bluetooth Speaker",
    ],
    whyChoose: [
      "Max space for up to 4 adults",
      "Private pool, lawn & dining",
      "High hygiene standards",
      "Modern Instagrammable design",
    ],
    images: [
      {
        url: "/cocoon-ac-tent/IMG_6329.PNG",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent/IMG_4517.HEIC",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent/IMG_4312.JPG.jpeg",
        imageClassName: "object-[20%_30%]",
      },
      {
        url: "/cocoon-ac-tent/IMG_3849.JPG.jpeg",
        imageClassName: "object-[30%_40%]",
      },
      {
        url: "/cocoon-ac-tent/IMG_3840.JPG.jpeg",
        imageClassName: "object-[30%_40%]",
      },
      {
        url: "/cocoon-ac-tent/IMG_1930.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/cocoon-ac-tent/IMG_4065.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/cocoon-ac-tent/IMG_0455.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/videos/cocoon-ac-tent.mp4",
        imageClassName: "object-contain",
      },
    ],
  };
  return <CampDetail camp={triangleCamps} />;
};

export default CocconACTent;
