import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount";
import ItemDetail from "../ItemDetail/ItemDetail";
import style from "./Item.css";

export default function Item(props) {
 // console.log(props.id);
console.log(props.stock);




  return (
    <Fragment>
      <div ClassName="card-indiv">
        <img src={props.image} alt="imag" ClassName="card-img-top" />
        <div ClassName="card-body" style={{ marginLeft: 10 }}>
            <h5 ClassName="card_info">{props.name}</h5>
          <p ClassName="card_info">{props.type}</p>
          <div
            ClassName="btn btn-success"
            style={{ display: "flex", marginLeft: 10 }}
            >
            
          <Link to={`/detail/${props.id}`}>
            <p>Buy - View More</p>
            </Link>
          </div>
         
        
        </div>
      </div>
    </Fragment>
  );
}
