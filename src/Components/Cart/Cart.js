// src/components/Cart.js

import React from 'react';
// import './components/Cart.css';
// ... rest of the code

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Your Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Quantity: {item.quantity}</p>
                            <img src={item.image} alt={item.name} style={{ maxWidth: '100px' }} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
