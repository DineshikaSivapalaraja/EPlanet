import './Order.css';
import camera from './CanCamera.png';
import headphone from './Headphone.webp';

  
function Order() {
  return (
    // <div>
    <div className="order">
    <table className="table1">
      <h3 className="head1">Order Summary</h3>
        <tr>
          <th id="orhead">Order Id:</th>
          <td id="ordata">OR_100234</td>
          <th id="orhead">Delivery Address:</th>
          <td id="ordata">No 30, Vizha street,<br/>Gampola,<br/> Kandy.</td>
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

     
   
    <table className="table2">
    <h3 className="head2">Shipped Products</h3>
        <tr>
          <th colspan="2" className="orhead2">Product</th>
          <th className="orhead2" >Quantity</th>
          <th className="orhead2">Price</th>
        </tr>

        <tr>
          <td id="d5">  
            <img
              src={camera}
              width={105}
              alt='Canon Camera'
            />
          </td>
          <td id="d2"> Canon 850D BODY +<br/> 10-50MM LENS Camera</td>
          <td id="d4">1</td>
          <td id="d4">Rs. 310,000.00</td>
          
        </tr>

        <tr>
          <td id="d5">
          <img
              src={headphone}
              width={100}
              alt='P47 Bluetooth Headphone'
            />
          </td>
          <td id="d2">P47 Bluetooth Headphone<br/>4.1 Edr Wireless Headphone</td>
          <td id="d4">1</td>
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

  );
}
  
export default Order;

