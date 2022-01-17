import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { CartContext } from "../context/CartContext";
import ProductItem from "./ProductItem";

export const ItemCount = ({ items }) => {
  console.log(items);

  /*
  const [qtyAdded, setQtyAdded] = useState(false);

 
  const purchaseHandler = (evn) => {
    // evn.preventDefault()
    setQtyAdded(evn.detail);
    console.log(evn.detail);
  };

  useEffect(() => {
    window.addEventListener("submitPurchase", purchaseHandler);
    return () => {
      window.removeEventListener("submitPurchase", purchaseHandler);
    };
  }, []);
*/

  const {
    state: { cart, products },
    dispatch,
  } = useContext(CartContext);

  //console.log(cart);
  /*

  const [count, setCount] = useState(0);

  const sum = () => {
    count < cart.stock
      ? setCount(count + 1)
      : alert("Ups! We run out of this item!");
  };

  const minus = () => {
    count >= 1 ? setCount(count - 1) : console.log("ok");
  };
 
  const purchase = () => {
    const submitPurchase = new CustomEvent("submitPurchase", {
      detail: { qty: count, name: items.name ,id:items.id },
    });
    count >= 1
     // ? window.dispatchEvent(submitPurchase)
      : alert("Need to add an item");
    };
    
    onClick={() =>
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      })}
      
      */

  return (
    <>
      <div style={{ display: "flex" }}>
        <Button
          className="buttons_detail"
          variant="success"
          className="btn m-2 btn-success"
          onClick={() => {
            dispatch({
              type: "ADD_ITEM",
              payload: items.id,
            });
          }}
        >
          +
        </Button>

        

        <Button
          className="buttons_detail"
          variant="success"
          onClick={() => {
            dispatch({
              type: "DELETE_ITEM",
              payload: items.id,
            });
          }}
          className="btn m-2 btn-success"
        >
          -
        </Button>

        <Link className="buttons_detail" to="/cart">
          <Button className="buttons_detail" variant="success">
            Go to cart
          </Button>
        </Link>
      </div>
    </>
  );
};
