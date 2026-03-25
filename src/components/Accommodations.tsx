"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const food =
  "Tea/coffee & Goni Manchurian (Per Plate Basis) • BBQ (Paneer / Chicken – Limited) 🍢 • Unlimited Dinner (Veg & Non-Veg Buffet) 🍱 • Morning Tea 🍵 & Breakfast 🥗 • Mineral Water 💧";

const activities = `Private Bonfire • Table Tennis • Cricket • Badminton • Chess & more
            Indoor & Outdoor Games • Romantic Music • Private Theatre (extra
            charges) • Self guided Farm Tour`;

const accommodations = [
  {
    id: 1,
    name: "Triangle Tent",
    category: "cabin",
    slug: "triangle-tent",
    images: [
      {
        url: "/triangle-tent/triangle-tent-16.webp",
        imageClassName: "object-center",
      },
      {
        url: "/triangle-tent/triangle-tent-3.webp",
        imageClassName: "object-[28%_38%]",
      },
      {
        url: "/triangle-tent/triangle-tent-12.webp",
        imageClassName: "object-cover object-[20%_30%]",
      },
      {
        url: "/triangle-tent/triangle-tent-11.webp",
        imageClassName: "object-[58%_68%]",
      },
      {
        url: "/triangle-tent/IMG_9202.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-tent/triangle-tent-21.webp",
        imageClassName: "object-[38%_48%]",
      },
      {
        url: "/triangle-tent/IMG_9205.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-tent/triangle-tent-17.webp",
        imageClassName: "object-[58%_68%]",
      },
    ],
    price: 3500,
    beforePrice: 4250,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="font-semibold text-forest-700 text-sm">
            🏕 Stay Includes
          </h4>

          <div className="text-xs text-slate-600 space-y-1 leading-relaxed">
            <p className="text-xs text-slate-600 leading-relaxed">
              Private bonfire 🔥 • Private dining area 🍽️ • Private BBQ setup 🍖
              • Private lawn 🌿 • Private bench 🪑 • Private Washroom at
              walkable distance 🚿 ✨
            </p>
          </div>
        </div>
        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 text-sm mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹3500{" "}
            <span className="text-slate-400">(₹2500 w/o meals)</span> <br />
            Saturday ₹4250{" "}
            <span className="text-slate-400">(₹3250 w/o meals)</span> <br />
            Sunday ₹4000{" "}
            <span className="text-slate-400">(₹3000 w/o meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 text-sm mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–3 Guests (+₹1750)</span>
          <span>🕒 4 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "Affordable and cozy triangle tents with private outdoor setup.",
  },

  {
    id: 2,
    name: "Triangle Tent with Mini Pool",
    category: "cabin",
    slug: "triangle-tent-with-mini-pool",
    images: [
      {
        url: "/triangle-tent-with-mini-pool/IMG_4604.JPG.jpeg",
        imageClassName: "object-[20%_30%]",
      },
      {
        url: "/triangle-tent-with-mini-pool/IMG_4648.JPG.jpeg",
        imageClassName: "object-[30%_40%]",
      },
      {
        url: "/triangle-tent-with-mini-pool/IMG_4590.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-tent-with-mini-pool/IMG_9202.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-tent-with-mini-pool/IMG_9196.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-tent-with-mini-pool/IMG_9205.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-tent-with-mini-pool/IMG_3775.JPG.jpeg",
        imageClassName: "object-cover",
      },
    ],
    price: 4000,
    beforePrice: 4750,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="text-sm font-semibold text-forest-700">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Private mini pool 🏊‍♂️ • Private bonfire 🔥 • Private dining area 🍽️ •
            Private BBQ setup 🍖 • Fan 🌀 • Private lawn 🌿 • Private bench 🪑 •
            Private Washroom at walkable distance 🚿 ✨
          </p>
        </div>

        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹4000{" "}
            <span className="text-slate-400">(₹3000 w/o meals)</span> <br />
            Saturday ₹4750{" "}
            <span className="text-slate-400">(₹3750 w/o meals)</span> <br />
            Sunday ₹4500{" "}
            <span className="text-slate-400">(₹3500 w/o meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–3 Guests (+₹1750)</span>
          <span>🕒 4 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "Triangle tents upgraded with a private mini pool, offering a cozy and exclusive stay surrounded by nature.",
  },
  {
    id: 9,
    name: "Triangle Cooler Cabin",
    category: "cabin",
    slug: "triangle-cooler-cabin",
    images: [
      {
        url: "/triangle-cooler-cabin/IMG_3346.jpg",
        imageClassName: "object-[20%_30%]",
      },
      {
        url: "/triangle-cooler-cabin/IMG_7891.JPG.jpeg",
        imageClassName: "object-[20%_30%]",
      },
      {
        url: "/triangle-cooler-cabin/IMG_8263.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-cooler-cabin/IMG_7139.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-cooler-cabin/IMG_9203.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-cooler-cabin/IMG_9238.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-cooler-cabin/IMG_7572.JPG.jpeg",
        imageClassName: "object-contain",
      },
    ],
    price: 4500,
    beforePrice: 5500,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="text-sm font-semibold text-forest-700">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Air cooler ❄️ • Private washroom 🚿 • Private hammock 🪢 • Private
            bonfire 🔥 • Private dining area 🍽️ • Private BBQ setup 🍖 • Private
            lawn 🌿 • Private bench 🪑 ✨
          </p>
        </div>

        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹4500{" "}
            <span className="text-slate-400">(₹3500 w/o meals)</span> <br />
            Saturday ₹5500{" "}
            <span className="text-slate-400">(₹4500 w/o meals)</span> <br />
            Sunday ₹5000{" "}
            <span className="text-slate-400">(₹4000 w/o meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–3 Guests (+₹1750)</span>
          <span>🕒 4 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "⭐ Most Comfortable Non-AC Stay Option. Cozy triangle cabin with a private setup, for a comfortable escape.",
  },

  {
    id: 3,
    name: "Triangle AC Cabin",
    category: "cabin",
    slug: "triangle-ac-cabin",
    images: [
      {
        url: "/triangle-ac-cabin/IMG_3345.jpg",
        imageClassName: "object-cover",
      },
      {
        url: "/triangle-ac-cabin/IMG_8263.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin/IMG_3346.jpg",
        imageClassName: "object-cover",
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
    price: 4750,
    beforePrice: 5750,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="text-sm font-semibold text-forest-700">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Private washroom 🚿 • Private hammock 🪢 • Private bonfire 🔥 •
            Private dining area 🍽️ • Private BBQ setup 🍖 • Private lawn 🌿 •
            Private bench 🪑 ✨
          </p>
        </div>

        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹4750{" "}
            <span className="text-slate-400">(₹3750 w/o meals)</span> <br />
            Saturday ₹5750{" "}
            <span className="text-slate-400">(₹4750 w/o meals)</span> <br />
            Sunday ₹5250{" "}
            <span className="text-slate-400">(₹4250 w/o meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–3 Guests (+₹1750)</span>
          <span>🕒 3 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "AC cabin designed for a comfortable and premium stay, offering modern amenities and a cozy retreat amidst nature.",
  },

  {
    id: 4,
    name: "Triangle AC Cabin with Mini Pool",
    category: "tent",
    slug: "triangle-ac-cabin-with-mini-pool",
    images: [
      {
        url: "/triangle-ac-cabin-with-mini-pool/IMG_8239.JPG.jpeg",
        imageClassName: "object-[20%_30%]",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/IMG_1967.JPG.jpeg",
        imageClassName: "object-cover",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/IMG_1966.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/IMG_1968.JPG.jpeg",
        imageClassName: "object-cover",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/IMG_1965.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/IMG_2835.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/IMG_3348.JPG.jpeg",
        imageClassName: "object-contain",
      },
      {
        url: "/triangle-ac-cabin-with-mini-pool/IMG_3946.JPG.jpeg",
        imageClassName: "object-contain",
      },
    ],
    price: 8000,
    beforePrice: 9000,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="text-sm font-semibold text-forest-700">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Private washroom 🚿 • Private mini pool 🏊‍♂️ • Wooden wall fencing •
            Private hammock • Private bonfire 🔥 • Private dining area 🍽️ •
            Private BBQ setup 🍖 • Private lawn 🌿 • AC ❄️ ✨
          </p>
        </div>

        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹6000{" "}
            <span className="text-slate-400">(₹5000 without meals)</span> <br />
            Saturday ₹6750{" "}
            <span className="text-slate-400">(₹5750 without meals)</span> <br />
            Sunday ₹6500{" "}
            <span className="text-slate-400">(₹5500 without meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–3 Guests (+₹2000)</span>
          <span>🕒 3 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "Ultra-luxury stay with a private jacuzzi, mini pool, and full premium privacy, and indulgent getaway.",
  },
  {
    id: 5,
    name: "Cocoon AC Tent",
    category: "tent",
    slug: "cocoon-ac-tent",
    images: [
      {
        url: "/cocoon-ac-tent/IMG_6329.PNG",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent/IMG_4517.jpg",
        imageClassName: "object-[10%_20%]",
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
    ],
    price: 6000,
    beforePrice: 7000,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="text-sm font-semibold text-forest-700">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Private washroom 🚿 • Wooden wall fencing 🪵 • Private hammock 🪢 •
            Private bonfire 🔥 • Private dining area 🍽️ • Private BBQ setup 🍖 •
            Private space 🌿 • AC ❄️ ✨
          </p>
        </div>

        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹6000{" "}
            <span className="text-slate-400">(₹5000 w/o meals)</span> <br />
            Saturday ₹7000{" "}
            <span className="text-slate-400">(₹6000 w/o meals)</span> <br />
            Sunday ₹6500{" "}
            <span className="text-slate-400">(₹5500 w/o meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–4 Guests (+₹2000)</span>
          <span>🕒 3 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "Premium cocoon-style AC tent with private setup for a stylish, comfortable nature stay.",
  },
  {
    id: 6,
    name: "Cocoon AC Tent with Mini Pool",
    category: "tent",
    slug: "cocoon-ac-tent-with-mini-pool",
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
    ],
    price: 6500,
    beforePrice: 7500,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="text-sm font-semibold text-forest-700">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Private washroom • Private mini pool • Wooden wall fencing • Private
            hammock • Private bonfire 🔥 • Private dining area • Private BBQ
            setup • Private garden • AC
          </p>
        </div>

        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹6500{" "}
            <span className="text-slate-400">(₹5500 w/o meals)</span> <br />
            Saturday ₹7500{" "}
            <span className="text-slate-400">(₹6500 w/o meals)</span> <br />
            Sunday ₹7000{" "}
            <span className="text-slate-400">(₹6000 w/o meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–3 Guests (+₹2000)</span>
          <span>🕒 3 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "Premium cocoon AC tent with a private mini pool, thoughtfully designed to offer the perfect blend of comfort, privacy, and a serene nature experience.",
  },
  {
    id: 7,
    name: "AC Pod with Outdoor Jacuzzi",
    category: "pod",
    slug: "ac-pod-with-outdoor-jacuzzi",
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
    ],
    price: 7000,
    beforePrice: 8000,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="text-sm font-semibold text-forest-700">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Private washroom 🚿 • Private 2-seater outdoor jacuzzi • Wooden wall
            fencing • Private hammock • Private bonfire • Private dining area •
            Private BBQ setup • Private garden • AC
          </p>
        </div>

        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹7000{" "}
            <span className="text-slate-400">(₹6000 w/o meals)</span> <br />
            Saturday ₹8000{" "}
            <span className="text-slate-400">(₹7000 w/o meals)</span> <br />
            Sunday ₹7500{" "}
            <span className="text-slate-400">(₹6500 w/o meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–4 Guests (+₹2000)</span>
          <span>🕒 3 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "Luxury AC pod featuring a private outdoor jacuzzi, thoughtfully designed with premium amenities for a comfortable and relaxing getaway experience.",
  },
  {
    id: 8,
    name: "Cocoon AC Tent with Jacuzzi & Mini Pool",
    category: "tent",
    slug: "cocoon-ac-tent-with-jacuzzi-and-mini-pool",
    images: [
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5114.JPG.jpeg",
        imageClassName: "object-center",
      },
      // {
      //   url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5308.HEIC",
      //   imageClassName: "object-center",
      // },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5127.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5332.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_5330.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_3161.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_3210.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_4491.JPG.jpeg",
        imageClassName: "object-center",
      },
      {
        url: "/cocoon-ac-tent-with-jacuzzi-mini-pool/IMG_0455.JPG.jpeg",
        imageClassName: "object-center",
      },
    ],
    price: 8000,
    beforePrice: 9000,
    guests: 2,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        {/* Stay Includes */}
        <div className="bg-emerald-50/60 p-3 rounded-xl space-y-2">
          <h4 className="text-sm font-semibold text-forest-700">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Private mini pool • Private Outdoor Jacuzzi • Private washroom •
            Jacuzzi & mini pool • Private Swing • Bonfire • Dining & BBQ • Large
            garden • AC
          </p>
        </div>

        {/* Food Options */}
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Options
          </h4>
          <p className="text-xs text-slate-600">{food}</p>
        </div>

        {/* Pricing */}
        <div className="bg-purple-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            💰 Pricing for 2 Person
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Weekdays ₹8000{" "}
            <span className="text-slate-400">(₹7000 w/o meals)</span> <br />
            Saturday ₹9000{" "}
            <span className="text-slate-400">(₹8000 w/o meals)</span> <br />
            Sunday ₹8500{" "}
            <span className="text-slate-400">(₹7500 w/o meals)</span>
          </p>
        </div>

        {/* Activities */}
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="text-sm font-semibold text-forest-700 mb-1">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">{activities}</p>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-700">
          <span>👥 2–4 Guests (+₹2000)</span>
          <span>🕒 3 PM – 11 AM</span>
        </div>
      </div>
    ),

    description:
      "Ultra-luxury cocoon AC tent with private jacuzzi, mini pool, and premium amenities for an exclusive stay.",
  },
];

const Accommodations = () => {
  return (
    <section id="accommodations" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Find Your Escape <br className="sm:hidden" />
            {/* <span className="text-moss"></span> */}
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
            Choose from our handpicked collection of luxury accommodations, each
            designed to blend comfort with nature&apos;s beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <div
              key={accommodation.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Carousel */}
              <div className="relative overflow-hidden h-64">
                <Carousel
                  className="w-full h-full"
                  opts={{ align: "start", loop: true }}
                >
                  <CarouselContent className="h-full">
                    {accommodation.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="h-full">
                        <div className="relative w-full h-full">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <Image
                            src={image.url}
                            width={0}
                            height={0}
                            unoptimized
                            loading="lazy"
                            alt={`${accommodation.name} - Image ${
                              imageIndex + 1
                            }`}
                            className={cn(
                              "w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700",
                              image.imageClassName,
                            )}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Carousel Navigation */}
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1  transition-opacity duration-300">
                    {accommodation.images.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                      />
                    ))}
                  </div>
                </Carousel>

                {/* Price Badge */}
                {/* <div className="absolute top-4 right-4 z-10">
                  {index !== 2 ? (
                    <Badge className="bg-moss text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      <>
                        ₹{accommodation.price}/person{" "}
                        <span className="text-xs text-white line-through">
                          ₹{accommodation.beforePrice}/per
                        </span>
                      </>
                    </Badge>
                  ) : (
                    <Badge>Booked</Badge>
                  )}
                </div> */}

                {/* Guests Badge */}
                {/* <div className="absolute top-4 left-4 z-10">
                  <Badge
                    variant="outline"
                    className="bg-white/90 text-[var(--forest-600)] border-[var(--forest-300)] backdrop-blur-sm"
                  >
                    {accommodation.guests} guests
                  </Badge>
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-[var(--forest-700)] mb-2">
                  <Link
                    href={`/accommodations/${accommodation.slug}`}
                    className="hover:underline transition-all"
                  >
                    {accommodation.name}
                  </Link>
                </h3>
                <p className="text-[var(--forest-600)] mb-4 text-sm">
                  {accommodation.description}
                </p>

                <>{accommodation.amenitiesHtml}</>

                {/* CTA Button */}
                <Link
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full  py-3 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer mb-2",
                  )}
                  href={`/accommodations/${accommodation.slug}`}
                >
                  More Details
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Button
                  className="w-full bg-moss hover:bg-moss/80 text-white py-3 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    document
                      .getElementById("bookings")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Check Availability
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <Button
            size="lg"
            className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg rounded-2xl font-semibold shadow-lg hover-lift"
          >
            See All Accommodations
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Accommodations;
