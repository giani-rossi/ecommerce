import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

export const ItemCount = ({ items }) => {
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
  const [count, setCount] = useState(0);

  const sum = () => {
    count < items.stock
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
      ? window.dispatchEvent(submitPurchase)
      : alert("Need to add an item");
  };

  return (
    <>
      <button className="btn m-2 btn-success" onClick={minus}>
        -
      </button>
      {count}
      <button className="btn m-2 btn-success" onClick={sum}>
        +
      </button>

      <button className="btn m-2 btn-success" onClick={purchase}>
        Add to cart
      </button>
    </>
  );
};
