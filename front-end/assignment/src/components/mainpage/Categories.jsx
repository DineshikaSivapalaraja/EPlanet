import React from "react";


const Categories = () => {
    const data = [
        {
            cateImg:"fa fa-tv",
            cateName: "TV",
        },
        {
            cateImg:"fa fa-gamepad",
            cateName: "Gamepads",
        },
        
        {
            cateImg:"fa fa-desktop",
            cateName: "Computers",
        },
        {
            cateImg:"ph ph-mouse",
            cateName: "Computer Accessories",
        },
        {
            cateImg:"fa fa-print",
            cateName: "Printers",
        },
        {
            cateImg:"ph ph-watch",
            cateName: "Watches",
        },
        {
            cateImg:"fa fa-camera",
            cateName: "Cameras",
        },
        {
            cateImg:"ph ph-device-mobile",
            cateName: "Smartphones",
        },
        
        {
            cateImg:"ph ph-house",
            cateName: "Home & Kitchen Appliaces",
        },  

    ]
    return (
        <>
         <div className="category">
            {
                data.map((value,index) => {
                    return (
                        <div className="box f_flex" key={index}>
                             <i className={value.cateImg}></i>
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
         </div>
        </>
    )
}

export default Categories