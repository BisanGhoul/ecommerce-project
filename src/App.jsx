import SignUp from './SignUpPage/SignUp';
import OptionalFields from './SignUpPage/OptionalFields';
// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/optional-fields" element={<OptionalFields />} />
    </Routes>
  );
};

export default App;
