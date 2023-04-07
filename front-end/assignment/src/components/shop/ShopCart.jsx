import React from "react"
import {Link} from 'react-router-dom';

const ShopCart = ({ productItems, addToCart }) => {

  const userId = localStorage.getItem('userId');
  console.log(userId);
 
  return (
    <>
      {productItems.map((productItems, index) => {
        return (
          <div className='box'>
            <div className='product mtop'>
              <div className='img'>
                {/* <span className='discount'>{shopItems.discount}% Off</span> */}
                <Link to={`/singleproduct?productId=${productItems.id}`}><img src={productItems.image_url} alt='' className="shopProImg"/></Link>
                
              </div>
              <div className='product-details'>
                <h3>{productItems.name}</h3>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='price'>
                  <h4>Rs. {productItems.price}.00 </h4>
                
                  <button onClick={() => addToCart(productItems)}>
                    <i className='fa fa-plus'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default ShopCart
