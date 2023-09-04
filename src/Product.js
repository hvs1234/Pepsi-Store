import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import logo from './images/logo.png'
import Productbox from './Productbox'
import Pepsi from './API'

const Product = () => {
  const [productdata] = React.useState(Pepsi)  
  return (
    <>
        <div className="product-body">
            <div className="product-navbar">
                <img src={logo} alt="logo" />
                <div className="product-nav">
                    <NavLink className='navlink' to={'/'}>Home</NavLink>
                    <NavLink className='navlink' to={'/Buy'}>Buy</NavLink>
                </div>  
            </div>
            <Productbox productdata = {productdata}/>
            <div className="footer">
                <h1>©️ Pepsi Store | All Right Reserved 🖇️</h1>
            </div>
        </div>
    </>
  )
}

export default Product