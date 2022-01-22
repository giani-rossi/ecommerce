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


        <Button
              className="m-2"
              variant="primary"
              onClick={() => {
                dispatch({
                  type: "CLEAR_CART",
    
                });
              }}
            >
             Vaciar Carrito
            </Button>
    </>
  );
};

export default Cart;
