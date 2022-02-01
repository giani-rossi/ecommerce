import React, { Fragment } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import style from "./Item.css";

export default function Item(props) {

  //console.log(props);

  return (
    <Fragment>
      <Card style={{ margin: 30 , width:'30%' }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text style={{fontStyle:'italic'}}>{props.description}</Card.Text>
          <Card.Text>{props.type}</Card.Text>
          <Link to={`/detail/${props.id}`}>
            <Button variant="primary">View More</Button>
          </Link>
        </Card.Body>
      </Card>
    </Fragment>
  );
}
