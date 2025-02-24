import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './Components/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Bill from './Components/Bill'

const App = () => {


  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products' />
        <Route  element={<Cart/>}  path='/cart'/>
        <Route  element={<Bill/>}  path='/bill'/>
      </Routes>

    
    </BrowserRouter>

    </>
  )
}

export default App