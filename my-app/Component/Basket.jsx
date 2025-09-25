import React from "react";

export default function Basket({ cartItems, setCartItems }) {
  // Change item quantity
  const handleQuantityChange = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "increase"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Remove item from basket
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Basket</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your basket is empty.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b text-left">
              <th className="pb-3">PRODUCT</th>
              <th className="pb-3">PRICE</th>
              <th className="pb-3">QTY</th>
              <th className="pb-3">UNIT PRICE</th>
              <th className="pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="py-4 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <span className="font-semibold text-gray-700">
                    {item.title}
                  </span>
                </td>
                <td className="text-gray-600">${item.discountedPrice}</td>
                <td>
                  <div className="flex items-center border rounded-lg overflow-hidden w-fit">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="text-gray-800 font-semibold">
                  ${(item.discountedPrice * item.quantity).toFixed(2)}
                </td>
                <td>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <div className="text-right mt-6">
          <h2 className="text-xl font-bold text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </h2>
        </div>
      )}
    </div>
  );
}
