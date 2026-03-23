import Accommodations from "@/components/Accommodations";
import Article from "@/components/Article";
import BookingWidget from "@/components/BookingWidget";
import DayTimeline from "@/components/DayTimeline";
import Experiences from "@/components/Experiences";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

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
