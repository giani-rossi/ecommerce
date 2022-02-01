import React from "react";
import { Fragment, useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";
import { ItemCount } from "../ItemCount";
import "../assets/styles.css";
const ItemDetail = ({ items , info }) => {
  
  console.log(info);
  
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  // console.log(items.stock);

  //console.log(items.id);
  /*
  const [qtyAdded, setQtyAdded] = useState(false);

  const purchaseHandler = (evn) => {
    console.log(evn);
    setQtyAdded(evn.detail.qty);
  };

  useEffect(() => {
    window.addEventListener("submitPurchase", purchaseHandler);

    return () => {
      window.removeEventListener("submitPurchase", purchaseHandler);
    };
  }, []);

  <ItemCount items={items} />
  */
 
 
  return (
    <Fragment>
      <Card className="card_detail">
        <Card.Img variant="top" src={items.image} alt="imag" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Name: {items.name} <br />
           
      
            Status: {items.status}
            <br />
            Specie: {items.species}
            <br />
            Price: {items.price} 💎
            <br />
           
          </Card.Text>
           
           

          <ItemCount className="buttons_detail" items={items} />

          <Link className="buttons_detail" to={"/"}>
            <Button variant='success' className="buttons_detail">
              Add more products 🔙
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default ItemDetail;
