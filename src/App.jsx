
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  ProtectedRoute from './components/authentication/ProtectedRoute'
import  {AuthProvider} from './components/authentication/AuthContext'
import AuthPopup from './components/authentication/AuthPopUp';
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
    SignUpPaymentPage,
    WishlistPage,
    CheckOutPage,
    NoAccess
} from './pages/index'; 

const App = () => {
  return (
    <AuthProvider>  
    <Routes>
      <Route path="/no-access" element={<NoAccess />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/checkout" element={
          <ProtectedRoute>
            <CheckOutPage />
          </ProtectedRoute>
        }  />
          {/* <Route path="/cart" element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }  />
              <Route path="/profile" element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }  /> */}
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
      <Route path="/Wishlist" element={<WishlistPage />} />
      <Route path="/pop-up" element={<AuthPopup />} />
      <Route path="*" element={<HomePage />} />

    </Routes>
    </AuthProvider>  
  );
  
};

export default App;
