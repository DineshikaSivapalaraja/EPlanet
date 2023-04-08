import React from "react"
import { Link } from "react-router-dom"

const Cart = ({newArrivalList}) => {
  return (
    <>
      <div className='content grid product'>
        {newArrivalList.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
              <Link to={`/singleproduct?productId=${val.id}`}><img src={val.image_url} alt='' /></Link>
              </div>
              <h4>{val.name}</h4>
              <span>Rs. {val.price}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Cart