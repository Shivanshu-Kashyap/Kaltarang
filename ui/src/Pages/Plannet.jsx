import React, { useState } from "react";
import "../index.css";
import one from "../assets/Planrt photos/1.png";
import Two from "../assets/Planrt photos/2.png";
import Three from "../assets/Planrt photos/3.png";
import Four from "../assets/Planrt photos/4.png";
import Poster1 from "../assets/Poster/Poster1.jpg";
import Poster2 from "../assets/Poster/Poster2.jpg";
import Poster3 from "../assets/Poster/Poster3.jpg";
import Poster4 from "../assets/Poster/Poster4.jpg";

const Plannet = () => {
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const planets = [
    {
      id: 1,
      name: "Celestial Haven",
      image: one,
      poster: Poster1,
      position: { left: "15%", top: "30%" },
      size: "w-34 h-24",
    },
    {
      id: 2,
      name: "Nova Terra",
      image: Two,
      poster: Poster2,
      position: { left: "40%", top: "50%" },
      size: "w-20 h-20",
    },
    {
      id: 3,
      name: "Quantum Sphere",
      image: Three,
      poster: Poster3,
      position: { right: "35%", top: "25%" },
      size: "w-16 h-16",
    },
    {
      id: 4,
      name: "Astral Prime",
      image: Four,
      poster: Poster4,
      position: { right: "15%", top: "45%" },
      size: "w-20 h-20",
    },
  ];

  return (
    <div className="min-h-screen bg-grid relative overflow-hidden p-4">
      <div className="relative w-full h-[calc(100vh-2rem)] flex items-center justify-center">
        {/* Central Sun */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black rounded-full z-10 shadow-lg border-2 border-gray-300">
          <div className="absolute -inset-2 border-2 border-gray-400 rounded-full animate-ping opacity-75"></div>
        </div>

        {/* Orbital Lines */}
        <svg className="absolute w-full h-full" style={{ maxWidth: "1200px" }}>
          {planets.map((planet) => {
            const planetX = planet.position.left
              ? parseInt(planet.position.left)
              : 100 - parseInt(planet.position.right || "0");
            const planetY = parseInt(planet.position.top);

            return (
              <line
                key={planet.id}
                x1="50%"
                y1="50%"
                x2={`${planetX}%`}
                y2={`${planetY}%`}
                stroke="#333"
                strokeWidth="1"
                className={`opacity-50 transition-opacity duration-300 ${
                  hoveredPlanet === planet.id ? "opacity-100" : "opacity-30"
                }`}
              />
            );
          })}
        </svg>

        {/* Planets */}
        {planets.map((planet) => (
          <div
            key={planet.id}
            className="planet-container absolute"
            style={{
              ...planet.position,
              zIndex: hoveredPlanet === planet.id ? 20 : 1,
            }}
            onMouseEnter={() => setHoveredPlanet(planet.id)}
            onMouseLeave={() => setHoveredPlanet(null)}
          >
            <div className="relative">
              <img
                src={planet.image}
                alt={planet.name}
                className={`${planet.size} rounded-full object-cover transition-transform duration-300 ${
                  hoveredPlanet === planet.id ? "scale-110" : ""
                }`}
              />
              <div className="absolute -inset-4 border-2 border-dashed border-gray-400 rounded-full animate-spin-slow"></div>
            </div>
          </div>
        ))}

        {/* Event Card Overlay */}
        {hoveredPlanet && (
          <div
            className="absolute shadow-lg w-80 transition-transform transform scale-90 opacity-0"
            style={{
              animation: "fadeIn 0.5s ease-in-out forwards, scaleIn 0.3s ease-in-out forwards",
              left: planets.find((p) => p.id === hoveredPlanet).position.left || "auto",
              right: planets.find((p) => p.id === hoveredPlanet).position.right || "auto",
              top: `calc(${planets.find((p) => p.id === hoveredPlanet).position.top} + 5%)`,
            }}
          >
            <img
              src={planets.find((p) => p.id === hoveredPlanet).poster}
              alt="Event Poster"
              
            />
           
          </div>
        )}

        {/* Text Content */}
        <div className="absolute right-[10%] top-[15%] max-w-md text-right">
          <h1 className="text-2xl md:text-3xl font-mono text-gray-700 tracking-wider mb-4">
            COMPETE, CONNECT, AND
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-gray-600 tracking-wide mb-6">
            CELEBRATE YOUR TALENT IN
          </h2>
          <h3 className="text-lg md:text-xl font-mono text-gray-500 tracking-wide mb-8">
            VIBRANT CONTESTS
          </h3>
          <button className="bg-black text-white px-8 py-3 rounded-full font-mono text-sm hover:bg-gray-800 transition-colors">
            Competitions ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plannet;
