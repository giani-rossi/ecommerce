import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(0);

  const sum = () => {
    count < stock.stock ? setCount(count + 1) : alert("Ups! We run out of this item!");
  };

  const minus = () => {
    count >= 1 ? setCount(count - 1) : console.log("ok");
  };

  const purchase = () => {
    const submitPurchase = new CustomEvent("submitPurchase", {
      detail: { qty: count },
    });
    count >= 1
      ? window.dispatchEvent(submitPurchase)
      : alert("Need to add an item");
  };

  return (
    <div>
      <button className="btn m-2 btn-success" onClick={minus}>
        {" "}
        -{" "}
      </button>
      {count}
      <button className="btn m-2 btn-success" onClick={sum}>
        {" "}
        +{" "}
      </button>
      <Link to="/cart">
        <button className="btn m-2 btn-success" onClick={purchase}>
          {" "}
          Add to cart{" "}
        </button>
      </Link>
    </div>
  );
};
