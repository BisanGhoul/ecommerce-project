import React from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
  const navigate = useNavigate();
  function cartClick () {
    navigate('/cart'); // Replace with your actual route
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
            <Link href="#" color="inherit" style={{ margin: '0 16px' }}>
              About us
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 16px' }}>
              Contact US
            </Link>
            <Link href="#" color="inherit" style={{ margin: '0 16px' }}>
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
              <AccountCircleIcon />
            </IconButton>
          </div>
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
