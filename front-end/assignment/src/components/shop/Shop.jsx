import React from "react";
import Catg from "./Catg"
import ShopCart from "./ShopCart"
import "./style.css"

const Shop = ({ addToCart, productItems }) => {
    return (
        <>
        <section className='shop background'>
            <div className='container d_flex'>
            <Catg />

                <div className='contentWidth'>
                    <div className='heading d_flex'>
                    <div className='heading-left row  f_flex'>
                        <h2>Electric Items</h2>
                    </div>
                   
                    </div>
                    <div className='product-content  grid1'>
                    <ShopCart addToCart={addToCart} productItems={productItems} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Shop