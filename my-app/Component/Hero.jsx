import React from "react";

export default function Hero(){ 
    return(

        <div className="hero min-h-[400px]   w-full  grid-cols-2  bg-gray-100">
            <div className="pt-[100px] pl-[50px]" >
                <div  className="font-['Lato'] text-zinc-800 text-lg font-bold     uppercase tracking-wide">
                    New collection
             </div>

                <div  className="font-['Lato'] text-zinc-800 text-5x1 font-black tracking-wide py-5 pb-8">
                             Menswear 2025
                </div>
                {/* <div className="font-['Lato'] text-zinc-800 text-5xl font-black tracking-wide py-5 pb-8">
   Menswear 2025
</div> */}
                 <div className="flex items-center gap-2"> 
                        <button className="font-['Lato'] text-cyan-800 text-base font-bold px-8 py-2 rounded border border-cyan-800 hover:bg-cyan-800 hover:text-white transition duration-300">
            Shop Sale
          </button>
            </div>
             <button className="font-['Lato'] text-white text-base font-bold px-8 py-2 mt-2 bg-cyan-800 rounded hover:bg-cyan-900 transition duration-300">
            Shop Menswear
          </button>

            </div>

        </div>
    )
}