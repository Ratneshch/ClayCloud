import { useTranslation } from "react-i18next";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const { t } = useTranslation();

  const heading = t("testimonials_head.0.heading");
  const paragraph = t("testimonials_head.0.paragraph");
  const cardsData = t("testimonials", { returnObjects: true });

  const duplicated = [...cardsData, ...cardsData];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-[#F6E6C0] to-white py-12 sm:py-16"
      aria-labelledby="testimonials-heading"
    >
        <div className="top-1 right-0 w-15 h-15 bg-[#F7AE2A] blur-xl absolute"></div>
        <div className="top-175 right-95 w-15 h-15 bg-[#F7AE2A] blur-lg absolute"></div>
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute right-0 top-4 h-12 w-12 rounded-full bg-gradient-to-r from-[#F7AE2A] to-[#F1EDE6] blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 top-32 h-24 w-24 rounded-full bg-gradient-to-r from-[#F7AE2A] to-[#F1EDE6] blur-3xl" />

      {/* Header */}
      <div className="container mx-auto mb-8 px-4 text-center">
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
        >
          {heading}
        </h2>

        <p className="mt-2 text-base sm:text-lg text-gray-600">{paragraph}</p>
      </div>

      {/* Marquee Rows */}
      <MarqueeRow cards={duplicated} direction="left" />
      <MarqueeRow cards={duplicated} direction="right" className="mt-6" />
    </section>
  );
};

const MarqueeRow = ({ cards, direction, className }) => {
  const isReverse = direction === "right";

  return (
    <div className={`relative overflow-hidden ${className || ""}`}>
      <div
        className={`marquee-inner flex gap-4 sm:gap-6 py-4 ${
          isReverse ? "marquee-reverse" : ""
        }`}
      >
        {[...cards, ...cards].map((card, idx) => (
          <TestimonialCard key={`${card.handle}-${idx}`} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
