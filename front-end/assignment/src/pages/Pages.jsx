import React from "react";
import FlashDeals from "../components/flashDeals/flashDeals";
import Home from "../components/mainpage/Home";

const Pages = ({productItems, cartItem, addToCart}) => {
    return (
        <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        </>
    )
}

export default Pages