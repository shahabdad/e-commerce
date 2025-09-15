

// // // import React from "react";

// // // export default function Hero() {
// // //   return (
// // //     <div
// // //       className="hero  min-h-[400px] w-full grid-cols-2 bg-cover bg-center"
// // //       style={{ backgroundImage: "url('/Home-1.jpg')" }}
// // //     >
// // //       <div className="pt-[120px] pl-[140px]  h-full w-full">
// // //         <div className="font-['Lato'] text-white text-4xl    font-bold uppercase tracking-wide">
// // //           New collection
// // //         </div>

// // //         <div className="font-['Lato'] text-white text-7xl   font-black tracking-wide py-5 pb-8">
// // //           Menswear 2025
// // //         </div>

// // //         <div className="flex items-center gap-2">
// // //           <button className="font-['Lato'] text-cyan-800 text-base font-bold px-8 py-2 rounded border border-cyan-800 hover:bg-cyan-800 hover:text-white transition duration-300 bg-white">
// // //             Shop Sale
// // //           </button>
// // //         </div>

// // //         <button className="font-['Lato'] text-white text-base font-bold px-8 py-2 mt-2 bg-cyan-800 rounded hover:bg-cyan-900 transition duration-300">
// // //           Shop Menswear
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React from "react";
// // import { ShoppingBag } from "lucide-react"; // install: npm i lucide-react

// // export default function Hero() {
// //   return (
// //     <div
// //       className="hero relative min-h-[500px] w-full bg-cover mt-3   bg-center flex items-center"
// //       style={{ backgroundImage: "url('/Home-1.jpg')" }}
// //     >
// //       {/* Overlay for modern effect */}
// //       <div className="absolute inset-0 bg-black/40 backdrop-blur-"></div>

// //       <div className="relative z-10 pl-[140px] text-white">
// //         {/* Animated text */}
// //         <div className="font-['Lato'] text-lg  font-bold uppercase tracking-wide animate-fade-in-down">
// //           New Collection
// //         </div>

// //         <div className="font-['Lato'] text-7xl font-extrabold tracking-wide py-5 pb-8 animate-fade-in-up">
// //           Menswear 2025
// //         </div>

// //         {/* Buttons */}
// //         <div className="flex items-center gap-4">
// //           <button className="group font-['Lato'] text-cyan-800 text-base font-bold px-8 py-3 rounded-lg border border-cyan-800 bg-white hover:bg-cyan-800 hover:text-white transition duration-300 transform hover:scale-105 hover:rotate-1 shadow-md hover:shadow-2xl">
// //             Shop Sale
// //           </button>

// //           <button className="group flex items-center gap-2 font-['Lato'] text-white text-base font-bold px-8 py-3 bg-cyan-800 rounded-lg hover:bg-cyan-900 transition duration-300 transform hover:scale-105 hover:-rotate-1 shadow-md hover:shadow-2xl">
// //             <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
// //             Shop Menswear
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React from "react";
// import { ShoppingBag } from "lucide-react"; // npm i lucide-react

// export default function Hero() {
//   return (
//     <div
//       className="hero relative min-h-[500px] w-full bg-cover mt-3 bg-center flex items-center"
//       style={{ backgroundImage: "url('/Home-1.jpg')" }}
//     >
//       {/* Dark overlay for contrast */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-"></div>

//       <div className="relative z-10 pl-[140px] text-white">
//         {/* Animated heading with bg color */}
//         <div className=" px-4 py-1 bg-blue-600 text-white rounded-md shadow-lg font-['Lato'] text-lg font-bold uppercase tracking-wide animate-fade-in-down hover:bg-blue-700 transition duration-300">
//           New Collection
//         </div>

//         <div className="mt-5 inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl shadow-xl font-['Lato'] text-6xl md:text-7xl font-extrabold tracking-wide animate-fade-in-up hover:scale-105 transition-transform duration-500">
//           Menswear 2025
//         </div>

//         {/* Buttons */}
//         <div className="flex items-center gap-4 mt-8">
//           <button className="group font-['Lato'] text-cyan-800 text-base font-bold px-8 py-3 rounded-lg border border-cyan-800 bg-white hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-700 hover:text-white transition duration-500 transform hover:scale-110 hover:rotate-1 shadow-md hover:shadow-2xl">
//             Shop Sale
//           </button>

//           <button className="group flex items-center gap-2 font-['Lato'] text-white text-base font-bold px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg hover:from-blue-700 hover:to-cyan-800 transition duration-500 transform hover:scale-110 hover:-rotate-1 shadow-md hover:shadow-2xl">
//             <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
//             Shop Menswear
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import { ShoppingBag } from "lucide-react"; // npm i lucide-react

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
