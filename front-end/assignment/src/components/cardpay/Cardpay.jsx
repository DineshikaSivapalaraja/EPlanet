import React from 'react'
import "../checkout/Checkout.css"

export default function Cardpay() {
  return (
    <>
     <div className="checkout">
         <h1>CARD PAYMENT</h1>
         <div className="cardpay">
         <form>
            <div className="cardpayrow">
                <div className="cardpaylable">
                    <label for="cardname">Name on card : </label>
                </div>
                <div className="cardinput">
                    <input type="text" id='cardname' placeholder="Enter name on card.." required />
                </div>
            </div>
            <div className="cardpayrow">
                <div className="cardpaylable">
                    <label for="cnumber">Credit card number : </label>
                </div>
                <div className="cardinput">
                    <input type="text" id='cnumber' placeholder="Enter card number.." required />
                </div>
            </div>
            <div className="cardpayrow">
                <div className="cardpaylable">
                    <label for="expyear">Exp year : </label>
                </div>
                <div className="cardinput">
                    <select id='expyear'>
                        <option value='2023'>2023</option>
                        <option value='2024'>2024</option>
                        <option value='2025'>2025</option>
                        <option value='2025'>2026</option>
                        <option value='2025'>2027</option>
                    </select>
                </div>
            </div>
            <div className="cardpayrow">
                <div className="cardpaylable">
                    <label for="cvvnumber">CVV : </label>
                </div>
                <div className="cardinput">
                <input type="number" id="cvvnumber" placeholder="CVV" required/>
                </div>
            </div>
            <div class="logbutton">
                <input type="submit" value="Confirm Payment" name="confirmpayment"/>
            </div>
            </form>
         </div>
     </div>
       
    </>
    
  )
}
