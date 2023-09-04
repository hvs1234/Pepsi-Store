import React from 'react'
import './style.css'
import logo from './images/logo.png'
import { NavLink } from 'react-router-dom'
import pepsi from './images/pepsi1.png'

const Home = () => {
  return (
    <>
        <div className="home-body" id='home'>
          <div className="home-section-1">
            <div className="navbar home-navbar">
              <img src={logo} alt="logo" className='home-logo'/>
              <span>Pepsi Store</span>
              <div className="nav home-nav">
                <a className='link home-link' href="#home">Home</a>
                <a className='link home-link' href="#products">Products</a>
                <NavLink className='link home-link' to={'/Buy'}>Buy</NavLink>
              </div>
            </div>

            <div className="home-container">
              <div className="home-content">
                <h1>Welcome To Our Pepsi Store</h1>
                <p>If we eat any food, or drink any beverage, we must recite a blessing over them before and after. When it comes to fruit juice, it's always better to eat whole fruit because it contains fiber -- which helps you feel full longer. Try not to drink more than 1 cup (8 ounces) of  100% juice each day. You can tell by the product label if a juice is 100% fruit juice or not. Water has no calories and no sugar. Water is always a good choice, but other healthier options include milk; 100% juice; and other unsweetened beverages such as unsweetened tea or coffee, sparkling water and water infused with fruit or herbs.</p>
                <button className='view'><NavLink className='view-link' to={'/Product'}>View More Products</NavLink></button>
              </div>
              <div className="home-img">
                <img src={pepsi} alt="pepsi" />
              </div>
            </div>
          </div>

          <div className="home-section-2" id="products">
            <div className="product-content">
              <h1>Products</h1>
              <h3>Our Products</h3>
            </div> 
            <br />
            <hr />
            <div className="product-box-1">
              <div className="box-1">
                <h1>Bevrages</h1>
                <p>Be your first expression, with chilled drinks</p>
                <button className='get-btn'><NavLink className='get-link' to={'/Buy'}>Get Now</NavLink></button>
              </div>
              <p className='product-para-1'>Cold drinks are very useful in an extremely hot climate. They help to drive off our thirst in the summer season. The cold drinks that are available on the market contain sweeteners and preservatives. Frequent consumption of these cold drinks is not good for our health.</p>
            </div>
            <div className="product-box-1">
              <p className='product-para-2'>Eating snacks is every teenager's favorite. I also like eating snacks such as potato chips, chocolate and candy. One important thing we should know is that eating snacks is harmful to our bodies. Eating snacks is a bad habit for teenagers. If you eat a lot of snacks, you will become a fat boy or girl.</p>
              <div className="box-2">
                <h1>Snacks</h1>
                <p>Be your first expression, with twist snacks</p>
                <button className='get-btn'><NavLink className='get-link' to={'/Buy'}>Get Now</NavLink></button>
              </div>
            </div>
            <div className="product-box-1">
              <div className="box-3">
                <h1>Mocktails</h1>
                <p>Be your first expression, with relish mocktails</p>
                <button className='get-btn'><NavLink className='get-link' to={'/Buy'}>Get Now</NavLink></button>
              </div>
              <p className='product-para-3'>Mocktails are simply cocktails without the liquor - they use a variety of tasty ingredients to create a flavor fusion, providing a sophisticated beverage sans alcohol. Whether you imbibe or not, mocktails can be a treat for any social gathering or night in.</p>
            </div>
          </div>

          <div className="footer">
            <h1>©️ Sponsered By | Harshvardhan Sharma 🖊️</h1>
          </div>
        </div>
    </>
  )
} 

export default Home