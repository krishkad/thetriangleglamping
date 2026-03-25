"use client";

import BookingSection from "@/components/bookingSection";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";

const defaultCamp = {
  name: "Triangle Tent",
  tag: "Couple Favorite",
  guests: "2–3 Guests • Riverside Stay",
  price: {
    weekdays: 3500,
    saturday: 4000,
    sunday: 4500,
  },
  description:
    "Escape into a stylish triangle tent overlooking a peaceful river, designed especially for couples seeking comfort, privacy, and a cozy nature experience.",
  stayIncludes: [
    "Outdoor 2-Seater Private Jacuzzi",
    "Private Mini Pool (Exclusive Use)",
    "Fully Air-Conditioned Tent",
    "Comfortable Premium Bedding",
    "Private Washroom",
    "Private Garden Area",
    "Private Swing Seating",
    "Private Dining Space",
    "Private Bonfire & BBQ Area",
    "Private Bluetooth Speaker",
    "Ambient Lighting & Charging Points",
  ],
  whyChoose: [
    "Cozy wooden cabin stay",
    "Private washroom & space",
    "Peaceful riverside setting",
    "Comfort meets nature",
    "Great for couples & families",
    "Budget-friendly upgrade",
    "Free parking",
  ],
  images: [
    { url: "/triangle-tent/triangle-tent-16.webp" },
    { url: "/triangle-tent/triangle-tent-11.webp" },
    { url: "/triangle-tent/triangle-tent-10.webp" },
    { url: "/triangle-tent/triangle-tent-9.webp" },
  ],
};

export default function CampDetail({ camp = defaultCamp }) {
  //   const [activeImage, setActiveImage] = useState(0);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12 mt-16">
        {/* HERO GALLERY */}
        <CampGallery camp={camp} />

        {/* TITLE + PRICE */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">{camp.name}</h1>
              <Badge className="bg-moss/10 text-moss">{camp.tag}</Badge>
            </div>
            <p className="text-gray-500 mt-1">👥 {camp.guests}</p>
          </div>

          <div className="text-right md:mr-48">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-moss">
              ₹{camp.price.weekdays}
            </p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {/* ABOUT */}
            <section>
              <h2 className="text-xl font-semibold mb-3">About this stay</h2>
              <p className="text-gray-600 leading-relaxed">
                {camp.description}
              </p>
            </section>

            {/* STAY INCLUDES */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                🏕 Your Stay Includes
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {camp.stayIncludes.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 border rounded-xl bg-white shadow-sm"
                  >
                    {item}
                  </div>
                ))}
                <div className="p-4 border rounded-xl bg-white shadow-sm">
                  Dedicate Caretaker for your service
                </div>
              </div>
            </section>

            {/* FOOD */}
            <section>
              <h2 className="text-xl font-semibold mb-4">🍽 Meals & Food</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Evening Snacks (Tea/Coffee + Gobi Manchurian)",
                  "BBQ (Paneer / Chicken)",
                  "Dinner (Veg & Non-Veg Options)",
                  "Morning Breakfast (Idli Sambar/Poha/Bread Omelette",
                  "Mineral Water",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 border rounded-xl bg-white shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* PRICING */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">💰 Pricing for 2 Person</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Weekdays */}
                <div className="p-4 rounded-2xl border bg-emerald-50/60 text-center">
                  <p className="text-sm text-gray-500">Weekdays</p>
                  <p className="text-2xl font-bold text-emerald-700">
                    ₹{camp.price.weekdays}
                  </p>
                  <p className="text-xs text-gray-500">Mon - Fri</p>
                </div>

                {/* Saturday (highlighted) */}
                <div className="p-4 rounded-2xl border-2 border-moss bg-moss/5 text-center scale-[1.03] shadow-md">
                  <p className="text-sm text-gray-500">Saturday</p>
                  <p className="text-2xl font-bold text-moss">
                    ₹{camp.price.saturday}
                  </p>
                  <p className="text-xs text-moss font-medium">Most Popular</p>
                </div>

                {/* Sunday */}
                <div className="p-4 rounded-2xl border bg-blue-50/60 text-center">
                  <p className="text-sm text-gray-500">Sunday</p>
                  <p className="text-2xl font-bold text-blue-700">
                    ₹{camp.price.sunday}
                  </p>
                  <p className="text-xs text-gray-500">Relaxed pricing</p>
                </div>
              </div>
            </section>

            {/* ACTIVITIES */}
            <section>
              <h2 className="text-xl font-semibold mb-4">🎉 Activities</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Bonfire & BBQ Evenings",
                  "Indoor & Outdoor Games",
                  "Romantic Music",
                  "Self guided Farm Tour",
                  "Private Theatre (extra)",
                  "Relax, celebrate, and enjoy peaceful riverside evenings",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 border rounded-xl bg-white shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* WHY COOOSE TRIANGLE TENT */}
            <section>
              <h2 className="text-xl font-semibold mb-4">
                🌿 Why Choose {camp.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {camp.whyChoose.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 border rounded-xl bg-white shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* STICKY BOOKING CARD */}
          <div className="sticky top-24 h-fit">
            {/* ADD-ONS */}
            <div className="mt-6 p-5 border rounded-2xl bg-white shadow-sm">
              <h3 className="font-semibold mb-3">✨ Add-ons</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🎬 Private Theatre ₹400/hr</li>
                <li>🎉 Decorations ₹500–₹1500</li>
                <li>🍽 Candle Light Dinner ₹300</li>
              </ul>
            </div>

            <div className="max-sm:hidden pt-4">
              <BookingSection
                camps={camp}
                className="shadow-sm border rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* POLICIES */}
        <section>
          <h2 className="text-xl font-semibold mb-4">👨‍👩‍👧‍👦 Guest Policy</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border bg-green-50 text-center">
              <p className="text-sm text-gray-500">Below 5 yrs</p>
              <p className="font-semibold text-green-700">Free Stay</p>
            </div>
            <div className="p-4 rounded-xl border bg-yellow-50 text-center">
              <p className="text-sm text-gray-500">5 – 12 yrs</p>
              <p className="font-semibold text-yellow-700">₹1000</p>
            </div>
            <div className="p-4 rounded-xl border bg-blue-50 text-center">
              <p className="text-sm text-gray-500">12 - 18 yrs</p>
              <p className="font-semibold text-blue-700">₹1750 (with meals)</p>
            </div>
            <div className="p-4 rounded-xl border bg-blue-50 text-center">
              <p className="text-sm text-gray-500">Above 18 yrs</p>
              <p className="font-semibold text-blue-700">
                ₹
                {camp.name === "Triangle Tent" ||
                camp.name === "Triangle Tent with Mini Pool" ||
                camp.name === "Triangle Cooler Cabin"
                  ? "1750"
                  : "2000"}{" "}
                (with meals)
              </p>
            </div>
          </div>
        </section>

        {/* ADDONS */}
        <section>
          <h2 className="text-xl font-semibold mb-4">✨ Extra Experiences</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl border bg-white shadow-sm space-y-3">
              <h3 className="font-semibold text-lg">🎬 Private AC Theatre</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Watch anything of your choice</li>
                <li>2-Seater Recliner</li>
                <li>150-inch Full HD Screen</li>
                <li>Dolby Atmos Sound</li>
              </ul>
              <div className="text-sm font-medium text-moss">
                ₹400 / hour (2 people) <br />
                <span className="text-gray-600">
                  ₹700 for 2 hours (2 people)
                </span>
                <br />
                <span className="text-gray-600">
                  ₹1000 for 3 hours (2 people)
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Extra: ₹100/person • Max 4
              </p>
            </div>

            <div className="p-5 rounded-2xl border bg-white shadow-sm space-y-3">
              <h3 className="font-semibold text-lg">💖 Decorations</h3>
              <p className="text-sm text-gray-600 space-y-1">
                Birthday / Anniversary / Bride To be / Date setup / Marry Me
                decoration charges.{" "}
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Inside Tent: ₹500</li>
                <li>Outdoor Frame: ₹1000</li>
                <li>Outdoor Ring: ₹1500</li>
                <li>Candle Dinner: ₹300</li>
              </ul>
              <p className="text-xs text-gray-500">
                Inclusions: Banner, Fairy Light, Love or heart foil and
                balloons. Table decoration candle light dinner setup:
                Inclusions: Flower petals, candles and fairy light.
              </p>
            </div>
          </div>
        </section>

        {/* ❌ Cancellation Policy */}
        <section>
          <h2 className="text-xl font-semibold mb-4">❌ Cancellation Policy</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "More than 72 hours before check-in: 90% refund",
              "Within 72 hours of check-in: No refund or postponement",
            ].map((item, i) => (
              <div key={i} className="p-4 border rounded-xl bg-white shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="w-full py-20 bg-secondary">
        <div className="max-w-2xl px-4 mx-auto">
          <BookingSection camps={camp} />
        </div>
      </section>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CampGallery({ camp }: any) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [api, setApi] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const isVideo = (url: string) => /\.(mp4|webm|ogg)$/i.test(url);

  // Sync active index with carousel
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Scroll to slide when thumbnail clicked
  const scrollTo = (index: number) => {
    if (api) api.scrollTo(index);
  };

  return (
    <div className="w-full space-y-4">
      {/* MAIN CAROUSEL */}
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {camp.images.map(
            (img: { url: string; imageClassName: string }, idx: number) => (
              <CarouselItem key={idx}>
                <div className="relative h-[520px] w-full rounded-3xl overflow-hidden">
                  {isVideo(img.url) ? (
                    <video
                      src={img.url}
                      className={`w-full h-full object-contain ${
                        img.imageClassName || ""
                      }`}
                      controls
                      playsInline
                    />
                  ) : (
                    <Image
                      src={img.url}
                      alt={camp.name}
                      fill
                      className={`object-contain transition duration-500 hover:scale-105 object-center ${
                        img.imageClassName || ""
                      }`}
                    />
                  )}
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* THUMBNAILS */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {camp.images.map((img: any, idx: number) => (
          <div
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`relative min-w-[100px] h-[70px] rounded-xl overflow-hidden cursor-pointer group border ${
              activeIndex === idx ? "ring-2 ring-white" : ""
            }`}
          >
            {isVideo(img.url) ? (
              <>
                <video
                  src={img.url}
                  className="w-full h-full object-cover group-hover:scale-110 transition"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                {/* Play icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="w-6 h-6 border-l-8 border-l-white border-y-6 border-y-transparent ml-1" />
                </div>
              </>
            ) : (
              <Image
                src={img.url}
                alt=""
                fill
                className="object-cover group-hover:scale-110 transition"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
