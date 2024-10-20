import React from 'react';
import Header from '../components/header/Header';
import Wishlist from '../components/Wishlist/Wishlist';

const wishlistPage = () => {
  return (
    <div>
      <Header />
      <Wishlist div style={{ paddingTop: '640px' }}/>
    </div>
  );
};

export default wishlistPage;
