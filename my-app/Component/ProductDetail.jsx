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
  axios.get('https://fakestoreapi.com/products/${id}').
})
}