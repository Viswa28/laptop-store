// src/App.js
import './App.css';
// ... rest of the code

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import SignUp from './components/SignUp';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route
          exact
          path="/"
          render={(props) => <Home {...props} addToCart={addToCart} />}
        />
        <Route path="/cart" render={(props) => <Cart {...props} cart={cart} />} />
        <Route path="/signup" component={SignUp} />
      </div>
    </Router>
  );
};

export default App;
