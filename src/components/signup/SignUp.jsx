import { Box, Button, TextField, MenuItem, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 
import Header from '../header/Header.jsx';

const SignUp = () => {
  const { handleSubmit, control, watch, formState: { errors } } = useForm();
  const password = watch('password');
  const navigate = useNavigate();

  const onSubmit =   (data) => {
    try {
      navigate('/sign-up/payment', {state:data});
    } catch (error) {
      console.error('Error during signup:', error);
      alert('There was an error signing up.');
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
        {/* Registration Form */}
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
                <h1>Sign Up</h1>
              </Grid>

              <Grid item xs={12}>
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  First Name
                </label>
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
                      fullWidth
                      error={!!errors.firstName}
                      helperText={errors.firstName?.message}
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
                  Last Name
                </label>
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
                      fullWidth
                      error={!!errors.lastName}
                      helperText={errors.lastName?.message}
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
                    required: "Password must be at least 6 characters long.",
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
                <label
                  style={{
                    display: 'block',
                    marginBottom: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  Confirm Password
                </label>
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
                      fullWidth
                      type="password"
                      error={!!errors.confirmPassword}
                      helperText={errors.confirmPassword?.message}
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
                  Gender
                </label>
                <Controller
                  name="sex"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: "Please select your gender."
                  }}
                  render={({ field }) => (
                    <TextField
                      fullWidth
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
