import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../newarrivals/style.css"

const Dcard = ({discountList}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {discountList.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  <img src={value.image_url} alt='' width='100%' />
                </div>
                <h4>{value.name}</h4>
                <span>Rs. {value.price}</span>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard