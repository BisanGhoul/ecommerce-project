import React from 'react';
import Header from './header/Header';
import { Grid, Box, Typography, Button, Select, MenuItem, InputLabel, FormControl, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ProductDetails = () => {
  const [size, setSize] = React.useState('');
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState('Black');

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={2}>
        {/* Product Image Section */}
        <Grid item xs={12} sm={6}>
          <Box>
            <img src="https://via.placeholder.com/400" alt="Product" style={{ width: '100%' }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <img src="https://via.placeholder.com/50" alt="Thumbnail" />
            </Box>
          </Box>
        </Grid>

        {/* Product Details Section */}
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography variant="h4">Black T-shirt</Typography>
            <Typography variant="h5" sx={{ marginBottom: '10px' }}>$20</Typography>

            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
              <InputLabel>Size</InputLabel>
              <Select value={size} onChange={handleSizeChange}>
                <MenuItem value={'Small'}>Small</MenuItem>
                <MenuItem value={'Medium'}>Medium</MenuItem>
                <MenuItem value={'Large'}>Large</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
              <InputLabel>Quantity</InputLabel>
              <Select value={quantity} onChange={handleQuantityChange}>
                {[1, 2, 3, 4, 5].map((q) => (
                  <MenuItem value={q} key={q}>
                    {q}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: '10px' }}>
              <InputLabel>Color</InputLabel>
              <Select value={color}>
                <MenuItem value={'Black'}>Black</MenuItem>
                <MenuItem value={'White'}>White</MenuItem>
              </Select>
            </FormControl>

            <Button variant="contained" color="primary" fullWidth startIcon={<ShoppingCartIcon />}>
              Add To Cart
            </Button>
          </Box>

          {/* Favorite and Cart Icon */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Related Products Section */}
      <Box sx={{ marginTop: '30px' }}>
        <Typography variant="h6">Related Products</Typography>
        <Grid container spacing={2} sx={{ marginTop: '10px' }}>
          {['Shirt1', 'Shirt2', 'Shirt3', 'Shirt4'].map((item, index) => (
            <Grid item xs={3} key={index}>
              <img src={`https://via.placeholder.com/100`} alt={`Product ${index}`} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetails;
