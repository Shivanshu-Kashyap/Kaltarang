import React from "react";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"
import World from "../assets/World.png";
import backgorund from "../assets/footer_line_background.png";
import kaltarang from '../assets/Pixel.png'

const ExplorerPath = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={backgorund} alt="Grid Background" className="object-cover opacity-80 w-full h-full" />
      </div>

      {/* Content Container */}
      <div className="w-full max-w-6xl mx-auto px-4 py-8 z-10 flex flex-col items-center">
        {/* Explorer Path Header */}
        <div className="w-full text-center mb-8">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px bg-gray-700 w-24 md:w-32"></div>
            <div className="text-xs md:text-sm tracking-widest text-gray-700">EXPLORER PATH</div>
            <div className="h-px bg-gray-700 w-24 md:w-32"></div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-none mb-4 font-mono">
            WHICH WORLD
            <br /> CALLS TO YOU?
          </h1>
          <p className="text-xl md:text-2xl font-mono">FIND YOUR PATH TO A NEW WORLD</p>
        </div>

        {/* Kaltarang Logo */}
        <div className="my-8">
          <img src={kaltarang} alt="KALTARANG - A VOXEL VERSE" className="object-contain w-96 h-auto" />
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full my-8">
          {[
            { name: "NIHARIKA PANT", phone: "+91 82879 1341", email: "22mc302@rgpt.ac.in" },
            { name: "SHRIANSH MISHRA", phone: "+91 62640 64403", email: "22k3050@rgpt.ac.in" },
            { name: "UTSAV SINGHLA", phone: "+91 89602 01569", email: "22k3050@rgpt.ac.in" },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <h3 className="font-mono text-lg md:text-xl font-bold">{member.name}</h3>
              <p className="font-mono text-sm">{member.phone}</p>
              <p className="font-mono text-sm">{member.email}</p>
            </div>
          ))}
        </div>

        {/* World Image and Social Links */}
        <div className="relative mt-8 w-full flex flex-col items-center">
          <div className="text-center mb-4">
            <h3 className="font-mono text-lg">Follow Us</h3>
            <div className="flex justify-center gap-4 mt-2">
              {[Instagram, Facebook, Linkedin, Youtube].map((Icon, index) => (
                <a href="#" key={index} className="bg-gray-800 p-2 rounded-full">
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-2 text-center text-xs text-gray-600">
            <p>Designed and Developed by</p>
          </div>

          <img src= {World} alt="World" className="mt-2 w-52 h-auto" />
        </div>
      </div>
    </main>
  );
};

export default ExplorerPath;
