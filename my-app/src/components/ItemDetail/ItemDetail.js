import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount";

const ItemDetail = ({ items }) => {

  const {value} = useContext(CartContext);

console.log(value);
 

//console.log(items.id);
/*
  const [qtyAdded, setQtyAdded] = useState(false);

  const purchaseHandler = (evn) => {
    console.log(evn);
    setQtyAdded(evn.detail.qty);
  };

  useEffect(() => {
    window.addEventListener("submitPurchase", purchaseHandler);

    return () => {
      window.removeEventListener("submitPurchase", purchaseHandler);
    };
  }, []);

  console.log(items);
*/
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-12" key={items.id}>
            <img src={items.image} alt="imag" />
          </div>
          <div className="col-sm-2">
            Name: <br /> {items.name}
          </div>

          <div className="col-sm-2">
            Status:
            <br /> {items.status}
          </div>
          <div className="col-sm-2">
            Specie:
            <br /> {items.species}
          </div>

          <div className="col-sm-2">Price: {items.price}💎</div>
          <div className="col-sm-4">Qty: {value} </div>
        </div>

        <ItemCount items={items} />
        <Link to={"/"}>
          {" "}
          <button className="btn m-2 btn-success">Home 🔙</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default ItemDetail;
