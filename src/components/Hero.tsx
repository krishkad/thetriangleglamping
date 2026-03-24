"use client";
import { Button } from "@/components/ui/button";
import { ShieldIcon, Star, UserIcon } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[35%_45%]"
        style={{
          backgroundImage: "url('/cocoon-ac-tent/cocoon-ac-tent-1.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 sm:via-transparent to-black/30 sm:to-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto animate-fade-in">
        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white">
            <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-500 text-yellow-600" />
            <span className="font-medium text-xs sm:text-sm">4.4 Rating</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white">
            <UserIcon className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300 fill-blue-400" />
            <span className="font-medium text-xs sm:text-sm">
              3,000+ Happy Couples
            </span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white">
            <ShieldIcon className="w-4 sm:w-5 h-4 sm:h-5 text-green-300 fill-green-400" />
            <span className="font-medium text-xs sm:text-sm">
              Safe & Secure Campsite
            </span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-4 sm:mb-6 leading-tight">
          A Peaceful Escape for <br className="hidden" />
          <span className="text-yellow-300">Couples</span>
          <br />
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] mb-8 sm:mb-10 max-w-3xl mx-auto font-poppins">
          Discover premium glamping at luxury tents, private bonfire, Private
          Dining & unmatched privacy for couples.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-moss h-max hover:bg-moss/80 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl font-semibold w-full sm:w-auto cursor-pointer"
            onClick={() =>
              document
                .getElementById("bookings")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Check Availability
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 h-max border-white text-white hoverbg-white hover:text-stone-800  bg-white/10 backdrop-blur-sm px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full font-semibold w-full sm:w-auto cursor-pointer"
            onClick={() =>
              document
                .getElementById("accommodations")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Camps
          </Button>
        </div>

      </div>
        {/* Indicator */}
      <div className="absolute bottom-0 w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          <p className="text-xs md:text-sm text-gray-200 px-4 whitespace-nowrap">
            Only 12 Private Luxury Units • 100% Exclusive Experience • Just 1
            Hour from Pune • 3 Hours from Mumbai • A Favorite for Couples •
            Perfect Romantic Getaway
          </p>
          <p className="text-xs md:text-sm text-gray-200 px-4 whitespace-nowrap">
            Only 12 Private Luxury Units • 100% Exclusive Experience • Just 1
            Hour from Pune • 3 Hours from Mumbai • A Favorite for Couples •
            Perfect Romantic Getaway
          </p>
          <p className="text-xs md:text-sm text-gray-200 px-4 whitespace-nowrap">
            Only 12 Private Luxury Units • 100% Exclusive Experience • Just 1
            Hour from Pune • 3 Hours from Mumbai • A Favorite for Couples •
            Perfect Romantic Getaway
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
