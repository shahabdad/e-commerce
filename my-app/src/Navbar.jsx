import React from "react";

export default function  Navbar() { 

return ( 
    <nav 
     className="w-full  flex  justify-between  items-center text-gray-700 text-lg font-bold  py-5 bg-[#ffffff29] fixed top-0 left-0 z-10 backdrop-blur-3xl"
    >
        {/* lefft    side  */}
        <ul className="w-flex flex justtify-center items-center gap-3">
            <li className="px-5">

            <a href="/">
            <img
              className="max-w-[200px]"
              src="/assets/logo-removebg-preview-D8Ms51qp.png"
              alt="Logo"
            />
          </a>
            </li>
            <li className="font-['Lato'] cursor-pointer">Men</li>
        <li className="font-['Lato'] cursor-pointer">Women</li>
        <li className="font-['Lato'] cursor-pointer">Boys</li>
        <li className="font-['Lato'] cursor-pointer">Girls</li>

        </ul>
        {/* right side */}
        <ul className="w-full flex justify-center items-center gap-4">
            {/* search Bar  */}
            <li className="font-['Lato'] cursor-pointer flex  justify-center items-center gap-2  py-1 px-3 bg-blue-50   rounded-lg  shadow-md ">Search</li[]> 

            </li>

        </ul>

    </nav>

)
}