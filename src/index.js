// src/index.js

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // Modify as needed

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
