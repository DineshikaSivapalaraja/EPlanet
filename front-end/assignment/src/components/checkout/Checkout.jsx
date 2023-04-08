import React from 'react'
import { Link } from 'react-router-dom'
import "./Checkout.css"
import { useState } from 'react';
import { useHistory } from "react-router-dom";

export default function Checkout() {

    const [paymentMethod, setPaymentMethod] = useState("");
    const history = useHistory();
  
    const handlePaymentChange = (e) => {
      setPaymentMethod(e.target.value);
    };
  
    const handleConfirmOrder = () => {
      localStorage.setItem("paymentMethod", paymentMethod);      
    };

  return (
    <>
        <div className="checkout">
            <h1>Delivery Details</h1>
            <form>
            <div className="checkcont">
                <div className="checkcol-left">
                    <div className="left-row">
                        <div className="rowlable">
                            <label for="fmane">First name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                        </div>
                        <div className="rowinput">
                            <input type="username" id='fname' placeholder="First name.." required />
                        </div>
                    </div>
                    <div className="left-row">
                        <div className="rowlable">
                            <label for="lmane">Last name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                        </div>
                        <div className="rowinput">
                            <input type="username" id='lname' placeholder="Last name.." required />
                        </div>
                    </div>
                    <div className="left-row">
                        <div className="rowlable">
                            <label for="number">Your number : </label>
                        </div>
                        <div className="rowinput">
                            <input type="number" id='number' placeholder="Number.." required />
                        </div>
                    </div>
                    <div className="left-row">
                        <div className="rowlable">
                            <label for="fmane">Your email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </label>
                        </div>
                        <div className="rowinput">
                            <input type="email" id='email' placeholder="Your Email.." required />
                        </div>
                    </div>
                </div>
                <div className="checkcol-right">
                    <div className="left-row">
                        <div className="rowlable">
                            <label for="flat">Address line 01 &nbsp;: </label>
                        </div>
                        <div className="rowinput">
                        <input type="text" id="flat" placeholder="e.g. flat/home number" maxlength="50" required/>
                        </div>
                    </div>
                    <div className="left-row">
                        <div className="rowlable">
                            <label for="street">Address line 02 : </label>
                        </div>
                        <div className="rowinput">
                        <input type="text" id="street" placeholder="e.g. street name" maxlength="50" required/>
                        </div>
                    </div>
                    <div className="left-row">
                        <div className="rowlable">
                            <label for="district">Your District &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : </label>
                        </div>
                        <div className="rowinput">
                        <input type="text" id="district" placeholder="e.g. Colombo"  required/>
                        </div>
                    </div>
                    <div className="left-row">
                        <div className="rowlable">
                            <label for="province">Your Province &nbsp;&nbsp;&nbsp;: </label>
                        </div>
                        <div className="rowinput">
                        <input type="text" id="province" placeholder="e.g. Western"  required/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="payment">
                <h2>Payment method :</h2>
                <div className="paymethod">
                    <input type='radio' name='paymenttype' id='cash' value="cash" checked={paymentMethod === "creditCard"}
            onChange={handlePaymentChange}/>Cash on Delivery                    
                </div>
                <div className="paymethod">
                   <input type='radio' name='paymenttype' id='card' value="card" checked={paymentMethod === "creditCard"}
            onChange={handlePaymentChange}/>Card Payment
                    
                </div>
            </div>
            <div className="checkbtn">
                <Link to="/ordersummary" onClick={handleConfirmOrder}>Checkout</Link>
            </div>
            <div className="canclebtn">
                <Link to="/">Cancel</Link>
            </div>
            </form>
        </div>
    
    </>
   
  )
}
