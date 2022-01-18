import React from "react";
import { ItemCount } from "../ItemCount";
import Item from "./Item";
import Loading from '../Loading'
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
            image={elem.image}
            id={elem.id}
            stock={elem.stock}
            
          />
          ))
          ) : (
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          
            )}
      
            
    </div>
  );
}
