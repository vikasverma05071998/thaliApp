import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Checkout from './Component/Checkout'
import Home from './Component/Home'
import Thali from './Component/Thali'
import logo from './image/logo.jpg'


import './App.css'


export default function App() {
  return (
    <div className="Containor">



      <div className='heading'>
        <img id='imagee' src={logo} alt={logo}/>
        <h1 id='comp'>Welcome to thali app</h1>
        
        <Link to='' id='head'>Home</Link>
        <Link to='./Thali' id='dash'>Thali</Link>
        <Link to='./Checkout' id='use'>Checkout</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Thali' element={<Thali />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
    </div>
  )
}
