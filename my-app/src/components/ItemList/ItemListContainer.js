import React, { useState, useEffect } from "react";
import { ItemDetailContainer } from "../ItemDetail/ItemDetailContainer";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>{data.length > 0 ? <ItemList items={data} /> : <h1>Cargando....</h1>}</>
  );
}
