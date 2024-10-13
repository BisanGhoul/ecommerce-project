import React from 'react';
import { Box, Button, TextField, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import Header from '../header/Header';
import './OptionalFields.css'; // Create a CSS file for styles

const OptionalFields = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Log the optional data for now
  };

  return (
    <>
      <Header />
      <Box className="optional-fields-container">
        <Box className="optional-fields-form-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              {/* Address Book Fields */}
              <Grid item xs={12}>
                <h3>Address Book</h3>
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">Street Address</label>
                <Controller
                  name="streetAddress"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.streetAddress}
                      helperText={errors.streetAddress?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">City</label>
                <Controller
                  name="city"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.city}
                      helperText={errors.city?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">Postal Code</label>
                <Controller
                  name="postalCode"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.postalCode}
                      helperText={errors.postalCode?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">Country</label>
                <Controller
                  name="country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.country}
                      helperText={errors.country?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">Phone Number</label>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.phoneNumber}
                      helperText={errors.phoneNumber?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              {/* Payment Information Fields */}
              <Grid item xs={12}>
                <h3>Payment Information</h3>
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">Credit/Debit Card Number</label>
                <Controller
                  name="cardNumber"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.cardNumber}
                      helperText={errors.cardNumber?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">Expiration Date (MM/YY)</label>
                <Controller
                  name="expirationDate"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.expirationDate}
                      helperText={errors.expirationDate?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">CVV</label>
                <Controller
                  name="cvv"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.cvv}
                      helperText={errors.cvv?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">Name on Card</label>
                <Controller
                  name="nameOnCard"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.nameOnCard}
                      helperText={errors.nameOnCard?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              {/* Continue and Skip Button */}
              <Grid item xs={12}>
                <Button variant="contained" sx={{ backgroundColor: 'black' }} type="submit">
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
