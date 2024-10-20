import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom'; 
import CartService from '../../services/cart.service';

const Header = () => {
  const navigate = useNavigate();
  const [numOfCartItems, setNumOfCartItems] = useState(0);

  useEffect(() => {
    const updateCartItemCount = () => {
      const cartItems = CartService.getCartItems();
      setNumOfCartItems(cartItems.reduce((total, item) => total + item.quantity, 0));
    };
  
    // Initial load
    updateCartItemCount();
  
    // Listen for cart updates
    const handleCartUpdate = () => {
      updateCartItemCount();
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);
  
    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  function cartClick() {
    navigate('/cart');
  }

  function profileClick() {
    navigate('/profile');
  }

  function wishlistClick() {
    navigate('/wishlist');
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          {/* logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/">
              <img src="/path-to-logo.png" alt="CHICVIBE" style={{ height: '40px', marginLeft: '16px' , color:'white'}} />
            </a>
          </div>

          {/* Links in the middle */}
          <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            <Link to="/about-us" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>About Us</Link>
            <Link to="/contact-us" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
            <Link to="/products" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>Products</Link>
            <Link to="/add-product" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>Add Product</Link>
            <Link to="/sign-in" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>Login</Link>
            <Link to="/sign-up/basic-info" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>Signup</Link>
          </div>

          {/* Icons on the right */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" onClick={wishlistClick}>
              <Badge badgeContent={0} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={cartClick}>
              <Badge badgeContent={numOfCartItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit" onClick={profileClick}>
              <AccountCircleIcon />
            </IconButton>
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
