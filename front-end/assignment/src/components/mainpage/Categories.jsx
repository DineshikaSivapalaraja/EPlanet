import React, { useState } from "react";
import {Link} from 'react-router-dom';


const Categories = () => {

    const [categoryTerm, setcategoryTerm] = useState('');

    const data = [
        {
            cateImg:"fa fa-tv",
            cateName: "TV",
            cat:"/category?categoryTerm=TV",
        },
       
        
        {
            cateImg:"fa fa-desktop",
            cateName: "Computers",
            cat:"/category?categoryTerm=COMPUTER",
        },
        {
            cateImg:"ph ph-mouse",
            cateName: "Computer Accessories",
            cat:"/category?categoryTerm=COMPUTER_ACCESSORY",
        },
        {
            cateImg:"fa fa-print",
            cateName: "Printers",
            cat:"/category?categoryTerm=PRINTER",
        },
        {
            cateImg:"ph ph-watch",
            cateName: "Watches",
            cat:"/category?categoryTerm=WATCH",
        },
        {
            cateImg:"fa fa-camera",
            cateName: "Cameras",
            cat:"/category?categoryTerm=CAMERA",
        },
        {
            cateImg:"ph ph-device-mobile",
            cateName: "Smartphones",
            cat:"/category?categoryTerm=PHONE",
        },
        
       

    ]
    return (
        <>
         <div className="category">
            {
                data.map((value,index) => {
                    
                    return (
                        <Link to={value.cat}>   <div className="box f_flex" key={index}>
                             <i className={value.cateImg}></i>
                            <span>{value.cateName}</span>
                        </div></Link>
                    )
                })
            }
         </div>
        </>
    )
}

export default Categories