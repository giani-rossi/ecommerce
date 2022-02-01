import { useContext } from "react";
import { Badge, Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Cart from "./Cart";



const ProductItem = ({ data }) => {



  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  let { id, name, qty, image, price } = data;

  return (
    <div>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as=""
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{name}</div> Unit price =  $ {price}
            <div className="fw">Subtotal = ${qty * price}</div>
            <br></br>
            <Button
              className="m-2"
              variant="primary"
              onClick={() => {
                dispatch({
                  type: "DELETE_ALL",
                  payload: data.id,
                });
              }}
            >
              Eliminar todos
            </Button>
            <br></br>
            <Button
              className="m-2"
              variant="primary"
              onClick={() => {
                dispatch({
                  type: "DELETE_ITEM",
                  payload: data.id,
                });
              }}
            >
              Eliminar uno
            </Button>
        
          </div>
          <Badge variant="primary" pill>
            Quantity: {qty}
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default ProductItem;
