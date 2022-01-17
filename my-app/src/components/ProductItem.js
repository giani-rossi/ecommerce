import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";

const ProductItem = ({ data }) => {
  const {
    state: { cart},
    dispatch,
  } = useContext(CartContext);


  let { id, name, qty, image, price } = data;

  return (
    <div>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      ${price}
    </Card.Text>
    <Card.Text>
      {qty}
    </Card.Text>
    <Card.Text>
      Subtotal = ${qty*price}
    </Card.Text>
    <Button variant="primary" onClick={() => {
            dispatch({
              type: "DELETE_ALL",
              payload: data.id,
            });
          }}>Eliminar todos</Button>
    <Button variant="primary" onClick={() => {
            dispatch({
              type: "DELETE_ITEM",
              payload: data.id,
            });
          }}>Eliminar uno</Button>
  </Card.Body>
</Card>




    </div>
  );
};

export default ProductItem;
