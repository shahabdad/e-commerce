// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
//       setProduct(res.data);
//     });
//   }, [id]);

//   if (!product) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-10">
//       <Link to="/" className="text-cyan-700 font-bold">&larr; Back to Products</Link>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
//         {/* Image */}
//         <img
//           src={product.image}
//           alt={product.title}
//           className="h-96 object-contain mx-auto"
//         />

//         {/* Details */}
//         <div>
//           <h1 className="text-3xl font-bold text-zinc-800">{product.title}</h1>
//           <p className="text-xl text-cyan-700 font-semibold mt-3">
//             ${product.price}
//           </p>
//           <p className="mt-5 text-zinc-600">{product.description}</p>
//           <p className="mt-5 text-yellow-500 font-bold">
//             ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
//           </p>

//           <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios"; 

export default function ProductDetail() { 
  const { id} = useParams();
const [product, setProduct] = useState(null); 

useEffect(() => { 
  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => { 
    setProduct(res.data); 
   }); 
},[id]); 
 if (!product) return <p className="text-center mt-10 " > Loading...</p>; 

 return ( 
  <div className="max-w-5xl mx-auto  p-6  md:p-10"> 
  <Link  to="/" className="text-cyan-700 font-bold">&larr; Back to Products</Link>
  
  <div  className="grid grid-cols-1  md:grid-cols-2 gap-10 mt-6"> 
    {/* Image */}
    <div className="flex justify-center items-center"> 
 <img 
 src={product.image}
 alt={product.title} 
 className="h-[400px] object-contain  rounded-lg shadow-md" 
 />
    </div>

    {/* Deatils */}
    <div >
      <h1 className="text-3xl font-bold text-zinc-800" > {product.title}</h1> 
          {/* Price and  Discount */}
          <div className="flex  items-center gap-3    mt-3 " > 
            <span className="text-red-500 text-2xl font-bold">${product.price}</span>
            <span className="text-zinc-500 line-through text-lg">$100 </span> 
            <span className="px-2 py-1 bg-red-500 text-white text-sm font-bold rounded">-50%</span>
          </div>
          {/* Color Options */}
          <div className="mt-6"> 
          <p className="font-semibold text-zinc-800">Color:</p>
          <div className="w-6 h-6 border-2 border-cyan-800 rounded-full flex items-center  justify-center"> 
            <div className="w-4 h-6 border rounded-full  bg-blue-300" > </div>
             </div>

            <div className="w-6 h-6 border  rounded-full bg-blue-300"> </div> 
            <div className="w-6 h-6 border   rounded-full bg-yellow-300"></div>
            <span  className="text-sm text-zinc-600">Black</span>
            </div>
    </div>
 
         {/* Delivery & Return */}
        <div className="mt-6 border-t"> 
        <div  className="flex justify-between items-center border-b py-3" > 
          <span className="font-bold text-zinc-800">Delivery</span>
          <span  className="text-zinc-600">+</span>
          </div> 
          <div className="flex  justify-between items-center border-b py-3">
           <span className="font-bold text-zinc-800"> Return </span> 
           <span className="text-zinc-600"> 
             +
           </span>
            </div> 
        </div>

        {/* Shere */}
        <div className="mt-6  flex items-center gap-4" > 
          <span  className="font-bold text-zinc-800" >Share:</span>
          <button  className="hover:text-cyan-700">👍</button>
          <button  className="hover:text-cyan-700">🐦</button>
          <button  className="hover:text-cyan-700">📌</button>
          </div > 

          {/* Quantity & Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <div  className="flex items-center bg-gray-100 rounded-lg" >
              <button className="text-cyan-700 font-bold">+</button>
          </div>
        <button className="bg-cyan-100 text-cyan-700 px-5 py-2 rounded-lg flex items-center gap-2 font-bold hover:bg-cyan-700 hover:text-white transition">
              🛒 Add to Cart
            </button>
            <button className="bg-cyan-100 text-red-500 p-3 rounded-lg">❤️</button>
        
            </div>

                      {/*Payment Icons */}

            <div className="mt-6 flex gap-4">
              <img 
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" 
              alt="Visa"
              className="h-10"
              />
              <img 
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg"
              alt="PayPal"
              className="h-10"
              /> 

              </div> 
  </div>
  </div>
 )
} 