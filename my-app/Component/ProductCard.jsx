import React from "react";
import  StarRating from "./StarRating"
import { useNavigate } from "react-router-dom";
export  default function ProductCard({product, }) { 
 const navigate = useNavigate();
    return (
 <div className="shadow-xl   rounded-2xl hover:scale-105 duration-700 bg-white" 
   onDoubleClick={() => navigate(`/product/${product.id}`)}
 >    

 <div className="flex justify-center  items-center">
        <img
          className="h-[150px] max-w-[150px]  hover:scale-105 object-contain group-hover:scale-90 duration-700"
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
            </p>
            
              <StarRating rating={product.rating.rate} />
                      </  div>

      </div>
      
</div>
    )
}   