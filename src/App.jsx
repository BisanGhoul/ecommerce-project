import SignUp from './SignUpPage/SignUp';
import OptionalFields from './SignUpPage/OptionalFields';
import Cart from './Cart/cartPage'
// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/optional-fields" element={<OptionalFields />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default App;
