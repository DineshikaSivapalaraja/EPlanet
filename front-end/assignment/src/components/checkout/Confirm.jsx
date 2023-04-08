import React from 'react'
import "./Checkout.css"

export default function Confirm() {
  return (
    <>
     <div className="checkout">
       
         <div className="cardpay">
            <div className="confirmbox">
                <h1>Your order is Complete !</h1>
                <div className="tickimg">
                    <img src="./images/tick.png" id='confirmid'/>
                </div>
                <h3>Thank you for your purchase.</h3>
                <p>You will berecieving a confirmation email with the order details</p>
            </div>
         </div>
     </div>
       
    </>
    
  )
}
