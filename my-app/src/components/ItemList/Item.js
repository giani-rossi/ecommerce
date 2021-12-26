import React, {
    Fragment,
    Component,
    userState,
    useEffect,
    useState,
  } from "react";
  
 
  
  import { ToggleComponent } from "../ToggleComponent";
  import ItemListContainer from "./ItemListContainer";
  
  export default function Item(props) {
    //const [modalItem, toggleModal] = ToggleComponent(<ItemDetail />, false);
  
    return (
      <Fragment>
        <div className="card_indiv">
          <h2>{props.name}</h2>
          <p>{props.type}</p>
          <img src={props.image} alt="imag"></img>
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
          
        </div>
      </Fragment>
    );
  }
  