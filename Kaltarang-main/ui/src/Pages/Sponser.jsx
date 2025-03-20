import React from "react";
import Blank from "../assets/Sponser/Blank .jpg";

// Sponsor logos (Replace with actual image URLs)
const sponsors = [
  { name: "#", src: Blank },
  { name: "#", src: Blank},
  { name: "#", src: Blank },
  { name: "#", src: Blank},
  { name: "#", src: Blank },
  { name: "#", src: Blank },
];

const SponsorsSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center py-16 px-4 bg-grid bg-cover bg-center">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-30"></div>

      {/* Sponsors Title */}
      <h2 className="relative text-3xl font-caleb md:text-4xl font-bold text-black tracking-widest pixelated-font mb-8">
        SPONSORS
      </h2>

      {/* Sponsor Logos */}
      <div className="relative flex flex-wrap justify-center items-center gap-12 z-10">
        {sponsors.map((sponsor, index) => (
          <img
            key={index}
            src={sponsor.src}
            alt={sponsor.name}
            className="h-16 md:h-20 transition-transform transform hover:scale-110"
          />
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
