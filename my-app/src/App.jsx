import { useState } from 'react'
import './App.css'
import Navbar from '../Component/Navbar'

function App() {


  return (
    <> 
      <Navbar />
      <div className="pt-5"> {/* padding so content not hidden */}
        <h1 className="text-2xl">Welcome</h1>
      </div>
    </>
  )
}

export default App
