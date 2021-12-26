import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
      await fetch('https://rickandmortyapi.com/api/character/?page=19')
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results))
    
      .catch((error) => alert(error));
      
    };
    
    console.log(data);
  useEffect(() => {
    fetchData();
  }, [])

  //console.log(typeof data);

  return (
    <>
    {
        data.length > 0 ? 
        (
        <ItemList items={data}/>
        ):
    (
    <h1>Cargando....</h1>
    )
  }
    </>
  );
}
