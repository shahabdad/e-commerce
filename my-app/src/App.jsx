import { useState } from 'react'
import './App.css'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'

function App() {


  return (
    <> 
      <Navbar />
      <div className="pt-5"> {/* padding so content not hidden */}
        <Hero />
        <h1 className="text-2xl">Welcome</h1>
      </div>
    </>
  )
}

export default App
