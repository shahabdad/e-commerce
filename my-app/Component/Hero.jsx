import React from "react";
import { ShoppingBag } from "lucide-react";

export default function Hero() {
  return (
    <div
      className="hero relative min-h-[500px] w-full bg-cover mt-3 bg-center flex items-center"
      style={{ backgroundImage: "url('/Home-1.jpg')" }}
    >
      {/* Light overlay to make black text visible */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 pl-[140px] text-black">
        {/* Heading */}
        <div className="font-['Lato'] text-lg font-bold uppercase tracking-wide animate-fade-in-down">
          New Collection
        </div>

        <div className="font-['Lato'] text-6xl md:text-7xl font-extrabold tracking-wide py-5 pb-8 animate-fade-in-up">
          Menswear 2025
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="group font-['Lato'] text-black text-base font-bold px-8 py-3 rounded-lg border border-black bg-white hover:bg-black hover:text-white transition duration-500 transform hover:scale-110 hover:rotate-1 shadow-md hover:shadow-2xl">
            Shop Sale
          </button>

          <button className="group flex items-center gap-2 font-['Lato'] text-white text-base font-bold px-8 py-3 bg-black rounded-lg hover:bg-gray-800 transition duration-500 transform hover:scale-110 hover:-rotate-1 shadow-md hover:shadow-2xl">
            <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
            Shop Menswear
          </button>
        </div>
      </div>
    </div>
  );
}
