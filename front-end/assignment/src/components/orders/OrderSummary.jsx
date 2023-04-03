
import './OrderSummary.css';
  
function Orders() {
  return (
    <div className="order">
     <h3>Order Summary</h3>
      <table>
        <tr>
          <th>Order_Id</th>
          <td>OR_01200</td>
        </tr>

        <tr>
          <th rowspan="2">Product_Id</th>
          <td>P_00023</td>
          <td>  
            <img
              src={'./common/assets/images/logo1.png'}
              width={100}
              alt='Camera'
            />
          </td>
        </tr>

        <tr>
          <td>P_00210</td>
          <td>
          <img
              src={'./common/assets/images/logo1.png'}
              width={100}
              alt='Camera'
            />
          </td>
        </tr>

        <tr>
            <th>Quantity</th>
            <td>02</td>
        </tr>
        {/*  <tr>
             <th>Price</th>
             <td>$ 1200</td>
        </tr>  */  }

        <tr>
          <th>Total price</th>
          <td>$ 2400</td>
        </tr>

        <tr>
          <th>Delivery date</th>
          <td>10.04.2023</td>
        </tr>

        <tr>
          <th>Delivery address</th>
          <td>No 13, Vizha street, Colombo-04.</td>
        </tr>

        <tr>
          <th>Payment method</th>
          <td>Card</td>
        </tr>
    
      </table>
    </div>
  );
}
  
export default Orders;