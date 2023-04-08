import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ()=> {
     const username = localStorage.getItem('email');
    console.log(username)


    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <>
         <header className="header">
                <div className="container">
                    <div className="categories d_flex">
                        <div className="categories d_flex">
                            <span className="fa fa-plus-square-o"></span>
                            <h4>
                                Categories <i className="fa fa-chevron-down"></i>
                            </h4>
                        </div>
                        <div className="navlink">
                            <ul className={MobileMenu? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                                 {username ? (
                                    <li><span id="usernm">{username}</span></li>
                                ) : (
                                    <li><a href="/login">Login</a></li>
                                )} 

                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/products">Shop</Link>
                                </li>
                                <li>
                                    <Link to="/track">Track My Order</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                    
                                    
                                                                                        
                           </ul>
                            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                                {
                                    MobileMenu? <i className="fa fa-times close home-btn"></i> :
                                    <i className="fa fa-bars open"></i>
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar




