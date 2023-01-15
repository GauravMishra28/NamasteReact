import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../cart/Cart'
import Header from '../components/Header'
import HomePage from '../components/HomePage'

const AllRoutes = () => {
  return (
    <div>
        <Header/>
        <Routes>
        <Route path="/"  element={<HomePage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes