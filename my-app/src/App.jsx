import { useState } from 'react'
import './App.css'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Products from '../Component/Products'

function App() {


  return (
    <> 
      <Navbar />
      <div className=""> {/* padding so content not hidden */}
        <Hero />
        
      <Products />

      </div>
    </>
  )
}

export default App
