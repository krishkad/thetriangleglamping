"use client";

import { format } from "date-fns";
import { CalendarDays, CheckCircle2, Users } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "./ui/badge";

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
    category: "Triangle Tent Options",
    camps: [
      {
        name: "Triangle Tent",
        price: "₹1200",
        amount: 3500,
        saturday_amount: 4250,
        sunday_amount: 4250,
        savings: "₹200",
        capacity: 2,
        tag: "Popular",
      },
      {
        name: "Triangle Tent with Mini Pool",
        price: "₹1599",
        amount: 1599,
        saturday_amount: 4250,
        sunday_amount: 4250,
        savings: "₹301",
        capacity: 4,
        tag: "Best Seller",
      },
      {
        name: "Triangle Cooler Cabin",
        price: "₹999",
        saturday_amount: 4250,
        sunday_amount: 4250,
        amount: 999,
        savings: "₹100",
        capacity: 2,
      },
      {
        name: "Triangle AC Cabin",
        price: "₹999",
        saturday_amount: 4250,
        sunday_amount: 4250,
        amount: 999,
        savings: "₹100",
        capacity: 2,
      },
    ],
  },
  {
    category: "Cocoon Stays",
    camps: [
      {
        name: "Cocoon AC Tent with Jacuzzi & Mini Pool",
        price: "₹2999",
        amount: 2999,
        saturday_amount: 4250,
        sunday_amount: 4250,
        capacity: 2,
        tag: "Luxury",
      },
      {
        name: "Cocoon AC Tent",
        price: "₹3499",
        amount: 3499,
        saturday_amount: 4250,
        sunday_amount: 4250,
        capacity: 3,
      },
      {
        name: "Cocoon AC Tent with Mini Pool",
        price: "₹3999",
        saturday_amount: 4250,
        sunday_amount: 4250,
        amount: 3999,
        capacity: 4,
      },
    ],
  },
  {
    category: "Private Experiences",
    camps: [
      {
        name: "AC Pod with Outdoor Jacuzzi",
        price: "₹2499",
        amount: 2499,
        saturday_amount: 4250,
        sunday_amount: 4250,
        capacity: 2,
      },
      {
        name: "Cocoon AC Tent with Jacuzzi & Mini Pool",
        price: "₹2999",
        amount: 2999,
        saturday_amount: 4250,
        sunday_amount: 4250,
        capacity: 2,
        tag: "Romantic",
      },
    ],
  },
];

/* ================= COMPONENT ================= */

const BookingWidget = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();

  const [guests, setGuests] = useState(2);
  const [kids, setKids] = useState(0);

  const [selectedPackage, setSelectedPackage] = useState<Camp>(
    packages[0].camps[0],
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [bookingExists, setBookingExists] = useState<any>(null);
  const [sending, setSending] = useState(false);

  const calculatedAmount = selectedPackage.amount * guests;

  /* ================= SUBMIT ================= */

  const send_whatsapp = async () => {
    setSending(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        body: JSON.stringify({
          email,
          name,
          lname,
          phone,
          checkIn,
          checkOut,
          guests,
          kids,
          selectedPackage,
          calculatedAmount,
        }),
      });

      const res = await response.json();

      if (!res.success) return;

      localStorage.setItem("bookings", JSON.stringify(res.user_info));
      setBookingExists(res.user_info);

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
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("bookings");
    if (data) setBookingExists(JSON.parse(data));
  }, []);

  /* ================= UI ================= */

  return (
    <section className="py-20 px-6 bg-secondary">
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

                        {/* Savings */}
                        {camp.savings && (
                          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md">
                            Save {camp.savings}
                          </span>
                        )}
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
        <Card className="rounded-3xl shadow-2xl border-0 bg-white overflow-hidden h-max">
          {/* HEADER */}
          <CardHeader className="text-center pb-4 pt-6">
            <CardTitle className="text-2xl font-playfair font-bold text-stone">
              Reserve Your Escape
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
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Last Name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
                onChange={(e) => setLname(e.target.value)}
              />
            </div>

            {/* CONTACT */}
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Email"
                type="email"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Phone"
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
                    {checkIn ? format(checkIn, "MMM dd yyyy") : "Check-in"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
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
                <PopoverContent className="p-0">
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
                <span className="font-medium">{selectedPackage.name}</span>
                <span className="font-semibold text-moss">
                  {selectedPackage.price}/person
                </span>
              </div>

              {selectedPackage.savings && (
                <div className="flex justify-between text-sm">
                  <span>You Save</span>
                  <span className="text-green-600 font-semibold">
                    {selectedPackage.savings} / person
                  </span>
                </div>
              )}

              <div className="border-t pt-3 flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <span className="text-2xl font-bold text-moss">
                  ₹{calculatedAmount}
                </span>
              </div>

              {/* SAVINGS BANNER */}
              {selectedPackage.savings && (
                <div className="bg-green-100 text-green-700 text-xs text-center p-2 rounded-md font-semibold">
                  🎉 You saved ₹
                  {parseInt(selectedPackage.savings.replace("₹", "")) * guests}
                </div>
              )}
            </div>

            {/* CTA */}
            <Button
              className="w-full bg-moss hover:bg-moss/90 text-white text-lg py-4 rounded-2xl shadow-lg font-bold"
              onClick={send_whatsapp}
              disabled={sending}
            >
              {sending ? "Processing..." : `Book Now – ₹${calculatedAmount}`}
            </Button>

            <p className="text-xs text-center text-stone/60">
              We’ll contact you within 15 minutes
            </p>
          </CardContent>
        </Card>
      </div>

      {/* SUCCESS */}
      {bookingExists?.name && (
        <div className="mt-10 text-center">
          <CheckCircle2 className="mx-auto text-green-600 w-10 h-10" />
          <p className="mt-2">Booking Sent Successfully!</p>
        </div>
      )}
    </section>
  );
};

export default BookingWidget;
