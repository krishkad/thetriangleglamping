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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookingSection = ({ camps }: any) => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const [guests, setGuests] = useState(2);
//   const [kids, setKids] = useState(0);

  return (
    <Card className="rounded-3xl shadow-2xl border-0 bg-white overflow-hidden h-max py-0">
      {/* HEADER */}
      <CardHeader className="text-center pb-4 pt-6">
        <CardTitle className="text-lg sm:text-2xl font-playfair font-bold text-stone">
          Reserve Your {camps.name}
        </CardTitle>
        <p className="text-sm text-stone/70">
          Book now & we’ll confirm within minutes
        </p>
      </CardHeader>

      <CardContent className="p-6 pt-2 space-y-6">
        {/* NAME FIELDS */}
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="First Name"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Last Name"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>

        {/* CONTACT */}
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Email"
            type="email"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Phone"
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
                {checkIn ? format(checkIn, "MMM dd yyyy") : "Check-in"}
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
                {checkOut ? format(checkOut, "MMM dd yyyy") : "Check-out"}
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

          <div className="flex items-center justify-between border-2 border-gray-200 rounded-2xl px-4 py-3">
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

        {/* PRICE SUMMARY */}
        <div className="bg-gradient-to-r from-moss/10 to-skyblue/10 rounded-2xl p-5 space-y-3">
          <div className="flex justify-between">
            <span className="font-medium">
              {camps?.name ? camps.name : "Tent"}
            </span>
            <span className="font-semibold text-moss">
              {camps?.price?.weekdays ? camps.price.weekdays : "3000"}
            </span>
          </div>

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
              ₹{camps?.price?.weekdays ? camps.price.weekdays : "3000"}
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
          //   onClick={send_whatsapp}
          //   disabled={sending}
        >
          {/* {sending ? "Processing..." : `Book Now – ₹${calculatedAmount}`} */}
          Booking now
        </Button>

        <p className="text-xs text-center text-stone/60">
          We’ll contact you within 15 minutes
        </p>
      </CardContent>
    </Card>
  );
};

export default BookingSection;
