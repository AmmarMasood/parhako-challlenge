import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";
// context
import { cartItemsContext } from "../Store";

function Nav() {
  const [cartItems, setCartItems] = useContext(cartItemsContext);

  return (
    <div className="navbar">
      <div>
        <Link
          to="/"
          style={{ padding: "5px", color: "#fff", textDecoration: "none" }}
        >
          Pic Some
        </Link>
      </div>
      <div>
        <Link
          to="/cart"
          style={{ padding: "5px", color: "#fff", textDecoration: "none" }}
        >
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <label style={{ padding: "0 5px 0 5px", cursor: "pointer" }}>
            Cart
          </label>
          {cartItems.length}
        </Link>
      </div>
    </div>
  );
}

export default Nav;
