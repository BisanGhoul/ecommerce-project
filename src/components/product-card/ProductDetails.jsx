import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box, Typography, Button, Select, MenuItem, FormControl, InputLabel, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { products } from '../../utils/product-data'; 
import CartService  from '../../services/cart.service';
const ProductDetails = () => {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === parseInt(id)); 

  // If product is not found, return a fallback UI
  if (!product) {
    return (
      <Box sx={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5">Product not found</Typography>
      </Box>
    );
  }

  const [size, setSize] = useState(product.size[0]);
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(product.colors[0]);

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // Add to Cart button handler
  const handleAddToCart = async () => {
    const productToAdd = {
      ...product,
      size: size,
      quantity: quantity,
      colors: [color]  // Add the selected color
    };

    try {
      const updatedCart = await CartService.addToCart(productToAdd);
      console.log('Cart after adding product:', updatedCart);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <Box sx={{ padding: '40px', display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
      <Box
        sx={{
          maxWidth: '800px',
          width: '100%',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          backgroundColor: '#fff',
          borderRadius: '8px',
        }}
      >
        <Grid container spacing={3}>
          {/* Product Image Section */}
          <Grid item xs={12} sm={6}>
            <Box>
              {product.images && product.images.length > 0 ? (
                <>
                  <img src={product.images[0]} alt={product.title} style={{ width: '100%' }} />
                  <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                    {product.images.map((img, index) => (
                      <img key={index} src={img} alt={`Thumbnail ${index}`} style={{ width: '50px', marginRight: '5px' }} />
                    ))}
                  </Box>
                </>
              ) : (
                <Typography>No images available</Typography>
              )}
            </Box>
          </Grid>

          {/* Product Details Section */}
          <Grid item xs={12} sm={6}>
            <Box>
              <Typography variant="h4">{product.title}</Typography>
              <Typography variant="h5" sx={{ marginBottom: '10px' }}>${product.price}</Typography>

              <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel>Size</InputLabel>
                <Select value={size} onChange={handleSizeChange}>
                  {product.size.map((s) => (
                    <MenuItem value={s} key={s}>{s}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel>Quantity</InputLabel>
                <Select value={quantity} onChange={handleQuantityChange}>
                  {[1, 2, 3, 4, 5].map((q) => (
                    <MenuItem value={q} key={q}>{q}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ marginBottom: '10px' }}>
                <InputLabel>Color</InputLabel>
                <Select value={color} onChange={(e) => setColor(e.target.value)}>
                  {product.colors.map((c) => (
                    <MenuItem value={c} key={c}>
                      {c}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button 
                variant="contained" 
                color="primary" 
                fullWidth 
                startIcon={<ShoppingCartIcon />} 
                onClick={handleAddToCart}  // Trigger the add to cart action
              >
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

      </Box>
    </Box>
  );
};

export default ProductDetails;