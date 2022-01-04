import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const fetchData = async (id) => {
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);

  
  //const stock = data.map((p) => ({ ...p, stock: 10 }));
  
  const stock = {...data,stock:10 , price: Math.random().toFixed(2)}
  
  console.log(stock);
  return (
    <>
      <ItemDetail items={stock} />
    </>
  );
};
