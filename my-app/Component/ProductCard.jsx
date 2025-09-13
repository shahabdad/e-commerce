import React from "react";
import  StarRating from "./StarRating"

export  default function ProductCard({product, onAddToCart}) { 

    return (
 <div className="shadowp-xl   rounded-2xl hover:scale-105 duration-700 group bg-white" >    

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