import React from "react"
import Ndata from "./Ndata"

const Cart = ({newArrivalList}) => {
  return (
    <>
      <div className='content grid product'>
        {newArrivalList.map((val, index) => {
          return (
            <div className='box' key={index}>
              <div className='img'>
                <img src={val.image_url} alt='' />
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