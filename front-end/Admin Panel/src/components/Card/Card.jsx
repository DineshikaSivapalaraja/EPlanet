import React, { Component } from 'react'
import "./Card.css"
import { useState, useEffect } from 'react';
import axios from 'axios';

function Card() {
  const [totalCompletes, setTotalCompletes] = useState(0);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [numberOfAdmins, setNumberOfAdmins] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await axios.get('/api/orders?payment_status=completed');
        const totalCompletes = response1.data.reduce((total, order) => total + order.total_price, 0);
        setTotalCompletes(totalCompletes);

        const response2 = await axios.get('/api/products');
        setNumberOfProducts(response2.data.length);

        const response3 = await axios.get('/api/users');
        setNumberOfUsers(response3.data.length);

        const response4 = await axios.get('/api/admins');
        setNumberOfAdmins(response4.data.length);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="dashboard">
      <h1 className="heading">dashboard</h1>

      <div className="box-container">
        <div className="box">
          <h3><span>$</span>{totalCompletes}<span>/-</span></h3>
          <p>completed orders</p>
          <a href="placed_orders.php" className="btn">see orders</a>
        </div>

        <div className="box">
          <h3>{numberOfProducts}</h3>
          <p>products added</p>
          <a href="products.php" className="btn">see products</a>
        </div>

        <div className="box">
          <h3>{numberOfUsers}</h3>
          <p>normal users</p>
          <a href="users_accounts.php" className="btn">see users</a>
        </div>

        <div className="box">
          <h3>{numberOfAdmins}</h3>
          <p>admin users</p>
          <a href="admin_accounts.php" className="btn">see admins</a>
        </div>
      </div>
    </section>
  );
}

export default Card
