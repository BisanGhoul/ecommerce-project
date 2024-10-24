import React, { useState } from 'react';
import { Box, Button, Modal, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 

const AuthPopup = () => {
  const [open, setOpen] = useState(true); 
  const navigate = useNavigate();

  const handleClose = () => setOpen(false);

  const handleSignIn = () => {
    navigate('/sign-in');
    handleClose();
  };

  const handleSignUp = () => {
    navigate('/sign-up/basic-info');
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="auth-modal-title"
        aria-describedby="auth-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography id="auth-modal-title" variant="h6" component="h2">
            Access Restricted
          </Typography>
          <Typography id="auth-modal-description" sx={{ mt: 2 }}>
            You must be logged in to access this page. Please sign in or sign up to continue.
          </Typography>

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSignIn}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleSignUp}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default AuthPopup;
