// // import React, { useState } from "react";

// // export default function ProductCard({ product, onAddToCart }) {
// //   const [showDetails, setShowDetails] = useState(false);

// //   return (
// //     <div
// //       className="border rounded-xl p-5 shadow-lg bg-white hover:scale-105 transition-transform duration-300 cursor-pointer"
// //       onClick={() => setShowDetails(!showDetails)} // toggle details on click
// //     >
// //       {/* Image */}
// //       <img
// //         src={product.image}
// //         alt={product.title}
// //         className="h-40 w-full object-contain mb-3"
// //       />

// //       {/* Title */}
// //       <h3 className="text-lg font-bold text-zinc-800 truncate">
// //         {product.title}
// //       </h3>

// //       {/* Price */}
// //       <p className="text-cyan-700 font-semibold text-lg mt-2">
// //         ${product.price}
// //       </p>

// //       {/* Show details if clicked */}
// //       {showDetails && (
// //         <div className="mt-3 text-sm text-zinc-600">
// //           <p>{product.description}</p>
// //           <button
// //             onClick={(e) => {
// //               e.stopPropagation(); // prevent closing when button is clicked
// //               onAddToCart(product);
// //             }}
// //             className="mt-3 px-4 py-2 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700"
// //           >
// //             Add to Cart
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import React from "react";
// import StarRating from "./StarRating";

// export default function ProductCard({ product }) {
//   return (
//     <div className="shadow-xl rounded-2xl hover:scale-105 duration-700 group bg-white">
//       <div className="flex justify-center items-center">
//         <img
//           className="h-[200px] max-w-[200px] object-contain group-hover:scale-90 duration-700"
//           src={product.image}
//           alt={product.title}
//         />
//       </div>
//       <div className="px-4 py-5">
//         <h2 className="font-['Lato'] line-clamp-1 text-lg my-3">
//           {product.title}
//         </h2>
//         <div className="flex justify-around items-center">
//           <p className="text-zinc-800 text-xl font-bold font-['Lato'] leading-relaxed">
//             ${product.price}
//           </p>
//           <StarRating />
//         </div>
//       </div>
//     </div>
//   );
// }


import React from "react";
import  StarRating from "./StarRating"
import { useNavigate } from "react-router-dom";
export  default function ProductCard({product, onAddToCart}) { 
 const navigate = useNavigate();
    return (
 <div className="shadowp-xl   rounded-2xl hover:scale-105 duration-700 group bg-white" 
   onDoubleClick={() => navigate(`/product/${product.id}`)}
 >    

 <div className="flex justify-center items-center">
        <img
          className="h-[200px] max-w-[200px] object-contain group-hover:scale-90 duration-700"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div  className="px-4 py-5"> 
        <h2 className="font-['Lato'] line-clamp-1 text-lg my-3">
            {product.title}

        </h2>

        <div className="flex justify-around items-center" >
            <p className="text-zinc-800 text-xl font-bold font-['Lato'] leading-relaxed"> 
                ${product.price}
            </p>"
            
              <StarRating rating={product.rating.rate} />
                      </  div>

      </div>
         <button
        onClick={onAddToCart}
        className="mt-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>
</div>
    )
}   