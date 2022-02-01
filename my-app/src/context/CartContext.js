import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";
import React, { createContext, useState, useEffect, useReducer } from "react";
import { CartReducer } from "./Reducers";

export const CartContext = createContext();

/*
export const InitialState = () => {
  
  const db = getFirestore();
  const ref = collection(db, "items");
  getDocs(ref).then((snapshot) => {
    if (snapshot.size===0) {
      console.log('No results')
    }
    const postData = [];
    snapshot.forEach((doc) => postData.push({ ...doc.data(), id: doc.id }));
    let getItems = {
      products: postData ,
      cart:[]
    }
    return(getItems);
    
  });
    
}
*/

export const InitialState = {
  products: [
    {
      id: 1,
      name: "Amish Cyborg",
      price: 8,
      stock: 3,
      image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
    },
    {
      id: 2,
      name: "Alien Rick",
      price: 34,
      stock: 6,
      image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
    },
    {
      id: 3,
      name: "Ants in my Eyes Johnson",
      price: 29,
      stock: 9,
      image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
    },
    {
      id: 4,
      name: "Antenna Rick",
      price: 34,
      stock: 5,
      image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
    },
  ],
  cart: [],
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, InitialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
