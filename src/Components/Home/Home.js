// src/components/Home.js

import React from 'react';
import './components/Home.css';
// ... rest of the code

const products = [
    {
        id: 1,
        name: 'Laptop 1',
        price: 999,
        image: 'laptop1.jpg',
    },
    {
        id: 2,
        name: 'Laptop 2',
        price: 1299,
        image: 'laptop2.jpg',
    },
    // Add more products as needed
];

const Home = ({ addToCart }) => {
    return (
        <div>
            <h2>Welcome to the Laptop Store</h2>
            <div>
                {products.map((product) => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <img src={product.image} alt={product.name} />
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
