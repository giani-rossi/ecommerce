import React from "react";
import { ItemCount } from "../ItemCount";
import Item from "./Item";

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
            <h1>Cargando...</h1>
            )}
      
            
    </div>
  );
}
