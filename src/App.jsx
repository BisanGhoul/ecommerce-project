import SignUp from './SignUpPage/SignUp';
import OptionalFields from './SignUpPage/OptionalFields';
import ProductList from './ProductList/ProductList';

// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/optional-fields" element={<OptionalFields />} />
      <Route path="/products" element={<ProductList />} />

    </Routes>
  );
};

export default App;
