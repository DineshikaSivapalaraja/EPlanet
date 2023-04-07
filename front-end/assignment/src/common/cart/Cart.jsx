import React from "react";
import "./style.css";
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Cart = ({ addToCart, decreaseQty}) => {
    const userId = localStorage.getItem('userId');    
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cart/items?cartId=3'); // replace with your API endpoint
        setCartItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCartItems();
  }, []);

  const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.product.price, 0);
    return (
        <>
            <section className="cart-items">
                <div className="container d_flex">
                    <div className='cart-details'>
                    {cartItems.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

                    {cartItems.map((item) => {
                        const productQty = item.product.price * item.quantity
                        return(
                            <div className="cart-list product d_flex">
                                <div className="img">
                                    <img src={item.product.image_url} alt=""/>
                                </div>
                                <div className='cart-details'>
                                    <h3>{item.product.name}</h3>
                                    <h4>{item.product.price}.00 * {item.quantity}<br/>
                                    <span>Rs. {productQty}.00</span>
                                    </h4>
                                </div>
                                <div className='cart-items-function'>
                                    <div className='removeCart'>
                                        <button className='removeCart'>
                                            <i className='fa fa-times'></i>
                                        </button>
                                    </div>
                                    <div className='cartControl d_flex'>
                                        <button className='incCart' onClick={() => addToCart(item)}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                        <button className='desCart' onClick={() => decreaseQty(item)}>
                                            <i className='fa fa-minus'></i>
                                        </button>
                                    </div>
                                </div>
                                <div className='cart-item-price'></div>
                            </div>
                        )
                    })}
                    </div>
                    <div className='cart-total product'>
                        <h2>Cart Summary</h2>
                        <div className=' d_flex'>
                        <h4>Total Price :</h4>
                        <h3>Rs. {totalPrice}.00</h3>
                        </div>
                        <div className="proceedcheck">
                            <Link to="/ordersummary" className="procheck">Proceed to Checkout</Link>
                        </div>
                        <div className="proceedcheck">
                            <Link to="/" className="contshhop">Continue Shopping</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart