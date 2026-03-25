"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const defaultCamp = {
  name: "Triangle Tent",
  tag: "Couple Favorite",
  guests: 2,
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
    {
      url: "/theatre/IMG_4830.jpg.webp",
      imageClassName: "object-center",
    },
    {
      url: "/theatre/IMG_4841.jpg.webp",
      imageClassName: "object-center",
    },
    {
      url: "/theatre/IMG_4828.jpg.webp",
      imageClassName: "object-center",
    },
    {
      url: "/theatre/IMG_4840.jpg.webp",
      imageClassName: "object-center",
    },
    {
      url: "/theatre/IMG_4836.jpg.webp",
      imageClassName: "object-center",
    },

    {
      url: "/theatre/IMG_4835.jpg.webp",
      imageClassName: "object-center",
    },
    {
      url: "/theatre/IMG_4832.jpg.webp",
      imageClassName: "object-center",
    },
    {
      url: "/theatre/IMG_4915.jpg.webp",
      imageClassName: "object-center",
    },
    {
      url: "/theatre/IMG_7292.JPG.jpeg",
      imageClassName: "object-center",
    },
  ],
};

const phoneNumber = process.env.NEXT_PUBLIC_CALL_PHONE_NO;

export default function ACTheatre({ camp = defaultCamp }) {
  //   const [activeImage, setActiveImage] = useState(0);

  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in Triangle Glamping Private Theatre Experience. Could you please help me with details?";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 space-y-12 mt-16">
        {/* HERO GALLERY */}
        <CampGallery camp={camp} />

        <section>
          <h2 className="text-xl font-semibold mb-4">
            🎬 Private AC Theatre Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LEFT - EXPERIENCE */}
            <div className="p-6 rounded-2xl border bg-white shadow-sm space-y-4">
              <h3 className="text-lg font-semibold">
                🍿 Movie Date Under the Stars (Indoor AC Theatre)
              </h3>

              <p className="text-sm text-gray-600">
                Book our private AC theatre before, during, or after your stay
                for a perfect movie date or binge session on Amazon Prime.
              </p>

              <ul className="text-sm text-gray-700 space-y-2">
                <li>👉🏼 Watch anything of your choice 👀</li>
                <li>👉🏼 2-Seater Recliner 🛋️</li>
                <li>👉🏼 150 Inch Full HD Screen</li>
                <li>👉🏼 Dolby Atmos Sound System</li>
              </ul>
            </div>

            {/* RIGHT - PRICING + POLICY */}
            <div className="p-6 rounded-2xl border bg-white shadow-sm space-y-4">
              {/* PRICING */}
              <div>
                <h4 className="font-semibold mb-2">💰 Pricing</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <span>1 Hour (2 People)</span>
                    <span className="font-semibold text-moss">₹400</span>
                  </div>
                  <div className="flex justify-between">
                    <span>2 Hour (2 People)</span>
                    <span className="font-semibold text-moss">₹700</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3 Hours Package</span>
                    <span className="font-semibold text-moss">₹1000</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    + ₹100 per extra person (max 4 people)
                  </div>
                </div>
              </div>

              {/* ADD-ONS */}
              <div>
                <h4 className="font-semibold mb-2">🥤 Available on Order</h4>
                <p className="text-sm text-gray-600">
                  Snacks, Cold Drinks, Oxyrich Water Bottle
                </p>
              </div>

              {/* PAYMENT POLICY */}
              <div>
                <h4 className="font-semibold mb-2">💳 Payment Policy</h4>
                <p className="text-sm text-gray-600">
                  ₹400 advance required to block your slot. Remaining payable on
                  arrival based on hours booked.
                </p>
              </div>

              {/* RULE */}
              <div className="text-xs font-medium text-red-500 bg-red-50 p-3 rounded-xl">
                🚫 Alcohol, Smoking & Sheesha are strictly prohibited
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 p-6 rounded-2xl border bg-moss/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-lg">📍 Location</p>
              <p className="text-sm text-gray-600">
                BingeCinemas, The Triangle Glamping, Solu Village, Alandi Markal
                Road, Behind Dosti Hotel, Pune
              </p>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="bg-moss text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-moss/90 transition cursor-pointer"
            >
              Enquire Now
            </Button>
          </div>
        </section>
      </div>
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
