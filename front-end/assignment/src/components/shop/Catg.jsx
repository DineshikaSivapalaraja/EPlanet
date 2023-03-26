import React from "react";

const Catg = () => {

    const data = [
        {
            cateImg: "./images/brands/azus.png",
            cateName: "Azus",
        },
        {
            cateImg: "./images/brands/canon.png",
            cateName: "Canon",
        },
        {
            cateImg: "./images/brands/dell.png",
            cateName: "Dell",
        },
        {
            cateImg: "./images/brands/epson.png",
            cateName: "Epson",
        },
        {
            cateImg: "./images/brands/huawei.png",
            cateName: "Huawei",
        },
        {
            cateImg: "./images/brands/panasonic.png",
            cateName: "Panasonic",
        },
        {
            cateImg: "./images/brands/singer.png",
            cateName: "Singer",
        },
        {
            cateImg: "./images/brands/sams.png",
            cateName: "Samsung",
        },
        {
            cateImg: "./images/brands/whites.png",
            cateName: "Whites",
        },
      ]

    return (
        <>
        <div className='category'>
            <div className='chead d_flex'>
                <h1>Brands </h1>
                <h1>Shops </h1>
            </div>
            {data.map((value, index) => {
            return (
                <div className='box f_flex' key={index}>
                    <img src={value.cateImg} alt='' className="brandimg" />
                    <span>{value.cateName}</span>
                </div>
            )
            })}
            <div className='box box2'>
                <button>View All Brands</button>
            </div>
        </div>
        </>
    )
}

export default Catg