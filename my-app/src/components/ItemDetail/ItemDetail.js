import React from "react";
import { useParams } from "react-router";

const ItemDetail = (props) => {
  const { id } = useParams();
  console.log(id);



  /*const result = props.items.filter(item => {
  if (item.id === id) {
      return true
  } else {
      return false
  }

  })
*/
  
  //console.log(props.items.name);
  //.filter((item) => item.id === id)

  return (
    <div>
      {props.items
        .map((elem) => (
            <h1 key={elem.id}>
            {elem.species} - {elem.name} - {elem.gender}{" "}
          </h1>
        ))
        }
    </div>
  );
};

export default ItemDetail;
