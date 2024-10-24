import React, { useState, useEffect } from 'react';
import { AppBar, IconButton, Badge, Container, Menu, MenuItem, Typography, Divider, ListItemIcon } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, Favorite as FavoriteIcon, AccountCircle as AccountCircleIcon, Login as LoginIcon, PersonAdd as PersonAddIcon } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom'; 
import AuthPopup from '../authentication/AuthPopUp';
import CartService from '../../services/cart.service';

const Header = () => {
  const navigate = useNavigate();
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showPopup, setShowPopup] = useState(false);  

  const handleProfileClick = (event) => {
    
    setAnchorEl(prev => (prev ? null : event.currentTarget));
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };


  const profileClick = () => {
    handleCloseMenu();
    if(!isLoggedIn()){
      setShowPopup(true);
    }else{
      navigate('/profile');  
    }
  };

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

  const isLoggedIn = () => {
    return localStorage.getItem('currentUser') !== null;
  };

  const cartClick = () => {
    if(!isLoggedIn()){
      setShowPopup(true);
    }else{
      navigate('/cart');  
    }
  };

  const wishlistClick = () => {
    navigate('/wishlist');
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/">
              <img src="/path-to-logo.png" alt="CHICVIBE" style={{ height: '40px', marginLeft: '16px', color: 'white' }} />
            </a>
          </div>

          <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            <Link to="/about-us" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>
              About Us
            </Link>
            <Link to="/contact-us" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>
              Contact Us
            </Link>
            <Link to="/products" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>
              Products
            </Link>
            <Link to="/add-product" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>
              Add product
            </Link>
          </div>

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
            <IconButton color="inherit" onClick={handleProfileClick}>
              <AccountCircleIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}  // Use anchorEl to determine if the menu is open
              onClose={handleCloseMenu}
              MenuListProps={{ 'aria-labelledby': 'profile-button' }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Positioning the menu
              transformOrigin={{ vertical: 'top', horizontal: 'center' }} // Positioning the menu
              PaperProps={{
                elevation: 3,
                sx: {
                  width: '200px',
                  padding: '8px',
                }
              }}
            >
              <MenuItem onClick={profileClick}>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Visit Profile</Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => navigate('/sign-in')}>
                <ListItemIcon>
                  <LoginIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Log In</Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate('/sign-up/basic-info')}>
                <ListItemIcon>
                  <PersonAddIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body1">Sign Up</Typography>
              </MenuItem>
            </Menu>
          </div>
        </div>
      </Container>
      {showPopup && <AuthPopup />}
    </AppBar>
  );
};

export default Header;
