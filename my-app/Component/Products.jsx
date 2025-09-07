import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

 export default function Products()  { 
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

    
 }