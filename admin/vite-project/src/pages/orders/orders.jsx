import React from 'react'
import "./orders.css"
import { useState,useEffect } from 'react'
import {toast} from "react-toastify"
import axios from "axios"


const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + '/api/order/list');
      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
      toast.error("Error fetching orders");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="orders">
      <h2>All Orders</h2>
      <div className="orders-container">
        {orders.map((order, index) => (
          <div key={index} className="orders-order">
            <p>Order ID: {order._id}</p>
            <p>User ID: {order.userId}</p>
            <p>
              Items: {order.items.map((item, itemIndex) => (
                <span key={itemIndex}>
                  {item.name} x {item.quantity}
                  {itemIndex !== order.items.length - 1 && ', '}
                </span>
              ))}
            </p>
            <p>Amount: ${order.amount}.00</p>
            <p>Status: <b>{order.status}</b></p>
            <p>Address: {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}, {order.address.country}</p>
            <p>Payment: {order.payment ? "Paid" : "Not Paid"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders
