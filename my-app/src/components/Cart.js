import React, { useState } from "react";
import { ListGroup, Row, Col, Button, Alert, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../context/CartContext";

import { addDoc, collection, getFirestore } from "firebase/firestore";

import ProductItem from "./ProductItem";

const Cart = (props) => {
  const {
    state: { cart, products },
    dispatch,
  } = useContext(CartContext);

  const [orderId, setOrderId] = useState();

  const SendOrder = () => {
    const order = {
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("mail").value,
      items: cartData,
      price: totalPrice,
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      alert("Thanks!! Purchase ID: " + id);
    });
  };

  const [state, setState] = useState(0);

  const value = useContext(CartContext);

  let cartData = cart;
  console.log(cartData.length);
  // console.log(value.state.cart[0].price);

  // let submitedItems = [value.state.cart];
  let content = [];
  //let price = 10;

  let totalPrice = 0;

  //console.log(submitedItems);

  if (cartData.length === 0) {
    <p>No items to display</p>;
  } else {
    cartData.map((prod) => {
      totalPrice = prod.price * prod.qty + totalPrice;

      console.log(totalPrice);

      return <Cart key={prod.id} totalPrice={totalPrice} />;
    });
  }

  return (
    <>
      <div className="cartView">
        {cart.map((prod) => (
          <ProductItem key={prod.id} data={prod} />
        ))}

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
        <Link to="/">
          <Button style={{ margin: "0 10" }} variant="success">
            Back to Home
          </Button>
        </Link>

        <Form
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control id="name" type="name" placeholder="Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control id="mail" type="text" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Relax! No vamos a compartir tus datos, es solo para registrar la
              compra
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cel</Form.Label>
            <Form.Control id="phone" type="phone" placeholder="Phone" />
          </Form.Group>
          TOTAL: $ {totalPrice}
        </Form>
      </div>
      <Button
        variant="primary"
        type="submit"
        style={{ marginLeft: 8 }}
        onClick={SendOrder}
      >
        Comprar
      </Button>
    </>
  );
};

export default Cart;
