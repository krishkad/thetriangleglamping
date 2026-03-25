"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useId } from "react";
import {
  candleLightDinnerAmount,
  inSideTentDecorationAmount,
  outDoorRingDecorationAmount,
  outDoorTentDecorationAmount,
} from "@/constant/data";

const phoneNumber = process.env.NEXT_PUBLIC_CALL_PHONE_NO;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookingSection = ({
  camps,
  className,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  camps: any;
  className?: string;
}) => {
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

  const [meal, setMeal] = useState(true);
  const [theatre, setTheatre] = useState(false);
  const [candleLightDinner, setCandleLightDinner] = useState(false);
  const [inSideTentDecoration, setInSideTentDecoration] = useState(false);
  const [outDoorTentDecoration, setOutDoorTentDecoration] = useState(false);
  const [outDoorRingDecoration, setOutDoorRingDecoration] = useState(false);

  const day = checkIn ? format(checkIn, "EEEE") : null;

  const adults_amount = !day
    ? camps.price.weekdays
    : day === "Sunday"
      ? camps.price.sunday
      : day === "Saturday"
        ? camps.price.saturday
        : camps.price.weekdays;

  const total_guest_price =
    adults_amount + kids5To12 * 1000 + kidsAbove12 * 1750;

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
      const message_text = `
🌿 Availability Request - The Triangle Glamping

👤 Guest Details
Name: ${name} ${lname}
Phone: ${phone}
Email: ${email}

📅 Stay Details
Check-in: ${checkIn ? format(checkIn, "dd MMM yyyy") : "-"}
Check-out: ${checkOut ? format(checkOut, "dd MMM yyyy") : "-"}

👨‍👩‍👧 Guests
Adults: ${guests}
Kids (below 5): ${kids}
Kids (5-12): ${kids5To12}
Kids (above 12): ${kidsAbove12}

🏕️ Selected Package
Camp: ${camps.name}
Capacity: ${camps.capacity}

💸 Price Breakdown
Base Price: ₹${total_guest_price}

${kids5To12 ? `Kids (5-12): ₹${kids5To12 * 1000}` : ""}
${kidsAbove12 ? `Kids (above 12): ₹${kidsAbove12 * 1750}` : ""}

✨ Add-ons / Decorations
${candleLightDinner ? `• Candle Light Dinner: ₹${candleLightDinnerAmount}` : ""}
${inSideTentDecoration ? `• Inside Tent Decoration: ₹${inSideTentDecorationAmount}` : ""}
${outDoorTentDecoration ? `• Outdoor Tent Decoration: ₹${outDoorTentDecorationAmount}` : ""}
${outDoorRingDecoration ? `• Outdoor Ring Decoration: ₹${outDoorRingDecorationAmount}` : ""}

💰 Total Amount
₹${price}

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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card
      className={cn(
        "rounded-3xl shadow-2xl border-0 bg-white overflow-hidden h-max py-0",
        className,
      )}
    >
      {/* HEADER */}
      <CardHeader className="text-center pb-4 pt-6">
        <CardTitle className="text-lg sm:text-2xl font-playfair font-bold text-stone">
          Reserve Your {camps.name}
        </CardTitle>
        <p className="text-sm text-stone/70">
          Check Availability & we’ll confirm within minutes
        </p>
      </CardHeader>

      <CardContent className="p-6 pt-2 space-y-6">
        {/* NAME FIELDS */}
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="First Name (required)"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Last Name (required)"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        {/* CONTACT */}
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Email (required)"
            type="email"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone (required)"
            type="tel"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
            value={phone}
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
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* GUESTS */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-stone">Guests</label>

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
                onClick={() => setGuests(guests + 1)}
              >
                +
              </Button>
            </div>
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

        <div className="space-y-4">
          {/* meal */}
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
              <Label htmlFor={`${id}-meal`}>Meal (Included)</Label>
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
                onCheckedChange={(checked) => setCandleLightDinner(!!checked)}
                className="
    data-[state=checked]:bg-[#4caf50]
    data-[state=checked]:border-[#4caf50]
    data-[state=checked]:text-white
  "
              />
              <Label htmlFor={`${id}-candle`}>Candle Light Dinner (₹300)</Label>
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

          {/* Theatre */}
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
            <span className="font-medium">
              {camps?.name ? camps.name : "Tent"}
            </span>
            <span className="font-semibold text-moss">
              {price ? price : "3000"}
            </span>
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
                Private Theatre <span className="text-xs">for 2 Person (2 hrs)</span>
              </span>
              <span className="font-semibold text-moss">₹{700}</span>
            </div>
          )}
          {/* {selectedPackage.savings && (
                <div className="flex justify-between text-sm">
                  <span>You Save</span>
                  <span className="text-green-600 font-semibold">
                    {selectedPackage.savings} / person
                  </span>
                </div>
              )} */}

          <div className="border-t pt-3 flex justify-between items-center">
            <span className="font-semibold">Total</span>
            <span className="text-2xl font-bold text-moss">
              ₹{price ? price : "3000"}
            </span>
          </div>

          {/* SAVINGS BANNER */}
          {/* {selectedPackage.savings && (
                <div className="bg-green-100 text-green-700 text-xs text-center p-2 rounded-md font-semibold">
                  🎉 You saved ₹
                  {parseInt(selectedPackage.savings.replace("₹", "")) * guests}
                </div>
              )} */}
        </div>

        {/* CTA */}
        <Button
          className="w-full bg-moss hover:bg-moss/90 text-white text-lg py-4 rounded-2xl shadow-lg font-bold"
          onClick={send_whatsapp}
          disabled={disabled}
        >
          {/* {sending ? "Processing..." : `Book Now – ₹${calculatedAmount}`} */}
          Check Availability
        </Button>

        <p className="text-xs text-center text-stone/60">
          We’ll try to respond you within 30 minutes
        </p>
      </CardContent>
    </Card>
  );
};

export default BookingSection;
