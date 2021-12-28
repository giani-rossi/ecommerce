import React from 'react';
import { useParams } from 'react-router';

const ItemDetail = (props) => {
    const { id } = useParams();
    console.log(id);


   


console.log(props.items);
    
    return (
        <div>
          {props.items.length > 0  ? (
          props.items.map((elem) => <h1 key={elem.id}>{elem.species} - {elem.name} - {elem.gender} </h1>)
        ) : (
          <h1>nada</h1>
        )}
            
        </div>
    )
}





export default ItemDetail
