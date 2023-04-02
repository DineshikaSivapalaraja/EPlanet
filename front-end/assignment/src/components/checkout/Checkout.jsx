import React from 'react'
import { Link } from 'react-router-dom'
import "./Checkout.css"

export default function Checkout() {
  return (
    <>
        <div className="checkout">
            <h1>Delivary Details</h1>
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
                    <input type='radio' name='paymenttype' value="Cash"/>Cash on Delivary                    
                </div>
                <div className="paymethod">
                   <input type='radio' name='paymenttype' value="debit"/>Card Payment
                    
                </div>
            </div>
            <div className="checkbtn">
                <Link to="">Checkout</Link>
            </div>
        </div>
    
    </>
   
  )
}
