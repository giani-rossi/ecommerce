import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "../ItemCount";
import ItemDetail from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();
  /*
  const fetchData = async (id) => {
    await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
      .catch((error) => alert(error));
  };

  useEffect(() => {
    fetchData(id);
  }, [id]);
*/

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const ref = doc(db, "items", id);
    getDoc(ref).then((snapshot) => {
      if (snapshot.size === 0) {
        console.log("No results");
      }

      setProduct(snapshot.data());
    });
  }, [id]);

  /*
  const stock = {
    ...data,
    stock: 10,
    price: Math.random().toFixed(2),
  };
*/
  //console.log(stock);
  return (
    <>
      <ItemDetail items={product} info={product} />
    </>
  );
};
