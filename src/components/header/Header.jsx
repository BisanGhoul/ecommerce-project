import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
<<<<<<< HEAD:src/components/header/Header.jsx
import { Container } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom'; 

const Header = () => {
  const navigate = useNavigate();

=======



import { Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const navigate = useNavigate();
>>>>>>> c72f3dac3c6d7ebe8b520eccbcbb42da3b0c891d:src/header/Header.jsx
  function cartClick () {
    navigate('/cart');
  }
  function profileClick () {
    navigate('/profile');
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
      <Container maxWidth="xl">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a href="/">
              <img src="/path-to-logo.png" alt="Logo" color="inherit" style={{ height: '40px', marginLeft: '16px' }} />
            </a>
          </div>

          {/* Links in the middle */}
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
          </div>

          {/* Icons on the right */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="error">
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={1} color="error">
                <ShoppingCartIcon onClick = {cartClick} />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
<<<<<<< HEAD:src/components/header/Header.jsx
                <AccountCircleIcon onClick = {profileClick}/> 
=======
              <AccountCircleIcon onClick = {profileClick}/>
>>>>>>> c72f3dac3c6d7ebe8b520eccbcbb42da3b0c891d:src/header/Header.jsx
            </IconButton>
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
