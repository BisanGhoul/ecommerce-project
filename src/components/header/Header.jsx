import React, { useState, useEffect } from 'react';
import { AppBar, IconButton, Badge, Container, Menu, MenuItem, Typography, Divider, ListItemIcon } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, Favorite as FavoriteIcon, AccountCircle as AccountCircleIcon, Login as LoginIcon, PersonAdd as PersonAddIcon } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom'; 
import CartService from '../../services/cart.service';

const Header = () => {
  const navigate = useNavigate();
  const [numOfCartItems, setNumOfCartItems] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleProfileClick = (event) => {
    // If the menu is already open (i.e., anchorEl is set), close it by setting anchorEl to null.
    // Otherwise, open it by setting anchorEl to the current target (the profile icon).
    setAnchorEl(prev => prev ? null : event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const profileClick = () => {
    navigate('/profile');
    handleCloseMenu();
  };

  useEffect(() => {
    const updateCartItemCount = () => {
      const cartItems = CartService.getCartItems();
      setNumOfCartItems(cartItems.length);
    };
    updateCartItemCount();
  }, [CartService.getCartItems()]);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/">
              <img src="/path-to-logo.png" alt="CHICVIBE" style={{ height: '40px', marginLeft: '16px' }} />
            </a>
          </div>

          <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
            <Link to="/about-us" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>About Us</Link>
            <Link to="/contact-us" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>Contact Us</Link>
            <Link to="/products" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>Products</Link>
            <Link to="/add-product" style={{ margin: '0 16px', color: 'inherit', textDecoration: 'none' }}>Add Product</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>

            <IconButton color="inherit" onClick={() => navigate('/cart')}>
              <Badge badgeContent={numOfCartItems} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <IconButton 
              color="inherit" 
              onClick={handleProfileClick}
            >
              <AccountCircleIcon />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{ 'aria-labelledby': 'basic-button' }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
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
    </AppBar>
  );
};

export default Header;
