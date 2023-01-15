import React from 'react'
import "../App.css"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useContext } from 'react';
import { AppContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const {
    state: { cart }} = useContext(AppContext);
    const navigate= useNavigate()
  return (
    <div className="navbar">
        <div onClick={()=>{navigate("/")}}><h3>TeeRex Store</h3></div>
        <div onClick={()=>{navigate("/cart")}} className="cart">
          <div>
             <p>{cart.length}</p>
          </div>
          <div>
          <AiOutlineShoppingCart/>
            </div>
        </div>
    </div>
  )
}

export default Header