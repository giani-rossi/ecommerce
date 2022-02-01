import React from "react";

import Item from "./Item";
import { Spinner } from "react-bootstrap";


export default function ItemList({ items }) {
  console.log(items);

  return (
    <div className="itemList">
      {items ? (
        items.map((elem) => (
          <Item
            key={elem.id}
            name={elem.name}
            type={elem.type}
            description={elem.description}
            image={elem.image}
            id={elem.id}
            stock={elem.stock}
            
          />
          ))
          ) : (
            <Spinner
            style={{ left: "50%", position: "absolute", top: "50%" }}
            animation="border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          
            )}
      
            
    </div>
  );
}
