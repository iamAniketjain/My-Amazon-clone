import React from 'react'
import logo from './asset/logo.png'
import iphonePink from './asset/iphonePink.webp'
import iphoneblue from './asset/iphoneblue.webp'
import iphonegrey from './asset/iphonegrey.webp'
import iqoo from './asset/iqoo.webp'
import iqoo2 from './asset/iqoo2.webp'
import iqoo3 from './asset/iqoo3.webp'
import oneplus from './asset/oneplus.webp'
import samsung from './asset/samsung.webp'
import Flag from 'react-world-flags'
import {FaShoppingCart} from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaBars } from 'react-icons/fa';
import './Main.css';
import { useNavigate } from 'react-router-dom';

export const Main =() => {
    const handleAddToCart = (Product) =>{
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        existingCart.push(Product);
        localStorage.setItem("cart",JSON.stringify(existingCart))
        alert(`Product added to cart!`)
    }
    const Navigate = useNavigate();

    return(
        <>
        <nav>
            <div className='navdiv'>
                <div className='amazonimage'>
                    <a href="https://www.amazon.in/ref=nav_logo" target='_blank' >
                        <span>
                            <img src={logo} alt="" className='amazonimage' />
                            {/* <h6 className='amazontext'>.in</h6>  */}
                        </span>
                    </a>
                </div>
                <div className='Deliver' >
                    <a className='Adeliver' href="https://www.google.co.in/maps/place/Sagar,+Madhya+Pradesh/@23.8375587,78.7074266,13z/data=!3m1!4b1!4m6!3m5!1s0x3978d14a2cf591af:0xf446eaa2b5281370!8m2!3d23.838805!4d78.7378068!16zL20vMDNuNXlr?entry=ttu&g_ep=EgoyMDI1MDUxNS4wIKXMDSoASAFQAw%3D%3D"><span className='amazonimage' >Deliver to Aniket</span>
                    <br />
                    <FaLocationDot/>
                    <span className='locationicon' >Sagar 470002</span>
                    </a>
                </div>            
                <div className='alltext'>
                    <button className='all'>All
                        <span>&#9662;</span> 
                    </button>
                    <input type="search" className='searchbox' placeholder='Mobiles Phones'/>
                    <button className='SearchIcon'><FaSearch size={20} /></button>
                </div>
                <div className='flagdiv'>
                    <Flag code="IN" className='flagicon'/>    
                    <span className='EN'>EN</span>
                </div>
                <div className='Hellodiv'>
                    <span className='Hellotext' >Hello,Ani</span>
                    <br />
                    <span className='AccountText' >Accounts & Lists</span>
                    <span className='dropdownIcon' >&#9662;</span>
                </div>
                <div className='Hellodiv'>
                    <span className='Hellotext' >Return</span>
                    <br />
                    <span className='AccountText'>& Orders</span>
                </div>
                <div onClick={() => Navigate("/cart")} className='cartdiv'>
                    <FaShoppingCart className='carticon' size ="35" color ="white"/>
                </div>  
            </div>
       </nav>
       <section>
            <div className='secdiv'>
                <div className='Baricondiv' >
                    <FaBars className='Baricon' />
                    <span className='bartext'>All</span>
                </div>
                <div className='secdivdiv' style={{marginTop:"10px",marginLeft:"20px"}}>
                    <span style={{color:"white"}}>Customer Service</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>Prime</span>
                    <span className='secdivcontent'>&#9662;</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>Amazon Pay</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>MX Player</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>Sell</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>Gift Cards</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>Buy Again</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>AmazonBasics</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>Books</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>Gift Ideas</span>
                </div>
                <div className='secdivdiv'>
                    <span className='secdivcontent'>Home Improvement</span>
                </div>
            </div>
            <div className='products'>
                <div className='divspace'>
                    <img className='productimage' src={iphonePink} alt=""/>
                </div>    
                <div className='textdiv'>
                    <h3>Apple iPhone 15 (128 GB) - Pink</h3> 
                    <h4>5K+ bought in past month</h4>
                    <span>₹59,900</span>
                    <span>M.R.P:</span>
                    <span><strike> ₹69,900 </strike> (14% off)</span>
                    <br />
                    <span>Up to 5% back with Amazon Pay ICICI card</span>
                    <br />
                    <span>FREE delivery Sat, 31 May</span>
                    <br />
                    <span>Service: Installation</span>
                    <br />
                    <button className='productaddtocart' onClick={() => handleAddToCart({
                        id : 1,
                        name : "Apple iPhone 15 (128 GB) - Pink",
                        price : 59900,
                        image : iphonePink,
                        mrp : "₹69,900",
                        offer : "14% off"
                    })}>Add to cart</button>
                </div>
            </div>
            <div className='products'>
                <div className='divspace'>
                    <img className='productimage' src={iphoneblue} alt="" />
                </div>    
                <div className='textdiv'>
                    <h3>Apple iPhone 15 (128 GB) - Pink</h3> 
                    <h4>5K+ bought in past month</h4>
                    <span>₹59,900</span>
                    <span>M.R.P:</span>
                    <span><strike> ₹69,900 </strike> (14% off)</span>
                    <br />
                    <span>Up to 5% back with Amazon Pay ICICI card</span>
                    <br />
                    <span>FREE delivery Sat, 31 May</span>
                    <br />
                    <span>Service: Installation</span>
                    <br />
                    <button className='productaddtocart' onClick={() => handleAddToCart({
                        id : 2,
                        name : "Apple iPhone 15 (128 GB) - Pink",
                        price : 59900,
                        image : iphonePink,
                        mrp : "₹69,900",
                        offer : "14% off"
                    })}>Add to cart</button>
                </div>
            </div>
            <div className='products'>
                <div className='divspace'>
                    <img className='productimage' src={samsung} alt="" />
                </div>    
                <div className='textdiv'>
                    <h3>Apple iPhone 15 (128 GB) - Pink</h3> 
                    <h4>5K+ bought in past month</h4>
                    <span>₹59,900</span>
                    <span>M.R.P:</span>
                    <span><strike> ₹69,900 </strike> (14% off)</span>
                    <br />
                    <span>Up to 5% back with Amazon Pay ICICI card</span>
                    <br />
                    <span>FREE delivery Sat, 31 May</span>
                    <br />
                    <span>Service: Installation</span>
                    <br />
                    <button className='productaddtocart' onClick={() => handleAddToCart({
                        id : 3,
                        name : "Apple iPhone 15 (128 GB) - Pink",
                        price : 59900,
                        image : iphonePink,
                        mrp : "₹69,900",
                        offer : "14% off"
                    })}>Add to cart</button>
                </div>
            </div>
            <div className='products'>
                <div className='divspace'>
                    <img className='productimage' src={iphonegrey} alt="" />
                </div>    
                <div className='textdiv'>
                    <h3>Apple iPhone 15 (128 GB) - Pink</h3> 
                    <h4>5K+ bought in past month</h4>
                    <span>₹59,900</span>
                    <span>M.R.P:</span>
                    <span><strike> ₹69,900 </strike> (14% off)</span>
                    <br />
                    <span>Up to 5% back with Amazon Pay ICICI card</span>
                    <br />
                    <span>FREE delivery Sat, 31 May</span>
                    <br />
                    <span>Service: Installation</span>
                    <br />
                    <button className='productaddtocart' onClick={() => handleAddToCart({
                        id : 4,
                        name : "Apple iPhone 15 (128 GB) - Pink",
                        price : 59900,
                        image : iphonePink,
                        mrp : "₹69,900",
                        offer : "14% off"
                    })}>Add to cart</button>
                </div>
            </div>
            <div className='products'>
                <div className='divspace'>
                    <img className='productimage' src={iqoo3} alt="" />
                </div>    
                <div className='textdiv'>
                    <h3>Apple iPhone 15 (128 GB) - Pink</h3> 
                    <h4>5K+ bought in past month</h4>
                    <span>₹59,900</span>
                    <span>M.R.P:</span>
                    <span><strike> ₹69,900 </strike> (14% off)</span>
                    <br />
                    <span>Up to 5% back with Amazon Pay ICICI card</span>
                    <br />
                    <span>FREE delivery Sat, 31 May</span>
                    <br />
                    <span>Service: Installation</span>
                    <br />
                    <button className='productaddtocart' onClick={() => handleAddToCart({
                        id : 5,
                        name : "Apple iPhone 15 (128 GB) - Pink",
                        price : 59900,
                        image : iphonePink,
                        mrp : "₹69,900",
                        offer : "14% off"
                    })}>Add to cart</button>
                </div>
            </div>
            <div className='products'>
                <div className='divspace'>
                    <img className='productimage' src={iqoo2} alt="" />
                </div>    
                <div className='textdiv'>
                    <h3>Apple iPhone 15 (128 GB) - Pink</h3> 
                    <h4>5K+ bought in past month</h4>
                    <span>₹59,900</span>
                    <span>M.R.P:</span>
                    <span><strike> ₹69,900 </strike> (14% off)</span>
                    <br />
                    <span>Up to 5% back with Amazon Pay ICICI card</span>
                    <br />
                    <span>FREE delivery Sat, 31 May</span>
                    <br />
                    <span>Service: Installation</span>
                    <br />
                    <button className='productaddtocart' onClick={() => handleAddToCart({
                        id : 6,
                        name : "Apple iPhone 15 (128 GB) - Pink",
                        price : 59900,
                        image : iphonePink,
                        mrp : "₹69,900",
                        offer : "14% off"
                    })}>Add to cart</button>
                </div>
            </div>
            <div className='products'>
                <div className='divspace'>
                    <img className='productimage' src={oneplus} alt="" />
                </div>    
                <div className='textdiv'>
                    <h3>Apple iPhone 15 (128 GB) - Pink</h3> 
                    <h4>5K+ bought in past month</h4>
                    <span>₹59,900</span>
                    <span>M.R.P:</span>
                    <span><strike> ₹69,900 </strike> (14% off)</span>
                    <br />
                    <span>Up to 5% back with Amazon Pay ICICI card</span>
                    <br />
                    <span>FREE delivery Sat, 31 May</span>
                    <br />
                    <span>Service: Installation</span>
                    <br />
                    <button className='productaddtocart' onClick={() => handleAddToCart({
                        id : 7,
                        name : "Apple iPhone 15 (128 GB) - Pink",
                        price : 59900,
                        image : iphonePink,
                        mrp : "₹69,900",
                        offer : "14% off"
                    })}>Add to cart</button>
                </div>
            </div>
            <div className='products'>
                <div className='divspace'>
                    <img className='productimage' src={iqoo} alt="" />
                </div>    
                <div className='textdiv'>
                    <h3>Apple iPhone 15 (128 GB) - Pink</h3> 
                    <h4>5K+ bought in past month</h4>
                    <span>₹59,900</span>
                    <span>M.R.P:</span>
                    <span><strike> ₹69,900 </strike> (14% off)</span>
                    <br />
                    <span>Up to 5% back with Amazon Pay ICICI card</span>
                    <br />
                    <span>FREE delivery Sat, 31 May</span>
                    <br />
                    <span>Service: Installation</span>
                    <br />
                    <button className='productaddtocart' onClick={() => handleAddToCart({
                        id : 8,
                        name : "Apple iPhone 15 (128 GB) - Pink",
                        price : 59900,
                        image : iphonePink,
                        mrp : "₹69,900",
                        offer : "14% off"
                    })}>Add to cart</button>
                </div>
            </div>
            
       </section>
    </>)
}