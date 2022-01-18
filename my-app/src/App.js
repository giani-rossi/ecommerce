import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <>
        <Router>
          <NavBar/>
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
          </Routes>
        </Router>
      </>
    </CartProvider>
  );
}

export default App;
