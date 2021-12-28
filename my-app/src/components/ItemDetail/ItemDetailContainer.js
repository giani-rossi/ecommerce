import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Item from "../ItemList/Item";
import Loading from "../Loading";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    await fetch(`https://rickandmortyapi.com/api/character/?page=19/${id}`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results))

      .catch((error) => alert(error));
  };

  // console.log(data);
  useEffect(() => {
    fetchData();
  }, []);




  return (
    <>
      <div>
       
        <ItemDetail items={data} />
      </div>
    </>
  );
};
