"use client";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ShieldIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

const Footer = () => {
  const [render, setRender] = useState(false);

  const currentYear = new Date().getFullYear();
  useEffect(() => {
    if (!render) setRender(true);
  }, [render]);

  if (!render) return;

  return (
    <footer className="bg-gradient-to-br from-stone-800 to-stone-800/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🌲</div>
        <div className="absolute top-32 right-20 text-4xl">⭐</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🏕️</div>
        <div className="absolute bottom-10 right-10 text-3xl">🌙</div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="w-[100px] h-[100px] overflow-hidden">
              <img
                src="/images/triangle-glamping-logo.png"
                alt="triangle-glamping-logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white/80 mb-6 font-poppins leading-relaxed text-lg">
              Where camping meets comfort, creating unforgettable experiences in
              nature&apos;s embrace. Escape ordinary, sleep under stars, wake up
              to wilderness.
            </p>
            <div className="flex items-center space-x-3 text-white/80 mb-4">
              <MapPin className="w-5 h-5 text-coral self-start shrink-0" />
              <span className="font-poppins">
                A: Solu, Alandi-Markal Rd, near Sukanta Hotel, Pimpri-Chinchwad,
                Maharashtra 412105
              </span>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white">
                <UserIcon className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300 fill-blue-400" />
                <span className="font-medium text-xs sm:text-sm">
                  3,000+ Happy Glampers
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white">
                <ShieldIcon className="w-4 sm:w-5 h-4 sm:h-5 text-green-300 fill-green-400" />
                <span className="font-medium text-xs sm:text-sm">
                  Safe & Secure Campsite
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div id="footer">
            <h5 className="font-bold mb-6 text-xl font-playfair">
              Quick Links
            </h5>
            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href="/accommodations"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Accommodations
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Activities
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Private Theatre
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Your Day
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Gallery
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/safety-guidelines"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h5 className="font-bold mb-6 text-xl font-playfair">
              Connect With Us
            </h5>

            <div className="space-y-6 text-white/80">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-moss shrink-0" />
                <div>
                  <p className="font-semibold font-poppins">Email Us</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-poppins hover:text-coral transition-colors duration-300"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <Link
                href={"https://www.instagram.com/thetriangleglamping/"}
                target="__blank"
                className="flex items-center space-x-3"
              >
                <Instagram className="w-5 h-5 text-pink-700" />
                <div>
                  <p className="font-semibold font-poppins">
                    Follow on Instagram
                  </p>
                  <p
                    rel="noopener noreferrer"
                    className="font-poppins hover:text-coral transition-colors duration-300"
                  >
                    @thetriangleglamping
                  </p>
                </div>
              </Link>
              <Link
                href={"https://www.facebook.com/thetriangleglamping/"}
                target="__blank"
                className="flex items-center space-x-3"
              >
                <Facebook className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-semibold font-poppins">
                    Follow on Facebook
                  </p>
                  <p
                    rel="noopener noreferrer"
                    className="font-poppins hover:text-coral transition-colors duration-300"
                  >
                    @thetriangleglamping
                  </p>
                </div>
              </Link>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-500 mt-1" />

                <div>
                  <p className="font-semibold font-poppins">Call Us</p>

                  <Link href="tel:+917507507546">
                    <p className="font-poppins hover:text-coral transition-colors duration-300">
                      +91 75075 07546
                    </p>
                  </Link>

                  <Link href="tel:+919284800759">
                    <p className="font-poppins hover:text-coral transition-colors duration-300">
                      +91 92848 00759
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-poppins">
              © {currentYear} The Triangle Glamping. All rights reserved. |
              Crafted by Krrish
            </p>
            <div className="flex space-x-6 text-sm text-white/60"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
