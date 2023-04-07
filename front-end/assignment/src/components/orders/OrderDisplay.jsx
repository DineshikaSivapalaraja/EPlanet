import './Order.css';
import {Link} from 'react-router-dom';



  
function Order() {
  return (
    // <div>
    <div className="order">
      <div className="topTable">
      
        <table className="table1">
        <h3 className="head1">Order Summary</h3>
        <tr>
          <th id="orhead">Order Id:</th>
          <td id="ordata">OR_100234</td>
          <th id="orhead">Delivery Address:</th>
          <td id="ordata">No 30, Vizha street, Gampola, Kandy.</td>
        </tr>
        <tr>
          <th id="orhead">Order Date:</th>
          <td id="ordata">21.03.2023</td>
          <th id="orhead">Delivery Date:</th>
          <td id="ordata">01.04.2023</td>
        </tr>
        <tr>
          <th id="orhead">Order Amount:</th>
          <td id="ordata">Rs. 355,000</td>
        </tr>
        
        <tr>
          <th id="orhead">Payment Method:</th>
          <td id="ordata">Card</td>
        </tr>
      </table>
      </div>
    

     <div className="bottomTable">
      <table  className="table2">
      <h3 className="head2">Shipped Products</h3>
        <tr>
          <th colspan="2" className="orhead2">Product</th>
          <th className="orhead2" >Quantity</th>
          <th className="orhead2">Price</th>
        </tr>

        <tr>
          <td id="d5">  
            <img
              src="./images/flash/canon.png"
              width={105}
              alt='Canon Camera'
            />
          </td>
          <td id="d2"> Canon 850D BODY +<br/> 10-50MM LENS Camera</td>
          <td id="d8">1</td>
          <td id="d4">Rs. 310,000.00</td>
          
        </tr>

        <tr>
          <td id="d5">
          <img
              src="./images/flash/dell-15.png"
              width={100}
              alt='Gamepad'
            />
          </td>
          <td id="d2">GEN GAME S5 <br/>Wireless Bluetooth Controller Gamepad </td>
          <td id="d8">1</td>
          <td id="d4">Rs. 25,000.00</td>
         </tr>
          <tr className="under">
              <td></td>
              <th id="d3">Sub Total:</th>
              <td></td> 
              <td id="d4">Rs. 335,000</td>
          </tr>
          <tr>
              <td></td>
              <th id = "d3">Transport charge:</th>
              <td></td> 
              <td id ="d4">Rs. 20,000</td>
            </tr>
            <tr>
                <td></td>
                <th id="d3">Total:</th>
                <td></td> 
                <td id="d4">Rs. 355,000</td>
            </tr>   
        </table>
     </div>

     <div className="proceedcheck">
          <Link to="/checkout" className="procheck">Proceed to Checkout</Link>
     </div>
     <div className="proceedcheck">
        <Link to="/" className="contshhop">Continue Shopping</Link>
      </div>

     </div>

  );
}
  
export default Order;

