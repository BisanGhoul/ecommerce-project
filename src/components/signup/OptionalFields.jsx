import SignupService from '../../services/signup.service';
import { Box, Button, TextField, Grid, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useLocation } from 'react-router-dom'; 

import Header from '../header/Header';

const OptionalFields = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = async (data) => {
    try{

    const basicUserData = location.state;
    const userData = {...basicUserData,...data};
    console.log("User Info:"+userData); 
    const response = await SignupService.signup(userData);
    console.log("response:"+response); 
    navigate('/home');

    }catch(err){
      console.log(err);
    }
  };

  return (
    <>
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '80px',
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: '400px',
            marginTop: '20px',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {/* Address Book Fields */}
              <Grid item xs={12}>
                <Typography variant="h6">Address Book</Typography>
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="streetAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Street Address"
                      error={!!errors.streetAddress}
                      helperText={errors.streetAddress?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="City"
                      error={!!errors.city}
                      helperText={errors.city?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="postalCode"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Postal Code"
                      error={!!errors.postalCode}
                      helperText={errors.postalCode?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Country"
                      error={!!errors.country}
                      helperText={errors.country?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Phone Number"
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              {/* Payment Information Fields */}
              <Grid item xs={12}>
                <Typography variant="h6">Payment Information</Typography>
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="cardNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Credit/Debit Card Number"
                      error={!!errors.cardNumber}
                      helperText={errors.cardNumber?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="expirationDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Expiration Date (MM/YY)"
                      error={!!errors.expirationDate}
                      helperText={errors.expirationDate?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="cvv"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="CVV"
                      error={!!errors.cvv}
                      helperText={errors.cvv?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="nameOnCard"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      fullWidth
                      label="Name on Card"
                      error={!!errors.nameOnCard}
                      helperText={errors.nameOnCard?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              {/* Continue and Skip Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'black',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'grey',
                    },
                  }}
                  fullWidth
                  type="submit"
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default OptionalFields;
