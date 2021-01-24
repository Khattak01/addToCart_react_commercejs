import React, { useState, useEffect } from "react";
import { Navbar, Products, Cart } from "./components";
import { commerce } from "./lib/Commerce";
import { Switch, Route } from 'react-router-dom';


function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  // const [order, setOrder] = useState({});

  useEffect(() => {
    fetchProducts();
    fetchCart();
    return () => {
      // setProducts(null);
    };
  }, []);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };
  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  };

  // console.log(cart)
  return (
    <div className="app">
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route path="/cart">
          <Cart cart={cart}
            handleUpdateCartQty={handleUpdateCartQty} 
            handleRemoveFromCart={handleRemoveFromCart} 
            handleEmptyCart={handleEmptyCart} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
