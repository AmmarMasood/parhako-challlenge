import React, { useContext, useState } from "react";
import "../Styles/Cart.css";
import { cartItemsContext } from "../Store";

function Cart() {
  // context
  const [cartItems, setCartItems] = useContext(cartItemsContext);
  // local state
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [loading, setLoading] = useState(false);

  // complete payment
  const completePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOrderCompleted(true);
      setCartItems([]);
      console.log("Payment Completed");
    }, 3000);
  };

  // removes cart item
  const removeCartItem = id => {
    const newItems = cartItems.filter(item => item.id !== id);
    setCartItems(newItems);
    console.log("Removed Item From Cart");
  };
  // display the items in cart
  const displayCartItems = () =>
    cartItems.map((item, key) => (
      <div className="item-card" key={key}>
        <div className="item-card-img">
          {" "}
          <img src={item.url} alt="git-img" />
        </div>
        <div className="item-card-txt">
          <div className="item-card-txt-id">ID# {item.id}</div>
          <div className="item-card-txt-price">$ 5.99</div>
        </div>
        <div className="item-card-button">
          <button className="btn" onClick={() => removeCartItem(item.id)}>
            <i
              className="fa fa-trash"
              aria-hidden="true"
              style={{ padding: "0 3px 0 3px" }}
            ></i>
          </button>
        </div>
      </div>
    ));

  // display cart items in a bill
  const displayBill = () =>
    cartItems.map((item, key) => (
      <div className="card-item" key={key}>
        <div>Id# {item.id}</div>
        <div>$ 5.99</div>
      </div>
    ));
  return (
    <div className="cart-page">
      <div className="cart-items">
        {cartItems.length <= 0 ? (
          <div
            style={{ paddingTop: "50%", textAlign: "center", color: "#5e17eb" }}
          >
            Please add items in your cart...
          </div>
        ) : (
          displayCartItems()
        )}
      </div>
      <div className="cart-bill">
        <div className="card">
          <div
            style={{
              textAlign: "center",
              fontSize: "25px",
              padding: "10px",
              fontWeight: "500"
            }}
          >
            Cart
          </div>
          <div className="card-items">{displayBill()}</div>
          <div className="card-total">
            <div>Total:</div>
            <div> $ {5.99 * cartItems.length} </div>
          </div>
          {/* if the loading is true we show loading... else we show the button */}
          {loading ? (
            <div className="complete-payment" style={{ color: "#5e17eb" }}>
              <i className="fa fa-circle-o-notch fa-spin fa-lg fa-fw"></i>{" "}
              Placing Order...
            </div>
          ) : (
            cartItems.length !== 0 && (
              <div className="complete-payment">
                <button onClick={completePayment}>{"Place Order"}</button>
              </div>
            )
          )}
          {/* when is order is placed this shows message */}
          <div className="complete-payment" style={{ color: "#5e17eb" }}>
            {orderCompleted && "Order Placed Successfully! Thanks For Ordering"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
