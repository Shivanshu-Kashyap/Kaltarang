import React from "react";
import World from "../assets/World.png";

const ExplorerPath = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-grid  text-black text-center">
      <p className="text-sm tracking-widest text-gray-400 mb-2">-- EXPLORER PATH --</p>
      <h1 className="text-4xl md:text-6xl font-bold pixelated">WHICH WORLD CALLS TO YOU?</h1>
      <p className="text-lg text-gray-300 mt-2">FIND YOUR PATH TO A NEW WORLD</p>
      <div className="mt-10">
        <img src={World} alt="World" className="w-64 h-64 md:w-80 md:h-80 object-contain pixelated" />
      </div>
    </div>
  );
};

export default ExplorerPath;
