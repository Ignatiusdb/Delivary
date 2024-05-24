import React from 'react'
import './myOrders.css'
import { assets } from '../../assets/assets.js'
import axios from "axios"
import { useContext,useState,useEffect } from 'react'
import { StoreContext } from '../../Context/storeContext'

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
  
    // Function to fetch user orders
    const fetchOrders = async () => {
     
        const response = await axios.post(url + '/api/order/userorders', {}, {
          headers: {token} }); // Assuming you need to pass the token in the header
       
        setData(response.data.data);
     
    };
  
    // Fetch orders when the component mounts
    useEffect(() => {
     if(token){
        fetchOrders();
     }
    }, []); // Empty dependency array means this effect runs only once after the component mounts
  
    return (
        <div className="my-orders">
          <h2>My Orders</h2>
          <div className="container">
            {data.map((order, index) => (
              <div key={index} className="my-orders-order">
                <img src={assets.parcel_icon} alt="" />
                <p>
                  {order.items.map((item, index) => {
                    // <span key={index}>
                    //   {item.name} x {item.quantity}
                    //   {index !== order.items.length - 1 && ', '}
                    // </span>
                    if(index===order.items.length-1){
                        return item.name+"x"+item.quantity

                    }else{
                        return item.name+"x"+item.quantity+","
                    }
                  })}
                </p>
                <p>${order.amount}.00</p>
          <p>Items: {order.items.length}</p>
          <p>
            <span>&#x25cf;</span> <b>{order.status}</b>
          </p>
          <button>Track Order</button>
              </div>
            ))}
          </div>
        </div>
      );
      
}

export default MyOrders
