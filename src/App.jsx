import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchCart, sendCart } from "./store/cart-action";


function App() {
  const isLogedIn = useSelector((state) => state.auth.isLogedIn);
  const cart = useSelector((state) => state.cart);
  /**
   * useDispatch hooks, takes an object or an function. And the function take the dispatch argument and called action creator
   */
  const dispatch = useDispatch();
  useEffect(() => {
    if(cart.touched) {
      dispatch(sendCart(cart));
    }
  }, [cart]);
  useEffect(() => {
    dispatch(fetchCart());
  }, [])
  return (
      <div className="App">
        <Notification message={'test'} severity={'success'}></Notification>
        {!isLogedIn ? (<Auth />) : (<Layout />)}
      </div>
  );
}

export default App;
