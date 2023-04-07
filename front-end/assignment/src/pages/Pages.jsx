
import FlashDeals from "../components/flashDeals/flashDeals";
import Home from "../components/mainpage/Home";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shop/Shop";
import Announcements from "../components/announcements/Announcements";
import Wrapper from "../components/wrapper/Wrapper";
import React, { useState, useEffect } from "react"

const Pages = ({ cartItem, addToCart, shopItems}) => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/product/get-all");
                const data = await response.json();
                setProductList(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <Home cartItem={cartItem}/>
            <FlashDeals productItems={productList} addToCart={addToCart}/>
            <TopCate/>
            <NewArrivals/>
            <Discount/>
            <Shop productItems={productList} addToCart={addToCart}/>
            <Announcements/>
            <Wrapper/>
        </>
    )
}

export default Pages;
