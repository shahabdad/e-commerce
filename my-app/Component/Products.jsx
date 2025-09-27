// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import ProductCard from "./ProductCard";

// export default function Products({ onAddToCart }) {
//   const [products, setProducts] = useState([]); 
//   const [sortType, setSortType] = useState("default");
//  const [visibleCount, setVisibleCount] = useState(20)
//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products").then((res) => {
//       setProducts(res.data);
//     });
//   }, []);

//   const sortedProducts = [...products].sort((a, b) => {
//     if (sortType === "cheapest") return a.price - b.price;
//     if (sortType === "mostExpensive") return b.price - a.price;
//     return 0;
//   });

//   return (
//     <div>
//       <div className="text-center mt-[50px]">
//         <h2 className="font-['Lato'] text-zinc-800 text-4xl font-black mb-5">
//           All Products
//         </h2>
//         <select
//           value={sortType}
//           onChange={(e) => setSortType(e.target.value)}
//           className="border border-cyan-800 rounded-xl font-['Lato'] text-zinc-800 font-bold shadow-xl bg-zinc-300 outline-none "
//         >
//           <option value="default">Select sort type</option>
//           <option value="cheapest">Cheapest</option>
//           <option value="mostExpensive">Most Expensive</option>
//         </select>
//       </div>

//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 lg:px-[100px] py-[50px]">
//         {sortedProducts.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onAddToCart={onAddToCart}
//           />
//         ))}
//       </div>
//   {visibleCount < sortedProducts.length && (
//         <div className="flex justify-center pb-10">
//           <button
//             onClick={handleShowMore}
//             className="px-6 py-2 bg-green-600 text-white font-semibold rounded-xl shadow hover:bg-green-700"
//           >
//             MORE
//           </button>
//         </div>
//       )}
      
//     </div>
    
//   );
// }



import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [sortType, setSortType] = useState("default");
  const [visibleCount, setVisibleCount] = useState(12); // show first 20

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "cheapest") return a.price - b.price;
    if (sortType === "mostExpensive") return b.price - a.price;
    return 0;
  });

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div>
      <div className="text-center mt-[50px]">
        <h2 className="font-['Lato'] text-zinc-800 text-4xl font-black mb-5">
          All Products
        </h2>
        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border border-cyan-900 rounded-xl  pt-1  pb-1 font-['Lato'] text-zinc-600 font-bold shadow-xl bg-zinc-300 outline-none "
        >
          <option value="default">Select sort type</option>
          <option value="cheapest">Cheapest</option>
          <option value="mostExpensive">Most Expensive</option>
        </select>
      </div>

      {/* Products Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5 lg:px-[100px] py-[50px]">
        {sortedProducts.slice(0, visibleCount).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {/* "MORE" Button */}
      {visibleCount < sortedProducts.length && (
        <div className="flex justify-center pb-10">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-blue-900  hover:bg-blue-800 text-white  rounded-xl shadow hover:bg-blue-200"
          > 
            Show More Products
          </button>
        </div>
      )}
    </div>
  );
}
