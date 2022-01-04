
import React , {createContext , useState, useEffect}from "react";

export const CartContext = createContext();

//creacion provider

export const CartProvider = ({ children }) => {
  
    const [qtyAdded, setQtyAdded] = useState('');
    const purchaseHandler = (evn) => {
        setQtyAdded(evn.detail.qty);
        console.log(evn.detail.qty);
    };
    
    console.log(qtyAdded);
    
    useEffect(() => {
        window.addEventListener("submitPurchase", purchaseHandler);
        
        return () => {
            window.removeEventListener("submitPurchase", purchaseHandler);
        };
    }, []);
    
  
    return (
<CartContext.Provider value={setQtyAdded}>
  {children}
</CartContext.Provider>

)};
