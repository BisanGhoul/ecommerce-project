<<<<<<< HEAD
=======
import SignUp from './SignUpPage/SignUp';
import OptionalFields from './SignUpPage/OptionalFields';

import ProductList from './ProductList/ProductList';
import Cart from './Cart/cartPage'

import Profile from './Profile/Profile'

>>>>>>> c72f3dac3c6d7ebe8b520eccbcbb42da3b0c891d
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { 
    AboutUsPage, 
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
<<<<<<< HEAD
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/sign-in" element={<LogInPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailsPage />} /> 
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/sign-up/basic-info" element={<SignUpBasicInfoPage />} />
      <Route path="/sign-up/payment" element={<SignUpPaymentPage />} />
=======
      <Route path="/" element={<SignUp />} />
      <Route path="/optional-fields" element={<OptionalFields />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile" element={<Profile />} />

>>>>>>> c72f3dac3c6d7ebe8b520eccbcbb42da3b0c891d
    </Routes>
  );
};

export default App;
