import React from "react";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
    const Sdata = [
        {
            id: 1,
            title: "Discounts Up To 50% off",
            desc: "Explore our latest watch collection by selecting your favourite models, materials, bezels, dials and bracelets to find the watch that was made for you.",
            cover: "https://content.rolex.com/dam/2022/upright-bba/m126900-0001.png?impolicy=v6-upright",
        },
       {
            id: 2,
            title: "50% off For Your First Shopping",
            desc: "ThunderBolt Electronics for all your Computer needs",
            cover:"https://www.newreactionsound.com/wp-content/themes/Bootstrap/assets/images/box-speaker.png",
        },
         
        {
            id: 3,
            title: "50% off For Your First Shopping",
            desc: "ThunderBolt Electronics for all your Computer needs",
            cover:"https://i.pinimg.com/originals/ca/fb/90/cafb9062f27390676aa00d68f7dd1104.png",
        },
      
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
          return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
      }
    return (
        <>
         <Slider {...settings}>
         {
            Sdata.map((value, index) => {
                return (
                    <div className="box d_flex top" key={index}>
                        <div className="left">
                            <h1>{value.title}</h1>
                            <p>{value.desc}</p>
                            <button className='btn-primary'>Visit Collections</button>
                        </div>
                        <div className='right'>
                  <img src={value.cover} alt=''/>
                </div>
                    </div>
                )
            })
        }
         </Slider>
        </>
    )
}

export default SlideCard