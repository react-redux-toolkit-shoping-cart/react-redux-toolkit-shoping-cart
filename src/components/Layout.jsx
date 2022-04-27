import React, { useEffect } from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import "./Layout.css";
import { useSelector } from "react-redux";
import { useState } from "react";
const Layout = () => {
  const [total, setTotal] = useState();
  const cartItem = useSelector((state)=> state.cart.items);
  useEffect(()=> {
    calculTotalPrice(cartItem);
  }, [cartItem]);

  const calculTotalPrice = (items) => {
    let total = 0;
    items.forEach((item)=> {
      total += item.totalPrice;
    });
    setTotal(total);
  } 
  const showCartItem = useSelector((state) => state.cart.showCart)

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCartItem && <CartItems></CartItems>}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
