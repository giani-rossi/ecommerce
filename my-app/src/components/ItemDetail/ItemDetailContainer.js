import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    await fetch(`https://rickandmortyapi.com/api/character/?page=19/{id}`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results))
      
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchData();
  }, []);




  const proId = useParams();
  const detail = Data.filter((item) => item.id === proId.id);
  const product = detail;
  console.log(proId, product);
  console.log(detail.length);

  return (
    <>
      {Data.map((elem) => (
        <h1 key={elem.id}>
          name={elem.name} id={elem.id}
        </h1>
      ))}
    </>
  );
};
