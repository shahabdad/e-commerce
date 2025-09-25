import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Products from "../Component/Products";
import ProductDetail from "../Component/ProductDetail";
import Basket from "../Component/Basket";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // ✅ pass product as parameter
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: product.quantity }];
      }
    });
  };

  return (
    <Router>
      
      <Navbar
        cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      />
      <div className="pt-16">
        <Routes>
  
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products onAddToCart={handleAddToCart} />
              </>
            }
          />


          <Route
            path="/product/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />

        
          <Route
            path="/basket"
            element={<Basket cartItems={cartItems} setCartItems={setCartItems} />}
          />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
