import React, { useState, useContext } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { HomeContext } from '../../Context/HomeContext'

const Navbar = () => {

    const [menu,setMenu] = useState("home");
    const {getCartItemsCount} = useContext(HomeContext);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Khareedo</p>
      </div>
      <ul className="nav-menu">
         <li onClick={() => {setMenu("home")}}><Link style={{textDecoration:"none"}} to="/">Home</Link> {menu==="home"?<hr/>:<></>}</li>
         <li onClick={() => {setMenu("men")}}><Link style={{textDecoration:"none"}} to="/men">Men</Link>{menu==="men"?<hr/>:<></>}</li>
         <li onClick={() => {setMenu("women")}}><Link style={{textDecoration:"none"}} to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
         <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration:"none"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
            <button>Login</button>
        </Link>
        <Link to="/cart">
            <img src={cart_icon} alt="cart" />
        </Link>
        <div className="nav-cart-count">{getCartItemsCount()}</div>
      </div>
    </div>
  )
}

export default Navbar
