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
            <p className="text-gray-500 mt-1">👥 2–3 Guests • Riverside Stay</p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Starting from</p>
            <p className="text-2xl font-bold text-moss">₹3500</p>
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
                {[
                  "Comfortable Mattress & Bedding",
                  "Fresh Blanket & Pillows",
                  "Fan, Lights & Charging",
                  "Table Fan & Lighting",
                  "Mobile Charging Point",
                  "Private Lawn & Riverside Bench",
                  "Private Lawn Area",
                  "Riverside Sitting Bench",
                  "Private Bonfire & BBQ",
                  "Private Bonfire & BBQ Setup",
                  "Dining Area",
                  "Private Dining Area",
                  "Enjoy complete privacy with beautiful riverside vibes",
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
              <h2 className="text-xl font-semibold">💰 Pricing</h2>

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
                  "Farm Exploration",
                  "Private Theatre (extra)",
                  "Free Parking",
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
                {[
                  "Peaceful riverside atmosphere",
                  "Private spaces (no crowd disturbance)",
                  "Ideal for couples & celebrations",
                  "Homely food experience",
                  "Budget-friendly romantic stay",
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
          </div>

          {/* STICKY BOOKING CARD */}
          <div className="sticky top-24 h-fit">
            {/* <Card className="rounded-2xl shadow-xl border">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">₹3500</p>
                <span className="text-sm text-gray-500">/ night</span>
              </div>

              <div className="border rounded-xl p-3 text-sm text-gray-500">
                Select dates to see final price
              </div>

              <Button className="w-full bg-moss text-white text-base py-2 rounded-xl hover:scale-[1.02] transition">
                Reserve Now
              </Button>

              <p className="text-xs text-gray-400 text-center">
                You won’t be charged yet
              </p>
            </CardContent>
          </Card> */}

            {/* ADD-ONS */}
            <div className="mt-6 p-5 border rounded-2xl bg-white shadow-sm">
              <h3 className="font-semibold mb-3">✨ Add-ons</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>🎬 Private Theatre ₹400/hr</li>
                <li>🎉 Decorations ₹500–₹1500</li>
                <li>🍽 Candle Light Dinner ₹300</li>
              </ul>
            </div>
          </div>
        </div>
        {/* POLICIES */}
        <section>
          <h2 className="text-xl font-semibold mb-4">👨‍👩‍👧‍👦 Guest Policy</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border bg-green-50 text-center">
              <p className="text-sm text-gray-500">Below 5 yrs</p>
              <p className="font-semibold text-green-700">Free</p>
            </div>
            <div className="p-4 rounded-xl border bg-yellow-50 text-center">
              <p className="text-sm text-gray-500">5 – 12 yrs</p>
              <p className="font-semibold text-yellow-700">₹1000</p>
            </div>
            <div className="p-4 rounded-xl border bg-blue-50 text-center">
              <p className="text-sm text-gray-500">Above 12 yrs</p>
              <p className="font-semibold text-blue-700">₹1750 (with meals)</p>
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
                ₹400 / hour (2 people)
              </div>
              <p className="text-xs text-gray-500">
                Extra: ₹200/person • Max 4
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
                <li>Outdoor: ₹1000</li>
                <li>Premium Ring: ₹1500</li>
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

        {/* FULL INCLUSIONS */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            📦 Complete Stay Inclusions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Luxury Tent + Bonfire + BBQ",
              "Indoor & Outdoor Games",
              "Tea & Snacks",
              "Unlimited Dinner + BBQ",
              "Breakfast",
              "Mattress, Blanket & Pillows",
              "Separate Washrooms",
              "25 Acre Farm Access",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border bg-white shadow-sm text-sm text-gray-600"
              >
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
  return (
    <div className="w-full space-y-4">
      {/* MAIN CAROUSEL */}
      <Carousel className="w-full">
        <CarouselContent>
          {camp.images.map(
            (img: { url: string; imageClassName: string }, idx: number) => (
              <CarouselItem key={idx}>
                <div className="relative h-[520px] w-full rounded-3xl overflow-hidden">
                  <Image
                    src={img.url}
                    alt={camp.name}
                    fill
                    className={`object-cover transition duration-500 hover:scale-105 ${img.imageClassName || ""}`}
                  />
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>

        {/* NAV BUTTONS */}
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>

      {/* THUMBNAILS */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {camp.images.map((img: { url: string }, idx: number) => (
          <div
            key={idx}
            className="relative min-w-[100px] h-[70px] rounded-xl overflow-hidden cursor-pointer group border"
          >
            <Image
              src={img.url}
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
