import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const NextArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='next'>
        <i class="fa fa-arrow-right"></i>
        </button>
      </div>
    )
  }

  const PrevArrow = (props) => {
    const { onClick } = props
    return (
      <div className='control-btn' onClick={onClick}>
        <button className='prev'>
        <i class="fa fa-arrow-left"></i>
        </button>
      </div>
    )
  }

const FlashCard = ({productItems, addToCart}) => {
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
    return (
        <>
        <Slider {...settings}>
        {
            productItems.map((productItems) => {

         return (   
            <div className="box">
                <div className="product mtop">
                    <div className="img">
                        <span className="discount">{productItems.discount}% Off</span>
                        <img src={productItems.cover} alt="" className="flashpic"/>
                      
                    </div>
                    <div className="product-details">
                        <h3>{productItems.name}</h3>
                        <div className="rate">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="price">
                            <h4>Rs. {productItems.price}.00</h4>
                            <button onClick={() => addToCart(productItems)}>
                                <img src="./images/plus.png" alt="" className="plus"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>)
            })
        }
    </Slider>
        </>
    )
}

export default FlashCard