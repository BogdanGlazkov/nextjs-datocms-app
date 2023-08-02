import React from "react";
import PricingCard from "./PricingCard";

export default function PricingSectionRecord({ details }) {
  return (
    <section className="bg-purple-600 py-20 px-10 max-w-100">
      <h2 className="text-center text-8xl font-bold text-white mb-20">
        {details.title}
      </h2>
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-4 justify-center flex-wrap max-w-6xl mx-auto items-stretch">
        {details.pricingCards.map((card, index) => (
          <PricingCard details={card} key={index} />
        ))}
      </div>
    </section>
  );
}
