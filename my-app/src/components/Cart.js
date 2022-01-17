import React from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../context/CartContext";


import { ItemCount } from "./ItemCount";
import ItemDetail from "./ItemDetail/ItemDetail";
import ProductItem from "./ProductItem";

const Cart = () => {
  const {
    state: { cart , products },
    dispatch,
  } = useContext(CartContext);


  /* const value = useContext(CartContext);
   console.log(typeof(value));

  const deleteAllPurchase = () => {
    const deletePurchase = new CustomEvent("deletePurchase", {
      detail: { qty: 0, name: prod.name, id: prod.id },
    });

    window.dispatchEvent(deletePurchase);
  };
*/
  console.log(cart);
  return (
    <>
      <>
        <h1>Carrito</h1>
        {cart.map((prod) => (
          <ProductItem key={prod.id} data={prod} />
        ))}
      </>
     
      <Link to="/">
          <Button style={{ width: "95%", margin: "0 10px" }} variant="success">
           Back to Home
          </Button>
        </Link>
    </>
  );
};

export default Cart;
