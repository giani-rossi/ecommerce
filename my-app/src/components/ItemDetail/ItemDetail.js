import React from "react";
import { Fragment, useState, useEffect } from "react";
import { ItemCount } from "../ItemCount";

const ItemDetail = ({ items, stock }) => {
  console.log(stock);

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

          <div className="col-sm-2">Price: {stock.price}</div>
          <div className="col-sm-4">Qty </div>
        </div>
      </div>
      {!qtyAdded && <ItemCount stock={stock} />}
    </Fragment>
  );
};

export default ItemDetail;
