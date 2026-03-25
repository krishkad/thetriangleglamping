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
    question: "Is there any age restriction for couples?",
    answer:
      "Yes. If a couple is booking a tent, both guests must be 18 years or older. A valid government ID proof is mandatory at check-in.",
    category: "Booking",
  },
  {
    question: "Is mobile network and WiFi available?",
    answer:
      "Yes. Almost all major mobile network providers have strong network coverage at our site. We also provide WiFi access in common areas for guests who wish to work remotely.",
    category: "Facilities",
  },
  {
    question: "What things should we carry?",
    answer:
      "Please carry personal toiletries (towel, toothbrush, toothpaste, soap, etc.), mosquito repellent (Odomos recommended) as this is an outdoor stay experience, and during monsoon season, bring an umbrella and suitable footwear.",
    category: "Preparation",
  },
  {
    question: "Is early check-in or late checkout available?",
    answer:
      "Early check-in is not available. However, if you arrive early, you may book our private theatre (subject to availability). Late checkout is allowed until 12:00 PM.",
    category: "Booking",
  },
  {
    question: "Can we book without staying overnight (day stay)?",
    answer:
      "Yes. Depending on availability, you can book a day stay (morning to night) instead of an overnight stay.",
    category: "Booking",
  },
  {
    question: "Do Swiggy or Zomato deliver food to your location?",
    answer: "Yes, both Swiggy and Zomato deliver food to our site.",
    category: "Food",
  },
  {
    question: "Do Ola and Uber provide pickup and drop at your location?",
    answer:
      "Yes. Both Ola and Uber provide pickup and drop services at our location.",
    category: "Transport",
  },
  {
    question:
      "Do you have an à la carte menu for items outside the fixed menu?",
    answer:
      "Our in-house à la carte selection is limited to 2–3 snack items. However, we are happy to offer flexibility; if you would like something else, you are welcome to order via Swiggy or Zomato and enjoy it at our premises.",
    category: "Food",
  },
  {
    question: "Do you provide chips, cold drinks, and mineral water at MRP?",
    answer:
      "Yes. We provide chips, cold drinks, and Oxyrich mineral water at MRP (Maximum Retail Price), subject to current stock availability.",
    category: "Food",
  },
  {
    question: "Do you have a separate kitchen for pure vegetarian food?",
    answer:
      "Yes, we maintain a dedicated, separate kitchen for all pure vegetarian preparations to ensure complete segregation and culinary purity.",
    category: "Dietary",
  },
  {
    question: "Do you serve Jain food?",
    answer:
      "Absolutely. We offer Jain-friendly meals prepared strictly without onion, garlic, or root vegetables. Please inform our team of your requirements when placing your order.",
    category: "Dietary",
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
