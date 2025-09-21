import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Description from "./Description"; 
import axios from "axios";
// import gsap from "gsap";

export default function ProductDetail(onAddToCart) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
      // Add discounted price
      const discounted = (res.data.price - res.data.price * 0.3).toFixed(2);
      setProduct({ ...res.data, discountedPrice: discounted });
    });
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-10">
      {/* Back link */}
      <Link
        to="/"
        className="text-cyan-700 font-bold hover:underline flex items-center mb-6"
      >
-        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="flex justify-center items-center bg-gray-50 rounded-lg p-6 shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="h-[400px] object-contain mix-blend-multiply"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          {/* Price with Discount */}
          <div className="flex items-center gap-3 mt-4">
            <span className="text-red-600 text-2xl font-bold">
              ${product.discountedPrice}
            </span>
            <span className="text-gray-500 line-through text-lg">
              ${product.price}
            </span>
            <span className="px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
              -30%
            </span>
          </div>

          {/* Rating */}
          <p className="mt-3 text-yellow-500 font-semibold">
            ⭐ {product.rating?.rate} / 5 ({product.rating?.count} reviews)
          </p>

          {/* Color Options */}
          <div className="mt-6">
            <p className="font-semibold text-gray-700 mb-2">Available Colors:</p>
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-black border-2 border-gray-400 cursor-pointer hover:scale-110 transition"></div>
              <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-gray-400 cursor-pointer hover:scale-110 transition"></div>
              <div className="w-7 h-7 rounded-full bg-yellow-400 border-2 border-gray-400 cursor-pointer hover:scale-110 transition"></div>
            </div>
          </div>

          {/* Delivery & Return */}
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between items-center border-b py-3">
              <span className="font-bold text-gray-800">Delivery</span>
              <span className="text-gray-600">+ Free Shipping</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-bold text-gray-800">Return</span>
              <span className="text-gray-600">30 Days Easy Return</span>
            </div>
          </div>

          {/* Quantity & Buttons */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                }
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
              >
                -
              </button>
              <span className="px-5">{quantity}</span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="px-3 py-2 bg-gray-100 hover:bg-gray-200"
              >
                +
              </button>
            </div>

            <button 
                onClick={onAddToCart}
            className="bg-cyan-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-bold hover:bg-cyan-700 transition shadow-md">
              🛒 Add to Cart
            </button>

            <button className="bg-red-100 text-red-600 p-3 rounded-lg hover:bg-red-200 transition">
              ❤️
            </button>
          </div>

          {/* Show Total Price */}
          <p className="mt-4 text-gray-800 font-semibold">
            Total: $
            {(product.discountedPrice * quantity).toFixed(2)}
          </p>

          {/* Payment Options */}
          <div className="mt-8 flex gap-6 items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-8"
            />
         
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="Mastercard"
              className="h-8"
/>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg"
              alt="PayPal"
              className="h-8"
            />
          </div>
        </div>
      </div>

      {/* Description */}
    
      <Description text={product.description} />

    </div>
  );
}
