import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import CartWidget from "./components/Navbar/CartWidget";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <CartProvider>
    <>
      <NavBar />
      <CartWidget />
      <Router>
        <Routes>
          <Route path="/" element={<ItemListContainer />}></Route>
          <Route path="/detail/:id" element={<ItemDetailContainer />}></Route>
        </Routes>
      </Router>
    </>
      </CartProvider>
  );
}

export default App;
