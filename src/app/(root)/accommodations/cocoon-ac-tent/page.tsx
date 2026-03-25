import CampDetail from "@/components/CampDetails";
import React from "react";

const CocconACTent = () => {
  const triangleCamps = {
    name: "Cocoon AC Tent",
    tag: "Couple Favorite",
    guests: "2–4 Guests • Riverside Stay",
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
      "",
      "Ambient Lighting & Charging Points",
      "Private Bluetooth Speaker",
    ],
    whyChoose: [
      "Max space for up to 4 adults",
      "Private pool, lawn & dining",
      "High hygiene standards",
      "Modern Instagrammable design",
      "Free Parking",
    ],
    images: [
      {
        url: "/cocoon-ac-tent/IMG_6329.PNG",
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
        url: "/cocoon-ac-tent-with-mini-pool/IMG_1930.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_6615.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_0455.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-mini-pool/IMG_3735.JPG.jpeg",
        imageClassName: "object-center",
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
