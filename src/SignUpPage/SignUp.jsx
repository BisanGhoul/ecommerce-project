import React from 'react';
import { Box, Button, TextField, MenuItem, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignUp.css';  // Import the CSS file
import Header from '../header/Header';

const SignUp = () => {
  const { handleSubmit, control, watch, formState: { errors } } = useForm();
  const password = watch('password'); // To compare passwords
  const navigate = useNavigate(); // Initialize the navigate function

  const onSubmit = (data) => {
    console.log(data); // For now, just log the form data
    // After successful submission, navigate to the optional fields
    navigate('/optional-fields'); // Replace with your actual route
  };

  return (
    <>
      <Header />
      <Box className="signup-container">
        {/* Registration Form */}
        <Box className="signup-form-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h1>Sign Up</h1>
              </Grid>
              <Grid item xs={12}>
                <label className="input-label">First Name</label>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Please enter a valid first name.",
                    minLength: { value: 2, message: "Must be at least 2 characters." },
                    maxLength: { value: 50, message: "Must be less than 50 characters." },
                    pattern: { value: /^[A-Za-z]+$/, message: "Only letters are allowed." }
                  }}
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label className="input-label">Last Name</label>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Please enter a valid last name.",
                    minLength: { value: 2, message: "Must be at least 2 characters." },
                    maxLength: { value: 50, message: "Must be less than 50 characters." },
                    pattern: { value: /^[A-Za-z]+$/, message: "Only letters are allowed." }
                  }}
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label className="input-label">Email</label>
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
                      className="input-field"
                      error={!!errors.email}
                      helperText={errors.email?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label className="input-label">Password</label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Password must be at least 6 characters long.",
                    minLength: { value: 6, message: "Password must be at least 6 characters long." }
                  }}
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      type="password"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label className="input-label">Confirm Password</label>
                <Controller
                  name="confirmPassword"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Passwords do not match.",
                    validate: (value) => value === password || "Passwords do not match."
                  }}
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      type="password"
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword?.message}
                      {...field}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label className="input-label">Gender</label>
                <Controller
                  name="sex"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Please select your gender."
                  }}
                  render={({ field }) => (
                    <TextField
                      className="input-field"
                      select
                      error={!!errors.sex}
                      helperText={errors.sex?.message}
                      {...field}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>

              {/* Combined Button for Submission and Navigation */}
              <Grid item xs={12}>
                <Button
                  sx={{ backgroundColor: 'black' }}
                  className="signup-button"
                  variant="contained"
                  fullWidth
                  type="submit"
                >
                  Next Page
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
