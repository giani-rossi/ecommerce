import React from "react";
import { ItemDetailContainer } from "../ItemDetail/ItemDetailContainer";
import Item from "./Item";



export default function ItemList({items}) {

  console.log(items);
//let array = Object.values(items)

return (
    
    <div className="ItemList">
           {
               items ? 
               (
         items.map(
          (elem) => ( 
          <Item key={elem.id} name={elem.name} 
           type={elem.type} image={elem.image} id={elem.id}/>
          )
         )
               ): 
               (
               <h1>Cargando...</h1>
               )
         } 
     <Item items={items}/>
     <ItemDetailContainer items={items} />
    </div>
  );
}




