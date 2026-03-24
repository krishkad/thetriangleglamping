"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "./FloatingAction";

const phoneNumber = process.env.NEXT_PUBLIC_CALL_PHONE_NO;

const faqs = [
  {
    question: "Cancellation Policy",
    answer:
      "More than 72 hours before check-in: 90% refund, Within 72 hours of check-in: No refund or postponement",
    category: "Policies",
  },
  {
    question: "How do you ensure cleanliness and hygiene for each guest?",
    answer: `Cleanliness and hygiene are our highest priorities. To ensure a spotless experience, all our washrooms are maintained by professional cleaners, and our rooms are serviced by well-trained caretakers.

Every tent undergoes a rigorous inspection post-cleaning before it is assigned to you. Additionally, we use an in-house dedicated laundry to ensure all linen is washed daily and remains fresh. For your peace of mind, a dedicated caretaker is assigned to your tent to handle any specific requests or hygiene needs during your stay.`,
    category: "General",
  },
  {
    question: "Is Private washroom available?",
    answer: "Yes, we have private washrooms for all accommodations.",
    category: "Facilities",
  },
  {
    question: "What is the age group criteria?",
    answer:
      "Any age group can enjoy the riverside campsite as it is fully safe. We host reunions, family picnics, birthday parties, and more.",
    category: "General",
  },
  {
    question: "How is the tent arrangement?",
    answer:
      "Our tent accommodates up to 4 people. You won’t have to share a tent with unknown guests. Mattresses, Fresh bedsheets, pillows, and blankets are provided. Sleeping bags are not provided for hygiene reasons.",
    category: "Accommodation",
  },
  {
    question: "Do you provide alcohol?",
    answer: "No, we do not sell, provide or store alcohol at the glampsite.",
    category: "Policies",
  },
  {
    question: "Do you allow or provide hookah?",
    answer:
      "Hookah is strictly not allowed on the premises. If found carrying, the booking will be canceled and no refund will be provided.",
    category: "Policies",
  },
  {
    question: "Do you provide toiletries?",
    answer:
      "Being a camping site, we do not provide toiletries. Guests are requested to carry their own towel, shower gel, conditioner, shampoo, toothpaste, and toothbrush.",
    category: "Preparation",
  },
  {
    question: "What things should I carry?",
    answer:
      "Please carry a valid government ID proof, booking confirmation, personal essentials, necessary medications, and mosquito repellent such as Odomos, as this is an outdoor stay.",
    category: "Preparation",
  },
  {
    question: "Is early check-in or early check-out available?",
    answer:
      "Early check-in is not available before 3 PM. Early check-out is subject to availability.",
    category: "Booking",
  },
  {
    question: "Minimum age for couples to book a tent",
    answer: "The minimum age is 18.",
    category: "Policies",
  },
];

const FAQ = () => {
  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in Triangle Glamping. Could you please help me with booking?";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  const handleCall = () => {
    window.open(`tel:+${phoneNumber}`, "_self");
  };
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 font-poppins">
            We&apos;ve got answers to all your questions for a seamless glamping
            experience
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-bold text-stone hover:text-moss transition-colors font-playfair text-base sm:text-lg py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="bg-[#4caf50]/10 w-max text-moss px-2 sm:px-3 py-1 rounded-full text-xs font-poppins font-semibold">
                    {faq.category}
                  </span>
                  <span className="flex-1 text-left">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-stone/80 pb-4 sm:pb-6 font-poppins leading-relaxed text-sm sm:text-base pl-0 sm:pl-16 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div id="contact" className="text-center pt-24">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-stone mb-3 sm:mb-4">
              {/* Still have questions? We&apos;re here to help! */}
              Have questions? Let&apos;s make your trip stress-free.
            </h3>
            <p className="text-stone/80 mb-4 sm:mb-6 font-poppins text-sm sm:text-base">
              Our friendly team is available 10 am - 7 pm to assist with your
              booking and travel planning
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer gap-2 sm:gap-3"
                onClick={handleWhatsApp}
              >
                {/* <MessageCircle className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" /> */}
                <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Support
              </a>
              {/* <a
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-moss text-white rounded-2xl hover:bg-moss/90 transition-colors font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
                onClick={handleCall}
              >
                <Phone className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                Call Now
              </a> */}
              <a
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl  transition-colors font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base cursor-pointer"
                onClick={handleCall}
              >
                <Phone className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
