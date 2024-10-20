import React, { useState } from 'react';
import { Box, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { AccountCircle, Email, Phone } from '@mui/icons-material';

const ContactUs = () => {
  const [showFields, setShowFields] = useState(false);

  const handleClick = () => {
    setShowFields(true);  
  };

  return (
    <Box
      sx={{
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundImage: 'url("your-image-path.jpg")', 
        padding: 4,
        borderRadius: 2,
        maxWidth: 400,
        margin: 'auto',
        bgcolor: '#f9f9f9',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        We will get back to you asap!
      </Typography>

      {!showFields && (
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{
            backgroundColor: '#000',
            color: '#fff',
            padding: '10px 24px',
            '&:hover': {
              backgroundColor: '#001a4a',
            },
          }}
        >
          Show Contact Form
        </Button>
      )}

      {showFields && (
        <>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="First Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Last Name"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Email"
            sx={{ mb: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Phone"
            sx={{ mb: 3 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '10px 24px',
              '&:hover': {
                backgroundColor: '#001a4a',
              },
            }}
          >
            Send
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: '#666' }}>
            You may also call us at 333-33-33
          </Typography>
        </>
      )}
    </Box>
  );
};

export default ContactUs; 