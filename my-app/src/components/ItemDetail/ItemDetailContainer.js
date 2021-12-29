import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  //console.log(id);

  const fetchData = async (id) => {
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => alert(error))
  };

  
  const [stock, setStock] = useState([]);

  const fetchStock = async (id) => {
    await fetch("../assets/db_stock.json")
      .then((responseStock) => responseStock.json())
      .then((responseStockData) => setStock(responseStockData))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchData(id);
    fetchStock(id)
  }, [id]);

console.log(stock);

  return (
    <>
      <div>
      
        
        <ItemDetail items={data} stock={stock}/>
      
      </div>
    </>
  );
};
