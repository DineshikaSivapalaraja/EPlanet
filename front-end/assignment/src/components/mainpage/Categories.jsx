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
            cateImg:"fa fa-print",
            cateName: "Printers",
        },
        {
            cateImg:"fa fa-headphones",
            cateName: "HeadPhones",
        },
        {
            cateImg:"fa fa-camera",
            cateName: "Cameras",
        },
        {
            cateImg:"fa fa-tablet phone",
            cateName: "SmartPhones",
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