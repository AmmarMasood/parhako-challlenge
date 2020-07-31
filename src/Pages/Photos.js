import React, { useContext, useState, useEffect } from "react";
import "../Styles/Photos.css";
// context
import { picsContext, loadingContext, cartItemsContext } from "../Store";

function Photos() {
  // context
  const [pics, setPics] = useContext(picsContext);
  const [loading] = useContext(loadingContext);
  const [cartItems, setCartItems] = useContext(cartItemsContext);
  // local state valyes
  const [currentHovered, setCurrentHovered] = useState(null);
  const [hovered, setHovered] = useState(false);

  // useEffect to print in console when user hovers a image
  useEffect(() => {
    console.log(hovered);
  }, [hovered]);

  // adds items in cart
  const addItemInCart = item => {
    // first we check if the item is already in array
    if (cartItems.filter(i => i.id === item.id).length > 0) {
      // if it is we remove that item from the cartItems
      const newArray = cartItems.filter(i => i.id !== item.id);
      setCartItems(newArray);
      console.log("Removed Item From Cart :)");
    } else {
      // if item is not in cartItem we can add it
      setCartItems(prevState => [...prevState, item]);
      console.log("Added Item In Cart :)");
    }
  };
  // favourites the image when user clicks on like button
  const onLikeAdded = id => {
    const newArray = pics.map(item =>
      item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
    );
    console.log("Added Like :)");
    setPics(newArray);
  };
  // show image cards
  const showImage = () =>
    pics.map((item, key) => (
      <div
        key={key}
        onMouseOver={() => {
          setHovered(true);
          setCurrentHovered(item.id);
        }}
        onMouseOut={() => {
          setHovered(false);
          setCurrentHovered(null);
        }}
        className={
          currentHovered === item.id
            ? "image-card image-card-hovered"
            : "image-card"
        }
      >
        <div className="image-card-img">
          <img src={item.url} alt="git-img" />
        </div>
        <div
          className={
            currentHovered === item.id ||
            item.isFavorite ||
            cartItems.filter(i => i.id === item.id).length > 0
              ? "image-card-like image-card-like-hovered"
              : "image-card-like"
          }
        >
          <i
            className={item.isFavorite ? "fa fa-heart" : "fa fa-heart-o"}
            style={{ color: item.isFavorite ? "#ff0000" : "" }}
            aria-hidden="true"
            onClick={() => onLikeAdded(item.id)}
          ></i>
          <i
            className={
              cartItems.filter(i => i.id === item.id).length > 0
                ? "fa fa-shopping-cart"
                : "fa fa-cart-plus"
            }
            style={{
              color:
                cartItems.filter(i => i.id === item.id).length > 0
                  ? "green"
                  : ""
            }}
            aria-hidden="true"
            onClick={() => addItemInCart(item)}
          ></i>
        </div>
      </div>
    ));

  return (
    <>
      {/* shows loading when fetching images from github */}
      {loading ? (
        <div className="loading">
          {" "}
          <i className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></i>{" "}
          Loading...
        </div>
      ) : (
        <div className="images-box">{showImage()}</div>
      )}
    </>
  );
}

export default Photos;
