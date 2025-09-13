import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

 export default function Products({onAddToCart})  { 
    const  [product,setProducts] = useState([]); 
     const [sortType,setSortType]  = useState("default"); 

     useEffect(() => { 
        axios.get("https://fakestoreapi.com/products").then((res) =>{ 
            setProducts(res.data); 
        });     
     },[]);

     const sortedProducts =   [...product].sort((a,b) => { 
        if (sortType === "cheapest")  return a.price - b.price; 
        if(sortType === 'mostExpersive') return b.price  - a.price;   
            return 0; 
     
     } );    
     return(
        <div  >
            <div className="text-center mt-[50px]"> 
                <h2 className="font-['Lato'] text-zinc-800 text-4xl font-black mb-5">
                All Products
                </h2>
                <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
                className="border border-cyan-800 rounded-xl font-['Lato'] text-zinc-800 font-bold  shadow-xl bg-zinc-300 outline-none "
                >
                    <option>Select  sort type  </option>
                    <option value="cheapest">Cheapest</option>
                    <option value="mostExpersive">Most Expensive</option>
                </select>

                </div>
                <div  className="w-full grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4  gap-5 px-5 lg:px-[100px] py-[50px]">
                    {sortedProducts.map((product) => (
                        <ProductCard key={product.id} 
                        product={product}
                        onAddToCart={onAddToCart}
                        />
                    ))} 

                </div>
            </div>
     )
 }