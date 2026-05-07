import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/orders/allOrders", {withCredentials: true}).then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
   <div>
    {allOrders.length > 0 ? (
      <>
       <div className="order-table">
        <table>
          <tr>
            <th>Stock</th>
            <th>Qty.</th>
            <th>Price</th>
            <th>Mode</th>
            <th>Status</th>
            
          </tr>
          
          {allOrders.map((order, index) => {
       
            return (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
                <td><span className={`status ${order.status?.toLowerCase()}`}>{order.status}</span></td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
     
        ) : (
         <>
          <div className="orders">
            <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          
            </div>
         </div>
        </>
        )}
    </div>
  );
};

export default Orders;
