import React, { createContext, useState, useEffect, useReducer } from "react";
import { CartReducer } from "./Reducers";

export const CartContext = createContext();

export const InitialState = {
  products: [
    
    { id: 1 , name: "Product1", price: Math.random().toFixed(2) },
  { id: 2 , name: "Product2", price: Math.random().toFixed(2) },
  { id: 3 , name: "Product3", price: Math.random().toFixed(2) },
  { id: 4 , name: "Product4", price: Math.random().toFixed(2) },
  { id: 5 , name: "Product5", price: Math.random().toFixed(2) },
  { id: 6 , name: "Product6", price: Math.random().toFixed(2) },
  { id: 7 , name: "Product7", price: Math.random().toFixed(2) },

],
  cart: [],
};

export const CartProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(CartReducer, InitialState);


/*
const [items, setItems] = useState([])
  useEffect(()=> {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then((response) => response.json())
      .then(data => {
        dispatch({
          type:'INITIALIZE',
          payload: {...InitialState, items:data?.data}
        })
      }
)}, [])
*/
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
//creacion provider
/*
export const CartProvider = ({ children }) => {
  const [qtyAdded, setQtyAdded] = useState({});

  const purchaseHandler = (evn) => {
    //let info = [evn.detail.name, evn.detail.qty, evn.detail.id];
    let newValue = qtyAdded[evn.detail.id] = evn.detail.qty
    //{ ...qtyAdded, "evn.detail.id" : evn  .detail.qty };
   // newValue.push(info);
    setQtyAdded(newValue);
    console.log(qtyAdded);
  }

    /*
    const deleteHandler = (evnDelete) => {
      return item[2];
    });
    console.log(Number(deleteHandler));

    Number(deleteHandler) == 5 ? console.log("true") : console.log("false");
  };


  useEffect(() => {
    window.addEventListener("submitPurchase", purchaseHandler);
    // window.addEventListener("deletePurchase", deleteHandler);
    return () => {
      window.removeEventListener("submitPurchase", purchaseHandler);
      // window.addEventListener("deletePurchase", deleteHandler);
    };
  }, []); */
