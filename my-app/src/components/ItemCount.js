import React, { useContext, useState } from "react";
import { Alert, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { CartContext } from "../context/CartContext";

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

  const [count, setCount] = useState(0);

  function suma() {
    setCount(count + 1);
    dispatch({
      type: "ADD_ITEM",
      payload: items.id,
    });
  }

  function resta() {
    if (count > 0) {
      setCount(count - 1);
      dispatch({
        type: "DELETE_ITEM",
        payload: items.id,
      });
    }
  }

  console.log(count);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Button
          className="buttons_detail"
          variant="success"
          className="btn m-2 btn-success"
          onClick={suma}
        >
          +
        </Button>

        <h1>{count}</h1>
        <Button
          className="buttons_detail"
          variant="success"
          onClick={resta}
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
