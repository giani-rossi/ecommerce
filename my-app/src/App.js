import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import CartWidget from "./components/Navbar/CartWidget";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
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
  );
}

export default App;
