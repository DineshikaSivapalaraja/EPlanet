import React from "react";
import ShopCart from "./ShopCart"
import "./style.css"

const Shop2 = ({ addToCart }) => {
    return (
        <>
        <section className='shop background'>
            <div className='container d_flex'>
        
                <div className='contentWidth'>
                    <div className='heading d_flex'>
                    <div className='heading-left row  f_flex'>
                        <h2>Electric Items</h2>
                    </div>
                </div>
                <div className='product-content  grid1'>
                    <ShopCart addToCart={addToCart}  />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Shop2