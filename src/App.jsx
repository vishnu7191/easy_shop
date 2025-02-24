import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchProducts } from './Components/store'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Bill from './Components/Bill'
import { ToastContainer } from 'react-toastify'
import OrderHistory from './Components/OrderHistory'


const App = () => {


  return (
    <>
    <BrowserRouter>
    <ToastContainer/>
      <Nav/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Products/>} path='/products' />
        <Route  element={<Cart/>}  path='/cart'/>
        <Route  element={<Bill/>}  path='/bill'/>
        <Route  element={<OrderHistory/>} path='/orderhistory' />
      </Routes>

    
    </BrowserRouter>

    </>
  )
}

export default App