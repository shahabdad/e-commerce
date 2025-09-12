import { useState } from 'react'
import './App.css'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Products from '../Component/Products'

function App() {
const [cartCount, setCartCount]  = useState(0); 
const  handleAddToCart   = () =>  { 
  setCartCount((prev) => prev + 1); 
}
  return (
    <> 
      <Navbar    cartCount={cartCount }/>
      <div className=""> {/* padding so content not hidden */}
        <Hero     />
        
      <Products  />

      </div>
    </>
  )
}

export default App
