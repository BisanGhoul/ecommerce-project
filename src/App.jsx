
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { 
    AboutUsPage, 
    AddProductPage, 
    CartPage, 
    ContactUsPage, 
    FavoritesPage, 
    HomePage, 
    LogInPage, 
    ProductDetailsPage, 
    ProductsPage, 
    ProfilePage, 
    SignUpBasicInfoPage, 
    SignUpPaymentPage 
} from './pages/index'; 

const App = () => {
  return (
    <Routes>
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/sign-in" element={<LogInPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} /> 
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/add-product" element={<AddProductPage/>} />
      <Route path="/sign-up/basic-info" element={<SignUpBasicInfoPage />} />
      <Route path="/sign-up/payment" element={<SignUpPaymentPage />} />
      <Route path="*" element={<HomePage />} />

    </Routes>
  );
  
};

export default App;
