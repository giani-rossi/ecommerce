import { InitialState } from "./CartContext";

export const CartReducer = (state, action) => {
  // console.log(state);
  //the action can be reduce or increase
  
  
  switch (action.type) {
    case "ADD_ITEM": {
      //console.log(action.payload);
      //COMO HACER QUE LOS ITEMS NO SE REPITAN EN EL CARRITO
      //CREAMOS LA VARIABLE NEWITEM Y SI LOS IDS QUE ESTAN EN EL CARRITO COINCIDEN CON EL QE MANDO EL USUARIO
      let newItem = state.products.find((prod) => prod.id === action.payload);
      // console.log(newItem);
      let itemInCart = state.cart.find((prod) => prod.id === newItem.id);

      

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === newItem.id
                ? { ...item, qty: item.qty + 1 }
                : { ...item, qty: item.qty }
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, qty: 1 }],
          };
    }

    case "DELETE_ITEM": {
      let itemDelete = state.cart.find((prod) => prod.id === action.payload);
      console.log(itemDelete);

      return itemDelete.qty > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }

    case "DELETE_ALL": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }

    case "CLEAR_CART":
      return InitialState;

    default:
      return state;
  }
};
