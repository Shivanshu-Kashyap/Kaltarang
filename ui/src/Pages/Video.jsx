import React from "react";

const VideoSection = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center py-16 px-4">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-gray-500"></div>

      {/* Centered Video Text */}
      <h2 className="relative text-md md:text-lg font-semibold tracking-wide text-black">
        V I D E O
      </h2>

      {/* Placeholder for Video */}
      <div className="relative z-10 mt-8 w-[80%] max-w-4xl aspect-video bg-black">
        {/* Replace with actual video */}
        <iframe
          className="w-full h-full"
          src=""
          title="Video"
          allowFullScreen
        ></iframe>
      </div>

      {/* Bottom Grid Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[15%] bg-[url('/assets/grid.png')] bg-cover bg-bottom opacity-50"></div>
    </section>
  );
};

export default VideoSection;
