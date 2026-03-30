"use client";

import { format } from "date-fns";
import { CalendarDays, Users } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "./ui/badge";
import {
  candleLightDinnerAmount,
  inSideTentDecorationAmount,
  outDoorRingDecorationAmount,
  outDoorTentDecorationAmount,
} from "@/constant/data";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { useId } from "react";
import { cn } from "@/lib/utils";

const phoneNumber = process.env.NEXT_PUBLIC_CALL_PHONE_NO;

/* ================= TYPES ================= */

type Camp = {
  name: string;
  price: string;
  amount: number;
  saturday_amount: number;
  sunday_amount: number;
  savings?: string;
  capacity: number;
  tag?: string;
};

type PackageGroup = {
  category: string;
  camps: Camp[];
};

/* ================= DATA ================= */

const packages: PackageGroup[] = [
  {
    category: "Triangle Stay Options",
    camps: [
      {
        name: "Triangle Tent",
        price: "₹3500",
        amount: 3500,
        saturday_amount: 4250,
        sunday_amount: 4000,
        savings: "₹200",
        capacity: 2,
      },
      {
        name: "Triangle Tent with Mini Pool",
        price: "₹4000",
        amount: 4000,
        saturday_amount: 4750,
        sunday_amount: 4500,
        savings: "₹801",
        capacity: 2,
        tag: "Best Seller",
      },
      {
        name: "Triangle Cooler Cabin",
        price: "₹4500",
        amount: 4500,
        saturday_amount: 5500,
        sunday_amount: 5000,
        savings: "₹1000",
        capacity: 2,
      },
      {
        name: "Triangle AC Cabin",
        price: "₹4750",
        amount: 4750,
        saturday_amount: 5750,
        sunday_amount: 5250,
        savings: "₹1000",
        capacity: 2,
        tag: "Popular",
      },
      {
        name: "Triangle AC Cabin with Mini Pool",
        price: "₹6000",
        amount: 6000,
        saturday_amount: 6750,
        sunday_amount: 6500,
        savings: "₹1000",
        capacity: 2,
        tag: "Best Seller",
      },
    ],
  },
  {
    category: "Cocoon Stays",
    camps: [
      {
        name: "Cocoon AC Tent",
        price: "₹6000",
        amount: 6000,
        saturday_amount: 7000,
        sunday_amount: 6500,
        capacity: 2,
        tag: "Luxury",
      },
      {
        name: "Cocoon AC Tent with Mini Pool",
        price: "₹6500",
        amount: 6500,
        saturday_amount: 7500,
        sunday_amount: 7000,
        capacity: 2,
        tag: "Luxury",
      },
      {
        name: "Cocoon AC Tent with Jacuzzi & Mini Pool",
        price: "₹8000",
        amount: 8000,
        saturday_amount: 9000,
        sunday_amount: 8500,
        capacity: 2,
        tag: "Luxury",
      },
    ],
  },
  {
    category: "Pod Stay",
    camps: [
      {
        name: "AC Pod with Outdoor Jacuzzi",
        price: "₹7000",
        amount: 7000,
        saturday_amount: 8000,
        sunday_amount: 7500,
        capacity: 2,
        tag: "Luxury",
      },
    ],
  },
];

/* ================= COMPONENT ================= */

const BookingWidget = () => {
  const id = useId();
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const [guests, setGuests] = useState(2);
  const [kids, setKids] = useState(0);
  const [kids5To12, setKids5to12] = useState(0);
  const [kidsAbove12, setKidsAbove12] = useState(0);

  const [candleLightDinner, setCandleLightDinner] = useState(false);
  const [meal, setMeal] = useState(true);
  const [theatre, setTheatre] = useState(false);
  const [inSideTentDecoration, setInSideTentDecoration] = useState(false);
  const [outDoorTentDecoration, setOutDoorTentDecoration] = useState(false);
  const [outDoorRingDecoration, setOutDoorRingDecoration] = useState(false);

  const [selectedPackage, setSelectedPackage] = useState<Camp>(
    packages[0].camps[0],
  );

  const [vegFood, setVegFood] = useState(false);
  const [pureVegFood, setPureVegFood] = useState(false);
  const [jainFood, setJainFood] = useState(false);
  const [nonVegFood, setNonVegFood] = useState(false);

  // const calculatedAmount = selectedPackage.amount;

  /* ================= SUBMIT ================= */

  /* ================= UI ================= */

  const day = checkIn ? format(checkIn, "EEEE") : null;

  const adults_amount = !day
    ? selectedPackage.amount
    : day === "Sunday"
      ? selectedPackage.sunday_amount
      : day === "Saturday"
        ? selectedPackage.saturday_amount
        : selectedPackage.amount;

  const extraGuestPrice =
    selectedPackage.name === "Triangle Tent" ||
    selectedPackage.name === "Triangle Tent with Mini Pool" ||
    selectedPackage.name === "Triangle Cooler Cabin"
      ? 1750
      : 2000;

  const total_guest_price =
    adults_amount +
    kids5To12 * 1000 +
    kidsAbove12 * 1750 +
    (guests - 2) * extraGuestPrice;

  const price =
    total_guest_price +
    (inSideTentDecoration ? inSideTentDecorationAmount : 0) +
    (outDoorTentDecoration ? outDoorTentDecorationAmount : 0) +
    (outDoorRingDecoration ? outDoorRingDecorationAmount : 0) +
    (candleLightDinner ? candleLightDinnerAmount : 0) -
    (!meal ? 1000 : 0) +
    (theatre ? 700 : 0);

  const disabled = !name || !lname || !email || !phone || !checkIn || !checkOut;

  const send_whatsapp = async () => {
    try {
      const priceBreakdown = [
        `Base Price: ₹${total_guest_price}`,
        kids5To12 && `Kids (5-12): ₹${kids5To12 * 1000}`,
        kidsAbove12 && `Kids (above 12): ₹${kidsAbove12 * 1750}`,
      ]
        .filter(Boolean)
        .join("\n");

      const addOns = [
        !meal && `• No Meal: -₹${candleLightDinnerAmount}`,
        candleLightDinner &&
          `• Candle Light Dinner: ₹${candleLightDinnerAmount}`,
        inSideTentDecoration &&
          `• Inside Tent Decoration: ₹${inSideTentDecorationAmount}`,
        outDoorTentDecoration &&
          `• Outdoor Frame Decoration: ₹${outDoorTentDecorationAmount}`,
        outDoorRingDecoration &&
          `• Outdoor Ring Decoration: ₹${outDoorRingDecorationAmount}`,
        theatre && `• Private Theatre 2hrs for 2 Person: ₹700`,
      ]
        .filter(Boolean)
        .join("\n");

      const foodPreferences = [
        vegFood && "• Veg Food",
        pureVegFood && "• Pure Veg Food",
        jainFood && "• Jain Food",
        nonVegFood && "• Non-Veg Food",
      ]
        .filter(Boolean)
        .join("\n");

      const message_text = `
🌿 Availability Request - The Triangle Glamping

👤 Guest Details
Name: ${name} ${lname}
Phone: ${phone}
Email: ${email}

📅 Stay Dates
Check-in: ${checkIn ? format(checkIn, "dd MMM yyyy") : "-"}
Check-out: ${checkOut ? format(checkOut, "dd MMM yyyy") : "-"}

👨‍👩‍👧 Guests
Adults: ${guests}
Kids (below 5): ${kids}
Kids (5-12): ${kids5To12}
Kids (above 12): ${kidsAbove12}

🍽️ Food Preference
${foodPreferences || "Not specified"}

🏕️ Selected Package
Accommodations: ${selectedPackage.name}

💸 Price Breakdown
${priceBreakdown}

✨ Add-ons / Decorations
${addOns || "None"}

💰 Total Amount: ₹${price}

✨ Looking forward to hosting you!
`;

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message_text)}`,
        "_blank",
      );

      // reset
      setName("");
      setLname("");
      setEmail("");
      setPhone("");
      setGuests(2);
      setKids(0);
      setSelectedPackage(packages[0].camps[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const maxCapacity =
    selectedPackage.name === "AC Pod with Outdoor Jacuzzi" ||
    selectedPackage.name === "Cocoon AC Tent with Jacuzzi & Mini Pool"
      ? 4
      : 3;
  return (
    <section className="py-20 px-6 bg-secondary" id="bookings">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* LEFT - CAMPS */}
        <div className="space-y-8">
          {packages.map((group, i) => (
            <div key={i}>
              <h3 className="text-xl font-bold mb-4">{group.category}</h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                {group.camps.map((camp, idx) => (
                  <Card
                    key={idx}
                    onClick={() => setSelectedPackage(camp)}
                    className={`group relative cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden py-0
    ${
      selectedPackage.name === camp.name
        ? "border-moss shadow-lg shadow-moss/20 scale-[1.02] bg-white"
        : "border-gray-200 hover:border-moss/40 hover:shadow-md hover:scale-[1.01] bg-white"
    }
  `}
                  >
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-moss/5 to-transparent opacity-0 group-hover:opacity-100 transition" />

                    <CardContent className="relative p-5 space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <h4 className="font-semibold text-base text-gray-800 leading-tight">
                          {camp.name}
                        </h4>

                        {camp.tag && (
                          <Badge className="bg-moss/10 text-moss border border-moss/20 text-xs px-2 py-0.5">
                            {camp.tag}
                          </Badge>
                        )}
                      </div>

                      {/* Capacity */}
                      <p className="text-sm text-gray-500">
                        👥 {camp.capacity} Guests
                      </p>

                      {/* Pricing Section */}
                      <div className="space-y-2">
                        {/* Weekday */}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Weekdays</span>
                          <span className="font-semibold text-gray-800">
                            ₹{camp.amount}
                          </span>
                        </div>

                        {/* Saturday */}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Saturday</span>
                          <span className="font-semibold text-gray-800">
                            ₹{camp.saturday_amount}
                          </span>
                        </div>

                        {/* Sunday */}
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Sunday</span>
                          <span className="font-semibold text-gray-800">
                            ₹{camp.sunday_amount}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="border-t pt-3 flex items-center justify-between">
                        {/* Highlight Price */}
                        <div>
                          <span className="text-lg font-bold text-gray-900">
                            {camp.price}
                          </span>
                          <p className="text-xs text-gray-400">
                            starting price
                          </p>
                        </div>

                        {/* Highlight Price */}
                        <div>
                          <span className="text-xs text-gray-700">
                            {camp.name === "Triangle Tent" ||
                            camp.name === "Triangle Tent with Mini Pool" ||
                            camp.name === "Triangle Cooler Cabin"
                              ? "4 PM - 11 AM"
                              : "3 PM - 11 AM"}
                          </span>
                          {/* <p className="text-xs text-gray-400">
                            starting price
                          </p> */}
                        </div>
                      </div>

                      {/* Selected State */}
                      {selectedPackage.name === camp.name && (
                        <div className="flex items-center justify-between pt-2 border-t">
                          <span className="text-xs font-medium text-moss">
                            ✓ Selected
                          </span>

                          <div className="w-5 h-5 rounded-full bg-moss flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - FORM */}
        <Card className="relative rounded-3xl shadow-2xl border-0 bg-white overflow-hidden h-max sm:sticky sm:top-24 py-0">
          <Badge className="absolute top-1.5 right-6 bg-yellow-600">
            Fixed Rates
          </Badge>
          {/* HEADER */}
          <CardHeader className="text-center pb-4 pt-6">
            <CardTitle className="text-2xl font-playfair font-bold text-stone">
              Reserve Your Escape
            </CardTitle>
            <p className="text-sm text-stone/70">
              Check Availality & we’ll confirm within minutes, select your
              preferred stay
            </p>
          </CardHeader>

          <CardContent className="p-6 pt-2 space-y-6">
            {/* NAME FIELDS */}
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="First Name (required)"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Last Name (required)"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            {/* CONTACT */}
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Email (required)"
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Phone (required)"
                type="tel"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* DATES */}
            <div className="grid grid-cols-2 gap-4">
              {/* CHECK-IN */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start rounded-2xl h-12 border-2 hover:border-moss"
                  >
                    <CalendarDays className="mr-2 h-4 w-4 text-moss" />
                    {checkIn ? format(checkIn, "MMM dd yyyy") : "Check-in *"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-max">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date: any) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0); // set to start of today
                      return date < today;
                    }}
                  />
                </PopoverContent>
              </Popover>

              {/* CHECK-OUT */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start rounded-2xl h-12 border-2 hover:border-moss"
                  >
                    <CalendarDays className="mr-2 h-4 w-4 text-moss" />
                    {checkOut ? format(checkOut, "MMM dd yyyy") : "Check-out *"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-max">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date: any) => {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0); // set to start of today
                      return date < today;
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* GUESTS */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-stone">
                Guests *
              </label>

              <div className="flex items-center justify-between border-2 border-gray-200 rounded-2xl px-4 py-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-moss" />
                  <span className="font-medium">{guests} Guests</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                  >
                    -
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10"
                    onClick={() => setGuests(Math.min(maxCapacity, guests + 1))}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between border-2 border-gray-200 rounded-2xl px-4 py-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-moss shrink-0" />
                  <span className="font-medium">
                    {kids} Kids{" "}
                    <span className="text-xs text-gray-500">bellow 5 yrs</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10"
                    onClick={() => setKids(Math.max(0, kids - 1))}
                  >
                    -
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10"
                    onClick={() => setKids(kids + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between border-2 border-gray-200 rounded-2xl px-4 py-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-moss shrink-0" />
                  <span className="font-medium">
                    {kids5To12} Kids{" "}
                    <span className="text-xs text-gray-500">5 - 12 yrs</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10"
                    onClick={() => setKids5to12(Math.max(0, kids5To12 - 1))}
                  >
                    -
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10"
                    onClick={() => setKids5to12(kids5To12 + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between border-2 border-gray-200 rounded-2xl px-4 py-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-moss shrink-0" />
                  <span className="font-medium">
                    {kidsAbove12} Kids{" "}
                    <span className="text-xs text-gray-500">above 12 yrs</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10"
                    onClick={() => setKidsAbove12(Math.max(0, kidsAbove12 - 1))}
                  >
                    -
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full w-10 h-10"
                    onClick={() => setKidsAbove12(kidsAbove12 + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Food Preference */}
            <div className="w-full space-y-3">
              <Label htmlFor={`${id}-veg`}>Food Preference</Label>

              <div className="w-full flex items-center justify-start gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${id}-veg`}
                    checked={vegFood}
                    onCheckedChange={(checked) => setVegFood(!!checked)}
                    className="
                data-[state=checked]:bg-[#4caf50]
                data-[state=checked]:border-[#4caf50]
                data-[state=checked]:text-white
              "
                  />
                  <Label htmlFor={`${id}-veg`}>Veg Food</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${id}-pure-veg`}
                    checked={pureVegFood}
                    onCheckedChange={(checked) => setPureVegFood(!!checked)}
                    className="
                data-[state=checked]:bg-[#4caf50]
                data-[state=checked]:border-[#4caf50]
                data-[state=checked]:text-white
              "
                  />
                  <Label htmlFor={`${id}-pure-veg`}>Pure Veg</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${id}-jain-veg`}
                    checked={jainFood}
                    onCheckedChange={(checked) => setJainFood(!!checked)}
                    className="
                data-[state=checked]:bg-[#4caf50]
                data-[state=checked]:border-[#4caf50]
                data-[state=checked]:text-white
              "
                  />
                  <Label htmlFor={`${id}-jain-veg`}>Jain Food</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id={`${id}-non-veg`}
                    checked={nonVegFood}
                    onCheckedChange={(checked) => setNonVegFood(!!checked)}
                    className="
                data-[state=checked]:bg-[#4caf50]
                data-[state=checked]:border-[#4caf50]
                data-[state=checked]:text-white
              "
                  />
                  <Label htmlFor={`${id}-non-veg`}>Non Veg</Label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* Meal */}
              <div
                onClick={() => setMeal((prev) => !prev)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition",
                  meal
                    ? "border-moss bg-moss/10"
                    : "border-gray-200 hover:border-moss/50",
                )}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={`${id}-meal`}
                    checked={meal}
                    onCheckedChange={(checked) => setMeal(!!checked)}
                    className="
    data-[state=checked]:bg-[#4caf50]
    data-[state=checked]:border-[#4caf50]
    data-[state=checked]:text-white
  "
                  />
                  <Label htmlFor={`${id}-candle`}>Meal (Included)</Label>
                </div>
              </div>
              {/* Candle */}
              <div
                onClick={() => setCandleLightDinner((prev) => !prev)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition",
                  candleLightDinner
                    ? "border-moss bg-moss/10"
                    : "border-gray-200 hover:border-moss/50",
                )}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={`${id}-candle`}
                    checked={candleLightDinner}
                    onCheckedChange={(checked) =>
                      setCandleLightDinner(!!checked)
                    }
                    className="
    data-[state=checked]:bg-[#4caf50]
    data-[state=checked]:border-[#4caf50]
    data-[state=checked]:text-white
  "
                  />
                  <Label htmlFor={`${id}-candle`}>
                    Candle Light Dinner (₹300)
                  </Label>
                </div>
              </div>

              {/* Inside Tent */}
              <div
                onClick={() => setInSideTentDecoration((prev) => !prev)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition",
                  inSideTentDecoration
                    ? "border-moss bg-moss/10"
                    : "border-gray-200 hover:border-moss/50",
                )}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={`${id}-inside`}
                    checked={inSideTentDecoration}
                    onCheckedChange={(checked) =>
                      setInSideTentDecoration(!!checked)
                    }
                    className="
    data-[state=checked]:bg-[#4caf50]
    data-[state=checked]:border-[#4caf50]
    data-[state=checked]:text-white
  "
                  />
                  <Label htmlFor={`${id}-inside`}>
                    Inside Tent Decoration (₹500)
                  </Label>
                </div>
              </div>

              {/* Outdoor Tent */}
              <div
                onClick={() => setOutDoorTentDecoration((prev) => !prev)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition",
                  outDoorTentDecoration
                    ? "border-moss bg-moss/10"
                    : "border-gray-200 hover:border-moss/50",
                )}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={`${id}-outdoorTent`}
                    checked={outDoorTentDecoration}
                    onCheckedChange={(checked) =>
                      setOutDoorTentDecoration(!!checked)
                    }
                    className="
    data-[state=checked]:bg-[#4caf50]
    data-[state=checked]:border-[#4caf50]
    data-[state=checked]:text-white
  "
                  />
                  <Label htmlFor={`${id}-outdoorTent`}>
                    Outdoor Tent Decoration (₹1000)
                  </Label>
                </div>
              </div>

              {/* Ring */}
              <div
                onClick={() => setOutDoorRingDecoration((prev) => !prev)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition",
                  outDoorRingDecoration
                    ? "border-moss bg-moss/10"
                    : "border-gray-200 hover:border-moss/50",
                )}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={`${id}-ring`}
                    checked={outDoorRingDecoration}
                    onCheckedChange={(checked) =>
                      setOutDoorRingDecoration(!!checked)
                    }
                    className="
    data-[state=checked]:bg-[#4caf50]
    data-[state=checked]:border-[#4caf50]
    data-[state=checked]:text-white
  "
                  />
                  <Label htmlFor={`${id}-ring`}>
                    Outdoor Ring Decoration (₹1500)
                  </Label>
                </div>
              </div>

              {/* Theature */}
              <div
                onClick={() => setTheatre((prev) => !prev)}
                className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition",
                  theatre
                    ? "border-moss bg-moss/10"
                    : "border-gray-200 hover:border-moss/50",
                )}
              >
                <div className="flex items-center space-x-3">
                  <Checkbox
                    id={`${id}-ring`}
                    checked={theatre}
                    onCheckedChange={(checked) => setTheatre(!!checked)}
                    className="
    data-[state=checked]:bg-[#4caf50]
    data-[state=checked]:border-[#4caf50]
    data-[state=checked]:text-white
  "
                  />
                  <Label htmlFor={`${id}-ring`}>
                    Private Theatre 2hrs for 2 Person (₹700)
                  </Label>
                </div>
              </div>
            </div>

            {/* PRICE SUMMARY */}
            <div className="bg-gradient-to-r from-moss/10 to-skyblue/10 rounded-2xl p-5 space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">{selectedPackage.name}</span>
                <span className="font-semibold text-moss">₹{price}</span>
              </div>

              {!!kids5To12 && (
                <div className="flex justify-between">
                  <span className="font-medium">
                    {kids5To12} - Kids (5 - 12 yrs)
                  </span>
                  <span className="font-semibold text-moss">
                    ₹{kids5To12 * 1000}
                  </span>
                </div>
              )}

              {!!kidsAbove12 && (
                <div className="flex justify-between">
                  <span className="font-medium">
                    {kidsAbove12} - Kids (above 12 yrs)
                  </span>
                  <span className="font-semibold text-moss">
                    ₹{kidsAbove12 * 1750}
                  </span>
                </div>
              )}

              {/* Candle Light Dinner */}
              {!!candleLightDinner && (
                <div className="flex justify-between">
                  <span className="font-medium">Candle Light Dinner</span>
                  <span className="font-semibold text-moss">
                    ₹{candleLightDinnerAmount}
                  </span>
                </div>
              )}

              {/* Inside Tent Decoration */}
              {!!inSideTentDecoration && (
                <div className="flex justify-between">
                  <span className="font-medium">Inside Tent Decoration</span>
                  <span className="font-semibold text-moss">
                    ₹{inSideTentDecorationAmount}
                  </span>
                </div>
              )}

              {/* Outdoor Tent Decoration */}
              {!!outDoorTentDecoration && (
                <div className="flex justify-between">
                  <span className="font-medium">Outdoor Frame Decoration</span>
                  <span className="font-semibold text-moss">
                    ₹{outDoorTentDecorationAmount}
                  </span>
                </div>
              )}

              {/* Outdoor Ring Decoration */}
              {!!outDoorRingDecoration && (
                <div className="flex justify-between">
                  <span className="font-medium">Outdoor Ring Decoration</span>
                  <span className="font-semibold text-moss">
                    ₹{outDoorRingDecorationAmount}
                  </span>
                </div>
              )}

              {/* Private theature */}
              {theatre && (
                <div className="flex justify-between">
                  <span className="font-medium">
                    Private Theatre{" "}
                    <span className="text-xs">for 2 Person (2 hrs)</span>
                  </span>
                  <span className="font-semibold text-moss">₹{700}</span>
                </div>
              )}

              <div className="border-t pt-3 flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="text-2xl font-bold text-moss">₹{price}</span>
              </div>
            </div>

            {/* CTA */}
            <Button
              className="w-full bg-moss hover:bg-moss/90 text-white text-lg py-4 rounded-2xl shadow-lg font-bold"
              onClick={send_whatsapp}
              disabled={disabled}
            >
              {`Check Availability – ₹${price}`}
            </Button>

            <div className="w-full space-y-2">
              <p className="text-xs text-center text-stone/60">
                We’ll try to respond you within 30 minutes
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BookingWidget;
