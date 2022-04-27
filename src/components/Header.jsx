import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";
import Cart from "./Cart";
import "./Header.css";
const Header = () => {
  const dispatch = useDispatch();
  const handleClickLogoutBtn = () => {
    dispatch(authActions.logout());
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          <ul
            style={{
              display: "flex",
              alignContent: "center",
              justifyItems: "center",
            }}
          >
            <li>
              <Cart />
            </li>
            <li>
              <button style={{ margin: "4px" }} onClick={handleClickLogoutBtn}>
                Logout
              </button>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
