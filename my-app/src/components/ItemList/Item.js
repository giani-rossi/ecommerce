import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ItemDetailContainer } from "../ItemDetail/ItemDetailContainer";
import style from "./Item.css";

export default function Item(props) {
  console.log(props.id);

  return (
    <Fragment>
      <div className="card_indiv">
        <Link to={`/home/${props.id}`}>
          <h2>{props.name}</h2>
        </Link>
        <p>{props.type}</p>
        <img src={props.image} alt="imag" className="image_items"></img>
        <button
          type="button"
          class="btn m-2 btn-success"
          style={{ width: "100px" }}
        >
          Buy
        </button>
        <button
          type="button"
          class="btn m-2 btn-success"
          style={{ width: "100px" }}
        >
          Make an offer
        </button>
        <ItemDetailContainer datas={props} />
      </div>
    </Fragment>
  );
}
