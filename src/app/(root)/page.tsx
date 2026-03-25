import Accommodations from "@/components/Accommodations";
import Article from "@/components/Article";
import BookingWidget from "@/components/BookingWidget";
import DayTimeline from "@/components/DayTimeline";
import Experiences from "@/components/Experiences";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Glamping Near Pune and Mumbai with Private Cabins",

  description:
  "Book luxury glamping near Pune and Mumbai. Private cabins, Private Mini pools, BBQ, Private bonfire & peaceful nature stay. Perfect for couples & groups.",
  
  alternates: {
    canonical: "https://thetriangleglamping.com",
  },

  openGraph: {
    title: "Luxury Glamping Near Pune",
    description:
      "Private glamping cabins near Pune with BBQ, bonfire and scenic views.",
    url: "https://thetriangleglamping.com",
    images: [
      {
        url: "/og-home.jpg",
      },
    ],
  },
};

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <Hero />
      <Accommodations />
      <DayTimeline />
      <Experiences />
      <BookingWidget />
      <Testimonials />
      <FAQ />
      <Article />
      {/* <FloatingActions /> */}
    </div>
  );
};

export default Home;
