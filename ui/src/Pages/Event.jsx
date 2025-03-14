import { ArrowRight } from "lucide-react";
import SnakeEffect from '../Components/Snake';

export default function HighlightsPage() {
  return (
    <div className="min-h-screen  relative overflow-hidden bg-grid">
      {/* Snake Effect */}
      <SnakeEffect />

      {/* Header */}
      <div className="container mx-auto pt-6 px-4 relative z-10">
        <div className="flex justify-between items-center text-xs text-gray-600 mb-4">
          <div>--- --- ---[</div>
          <div className="uppercase tracking-wider">Explore Mindset</div>
          <div>]--- --- ---</div>
        </div>

        {/* Main Heading */}
        <h1 className="text-center font-mono font-bold text-3xl md:text-5xl uppercase tracking-tight leading-tight">
          How about we
          <br />
          have a look
          <br />
          at the highlights
        </h1>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="planet-container relative">
              <img
                src="/placeholder.svg"
                width={80}
                height={80}
                alt="Green planet"
                className="rounded-full border border-gray-400"
              />
            </div>

            <p className="font-mono uppercase text-sm leading-relaxed mt-4">
              This year, we&apos;ll be
              <br />
              celebrating the magic of
              <br />
              music, art, and more!
            </p>

            <p className="font-mono uppercase text-xs leading-relaxed mt-8">
              Kalerang features thrilling live concerts,
              <br />
              engaging exhibitions, immersive art, literary
              <br />
              events, sports challenges, and hands-on
              <br />
              workshops. With flagship events like Fronites,
              <br />
              Dragonfest, and Creators Camp, it promises
              <br />
              unforgettable experiences for participants and
              <br />
              audiences alike.
            </p>

            {/* Events Button */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center bg-black text-white font-mono uppercase px-6 py-2 text-sm rounded-sm hover:bg-gray-800 transition-colors"
              >
                Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Posters */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white aspect-square flex items-center justify-center font-mono text-sm uppercase">
                Poster
              </div>
              <div className="bg-white aspect-square flex items-center justify-center font-mono text-sm uppercase">
                Poster
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Planets and connecting lines */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute bottom-32 left-16">
            <img
              src="/placeholder.svg"
              width={60}
              height={60}
              alt="Dark planet"
              className="rounded-full border border-gray-400"
            />
          </div>

          <div className="absolute bottom-16 left-1/4">
            <img
              src="/placeholder.svg"
              width={50}
              height={50}
              alt="Brown planet"
              className="rounded-full border border-gray-400"
            />
          </div>

          <div className="absolute bottom-48 right-1/3">
            <img
              src="/placeholder.svg"
              width={40}
              height={40}
              alt="Green planet"
              className="rounded-full border border-gray-400"
            />
          </div>

          <div className="absolute bottom-24 right-16">
            <img
              src="/placeholder.svg"
              width={45}
              height={45}
              alt="Brown planet"
              className="rounded-full border border-gray-400"
            />
          </div>

          {/* SVG for connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M10,70 Q30,50 40,80 Q60,60 70,50 Q80,40 90,70" fill="none" stroke="#ccc" strokeWidth="0.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
