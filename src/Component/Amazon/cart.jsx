import logo from './asset/logo.png'
import { FaLocationDot } from 'react-icons/fa6';
import Flag from 'react-world-flags'
import {FaShoppingCart} from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import './cart.css';

export const Cart =() =>{
      const [cart, setCart] = useState([]);

  const product = {
    id: 1,
    name: "Apple iPhone 15 (128 GB) - Pink",
    image:"https://example.com/iphone15.png",
    bought: "5K+ bought in past month",
    price: 59900,
    mrp: 69900,
    discountPercent: 14,
    extraInfo: "Up to 5% back with Amazon Pay ICICI card",
    delivery: "FREE delivery Sat, 31 May",
    service: "Installation",
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      toast.info(`${product.name} is already in your cart.`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} added to cart!`);
  };



    return(
        <>
        <div>
        <nav className='navbar'>
            <div className='navdiv'>
                <div className='amazonIcon'>
                    <a href="https://www.amazon.in/ref=nav_logo" target='_blank' >
                        <span>
                            <img src={logo} alt="" className='logo' />
                            {/* <h6 className='in'>.in</h6> */}
                        </span>
                    </a>
                </div>
                <div>
                    <a className='Adeliver' href="https://www.google.co.in/maps/place/Sagar,+Madhya+Pradesh/@23.8375587,78.7074266,13z/data=!3m1!4b1!4m6!3m5!1s0x3978d14a2cf591af:0xf446eaa2b5281370!8m2!3d23.838805!4d78.7378068!16zL20vMDNuNXlr?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"><span className='Deliver'>Deliver to Aniket</span>
                    <br />
                    <FaLocationDot/>
                    <span className='Location' >Sagar 470002</span>
                    </a>
                </div>            
                <div className='searchdiv'>
                    <button className='all'>All
                        <span>&#9662;</span> 
                    </button>
                    <input type="search" className='searchbar'/>
                    <button className='SearchIcon' ><FaSearch size={20} /></button>
                </div>
                <div className='flag'>
                    <Flag className='flagicon' code="IN"  />    
                    <span className='EN'>EN</span>
                </div>
                <div className='Hello'>
                    <span className='helloText' >Hello,Ani</span>
                    <br />
                    <span className='accounttext' >Accounts & Lists</span>
                    <span className='Helloicon'>&#9662;</span>
                </div>
                <div className='Hello' >
                    <span className='helloText'>Return</span>
                    <br />
                    <span className='accounttext'>& Orders</span>
                </div>
                <div className='cart'>
                    <FaShoppingCart size ="35" color ="white" className='carticon'/>
                </div>  
            </div>
        </nav>
        </div>
        <section >
          <div style={{marginTop:"7vh"}}>
            <h2 style={{marginLeft:"600px"}}>Cart Item</h2>
            {cart.length === 0?(
                <p>your cart is empty.</p>
                ):(
                    cart.map((item,index) => (
                        <>
                        <div style={{display:"inline-flex",marginTop:"10px"}}>
                        <div key={index} style={{marginLeft:"300px"}}>
                            <img src={item.image} alt={item.name} style={{height:"250px"}}/>
                        </div>
                        <div style={{marginLeft:"20px"}}>    
                            <h4>{item.name}</h4>
                            <p>Price : ₹ {item.price}</p>
                            <p><strike> ₹ {item.mrp}</strike>&nbsp; {item.price}
                            <span>{item.discountPercent}% off</span>
                            </p>
                        </div>
                        </div>
                        </>
                    ))
                )}
          </div>
        </section>
    </>
    )
}
