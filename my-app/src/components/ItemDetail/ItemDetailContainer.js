import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  console.log(id);

  const fetchData = async (id) => {
    await fetch(`https://rickandmortyapi.com/api/character/?page=19/${id}`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData.results))
      .catch((error) => alert(error));
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, [id]);

  //console.log(data[0].id);

  return (
    <>
      <div>
        <ItemDetail items={data} />
      </div>
    </>
  );
};
