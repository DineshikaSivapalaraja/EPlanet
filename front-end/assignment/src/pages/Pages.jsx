import React from "react";
import FlashDeals from "../components/flashDeals/flashDeals";
import Home from "../components/mainpage/Home";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Announcements from "../components/announcements/Announcements";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({productItems, cartItem, addToCart, shopItems}) => {
    return (
        <>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart}/>
        <TopCate/>
        <NewArrivals/>
        <Discount/>
        <Shop shopItems={shopItems} addToCart={addToCart}/>
        <Announcements/>
        <Wrapper/>
        </>
    )
}

export default Pages