import React from "react";
import FlashDeals from "../components/flashDeals/flashDeals";
import Home from "../components/mainpage/Home";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";

const Pages = ({productItems, cartItem, addToCart}) => {
    return (
        <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        </>
    )
}

export default Pages