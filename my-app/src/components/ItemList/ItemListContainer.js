import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Loading from "../Loading";
import { Spinner } from "react-bootstrap";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

export default function ItemListContainer() {
  /*
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
*/

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const ref = collection(db, "items");
    getDocs(ref).then((snapshot) => {
      if (snapshot.size===0) {
        console.log('No results')
      }
      const postData = [];
      snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
      setProduct(postData);
      
    });
  }, []);

  console.log(product);

  return (
    <>
      {product.length >= 0 ? (
        <ItemList items={product} />
      ) : (
        <Spinner
          style={{ left: "50%", position: "absolute", top: "50%" }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}{" "}
    </>
  );
}
