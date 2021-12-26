
import './App.css';
import NavBar from './components/Navbar/Navbar';
import CartWidget from './components/Navbar/CartWidget';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import Item from './components/ItemList/Item';


function App() {
  return (
<>
<NavBar/>
<CartWidget/>
<ItemListContainer/>

</>
);
}

export default App;
