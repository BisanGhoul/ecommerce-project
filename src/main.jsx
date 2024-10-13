// index.js or main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from react-dom/client
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App'; 

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root instance

root.render(
  <Router>
    <App />
  </Router>
);
