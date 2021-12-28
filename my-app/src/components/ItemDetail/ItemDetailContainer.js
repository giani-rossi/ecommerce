import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  //console.log(items);

  const [data, setData] = useState([]);
  const {id} = useParams();
console.log(id);

  const fetchData = async () => {
   const datos = await fetch(`https://rickandmortyapi.com/api/character/?page=19/${id}`)
     const datosOb = await datos.json()
      setData(datosOb)
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  console.log(data.results);

  return (
    <>
      <div>
<h1>

  
</h1>
      </div>
    </>
  );
};
