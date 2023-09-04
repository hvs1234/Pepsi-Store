import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './images/logo.png'
import './style.css'

const Buy = () => {
  return (
    <>
        <div className="buy-body">
          <div className="product-navbar">
            <img src={logo} alt="logo" />
            <div className="product-nav">
              <NavLink className='navlink' to={'/'}>Home</NavLink>
              <NavLink className='navlink' to={'/Product'}>View Products</NavLink>
              <NavLink className='navlink' to={'/Buy'}>Buy</NavLink>
            </div>  
          </div>

          <div className="buy-form">
            <form className='form' action="https://formsubmit.co/3469harshsharma@gmail.com" method='POST' target='_blank'>
              <div className="buy-box">
                <label htmlFor="Name">Enter your First Name</label>
                <input name='First Name' type="text" placeholder='Your First Name' required/>
              </div>
              <div className="buy-box">
                <label htmlFor="Name">Enter your Last Name</label>
                <input name='Last Name' type="text" placeholder='Your Last Name' required/>
              </div>
              <div className="buy-box">
                <label htmlFor="Email">Enter your Valid Email</label>
                <input name='Email Address' type="email" placeholder='Your Valid Email' required/>
              </div>
              <div className="buy-box">
                <label htmlFor="Name">Enter your Valid Phone</label>
                <input name='Phone Number' type="phone" placeholder='Your Valid Phone' required/>
              </div>
              <div className="buy-box">
                <label htmlFor="Name">Give Your Order And Valid Address Here</label>
                <textarea name="Order" cols="30" rows="10" placeholder='Your Order And Valid Address' required></textarea>
                <button type='submit'>Get Now</button>
              </div>
            </form>
          </div>

          <div className="footer">
            <h1>©️ Pepsi Store | All Right Reserved 👁️</h1>
          </div>  
        </div>
    </>
  )
}

export default Buy