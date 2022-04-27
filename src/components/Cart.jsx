import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(cartActions.setShowCart());
  }
  return (
    <div className="cartIcon" onClick={handleClick}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
