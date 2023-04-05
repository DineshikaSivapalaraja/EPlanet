import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/style.css"

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleUpdatePayment = (event, orderId) => {
    event.preventDefault();
    const paymentStatus = event.target.payment_status.value;
    axios.post(`/api/orders/${orderId}`, { payment_status: paymentStatus })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };

  const handleDeleteOrder = (event, orderId) => {
    event.preventDefault();
    axios.delete(`/api/orders/${orderId}`)
      .then(response => {
        setOrders(orders.filter(order => order.id !== orderId));
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  return (
    <section className="orders">
      <h1 className="heading">Placed Orders</h1>
      <div className="box-container">
        {orders.length > 0 ? (
          orders.map(order => (
            <div key={order.id} className="box">
              <p> Placed on: <span>{order.placed_on}</span> </p>
              <p> Name: <span>{order.name}</span> </p>
              <p> Number: <span>{order.number}</span> </p>
              <p> Address: <span>{order.address}</span> </p>
              <p> Total products: <span>{order.total_products}</span> </p>
              <p> Total price: <span>${order.total_price}/-</span> </p>
              <p> Payment method: <span>{order.method}</span> </p>
              <form onSubmit={(event) => handleUpdatePayment(event, order.id)}>
                <input type="hidden" name="order_id" value={order.id} />
                <select name="payment_status" className="select" defaultValue={order.payment_status}>
                  <option disabled>{order.payment_status}</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
                <div className="flex-btn">
                  <input type="submit" value="Update" className="option-btn" name="update_payment" />
                  <a href="#" onClick={(event) => handleDeleteOrder(event, order.id)} className="delete-btn" >Delete</a>
                </div>
              </form>
            </div>
          ))
        ) : (
          <p className="empty">No orders placed yet!</p>
        )}
      </div>
    </section>
  );
}

export default Order;
