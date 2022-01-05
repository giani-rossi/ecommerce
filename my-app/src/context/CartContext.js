import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

//creacion provider

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
  */

  useEffect(() => {
    window.addEventListener("submitPurchase", purchaseHandler);
    // window.addEventListener("deletePurchase", deleteHandler);
    return () => {
      window.removeEventListener("submitPurchase", purchaseHandler);
      // window.addEventListener("deletePurchase", deleteHandler);
    };
  }, []);

  return (
    <CartContext.Provider value={purchaseHandler}>
      {children}
    </CartContext.Provider>
  );
};
