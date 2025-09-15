// import { useState } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from '../Component/Navbar'
// import Hero from '../Component/Hero'
// import Products from '../Component/Products'

// function App() {
// const [cartCount, setCartCount]  = useState(0); 
// const  handleAddToCart   = () =>  { 
//   setCartCount((prev) => prev + 1); 
// }
//   return (
//     <> 
//       <Navbar    cartCount={cartCount }/>
//       <div className=""> {/* padding so content not hidden */}
//         <Hero     />
        
//       <Products  />

//       </div>
//     </>
//   )
// }

// export default App


import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Products from "../Component/Products";
import ProductDetail from "../Component/ProductDetail"; // 👈 new import

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <div className="pt-16">
        {/* 👇 Define routes */}
        <Routes>
          {/* Home page with Hero + Products */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Products onAddToCart={handleAddToCart} />
              </>
            }
          />

          {/* Single product detail page */}
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
