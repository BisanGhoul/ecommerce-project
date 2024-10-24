import React, {useContext } from 'react';
import { Box, Button, TextField, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 
import { AuthContext  } from '../authentication/AuthContext.jsx'
import Header from '../header/Header.jsx';
import LoginService from '../../services/login.service.js'; // Import the LoginService

const LogIn = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const { email, password } = data; 
      const response = await login(email, password); //login from authentication context
      
      if (response.success) {
        console.log('Login successful:', response.user);
        navigate('/home');  
      } else {
        alert(response.message); 
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('There was an error logging in.');
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '80px',
        }}
      >
        {/* Login Form */}
        <Box
          sx={{
            width: '100%',
            maxWidth: '400px',
            padding: '20px',
            paddingTop: '10px',
            backgroundColor: 'white',
            boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.288)',
            borderRadius: '8px',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>Log In</h1>
              </Grid>

              <Grid item xs={12}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Please enter a valid email address.",
                    pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/, message: "Invalid email format." }
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Please enter your password.",
                    minLength: { value: 6, message: "Password must be at least 6 characters long." }
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      type="password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'grey',
                    },
                  }}
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Log In
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default LogIn;
