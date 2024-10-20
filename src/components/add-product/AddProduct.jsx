import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [image, setImage] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      productName,
      productDescription,
      productPrice,
      image,
    });

    setOpenSnackbar(true);
    resetForm();
  };

  const resetForm = () => {
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setImage(null);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', 
        padding: 4,
      }}
    >
      <Typography variant="h4" sx={{ mb: 4 }}>
        Add New Product
      </Typography>
      <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 600 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Product Name"
                variant="outlined"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                sx={{ bgcolor: '#fff' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
                sx={{ bgcolor: '#fff' }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Price"
                variant="outlined"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
                sx={{ bgcolor: '#fff' }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                startIcon={<AddPhotoAlternate />}
                fullWidth
                sx={{ bgcolor: '#fff', color: '#000' }}
              >
                Upload Image
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>
            </Grid>

            {image && (
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <img src={image} alt="Product Preview" style={{ width: '100%', maxWidth: '300px', borderRadius: '8px' }} />
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Add Product
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Product added successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AddProduct;
