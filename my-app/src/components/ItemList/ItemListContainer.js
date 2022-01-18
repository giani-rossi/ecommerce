import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Loading from "../Loading";

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

  const stock = data.map((p) => ({ ...p, stock: 10  }));

  console.log(stock);

  return <>{data.length > 0 ? <ItemList items={stock} /> : <Loading />}</>;
}
