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

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};