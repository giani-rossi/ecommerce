import React, { Fragment, useContext } from "react";
import { Badge, Dropdown, Button } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";

const CartWidget = () => {
 
  
  const {
    state: { cart },
    dispatch,
  } = useContext(CartContext);

  console.log(cart);
  return (
    <Fragment>
      <Dropdown alignRight>
        <DropdownToggle style={{ padding: 2 }}>
          <BsCart3
            color="white"
            fontSize="25px"
            style={{ marginLeft: 20, marginRight: 10 }}
          />
          <Badge>{cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu style={{ minWidth: 370 }}>
          {cart.length > 0 ? (
            <>
              {cart.map((items, index) => (
                <div className="itemCart" key={index}>
                  <img
                    src={items.image}
                    className="imageCart"
                    alt={items.name}
                  ></img>

                  <div className="itemCart">
                    <span className="nameCart">Name: {items.name}</span>
                    <span className="priceCart"> Price: 💎 {items.price}</span>
                    <TiDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        dispatch({
                          type: "DELETE_ALL",
                          payload: items.id,
                        })
                      }
                    />
                  </div>
                </div>
              ))}
              <Link to="/cart">
                {" "}
                <Button
                  style={{ width: "95%", margin: "0 10px" }}
                  variant="success"
                >
                  Go to cart
                </Button>
              </Link>
            </>
          ) : (
            <span>Cart is Empty!</span>
          )}
        </DropdownMenu>
      </Dropdown>
    </Fragment>
  );
};

export default CartWidget;
