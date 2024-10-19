import React, { useState } from 'react';
import Header from '../header/Header';

import { Grid, Box, Divider, Card, CardMedia,FormGroup, CardContent, Typography, FormControl, Select, MenuItem, Checkbox, FormControlLabel, Slider, Button } from '@mui/material';

// Sample product data
const products = [
  { title: "Product 1", price: 20, colors: ['Black', 'White'] },
  { title: "Product 2", price: 32, colors: ['Black', 'White'] },
  { title: "Product 3", price: 75, colors: ['Black', 'Red'], discountPrice: 50 },
  { title: "Product 4", price: 56, colors: ['Black', 'Blue'] },
  { title: "Product 5", price: 100, colors: ['Black', 'Yellow'] },
  { title: "Product 6", price: 125, colors: ['Black', 'White'] },
  { title: "Product 1", price: 20, colors: ['Black', 'White'] },
  { title: "Product 2", price: 32, colors: ['Black', 'White'] },
  { title: "Product 3", price: 75, colors: ['Black', 'Red'], discountPrice: 50 },
  { title: "Product 4", price: 56, colors: ['Black', 'Blue'] },
  { title: "Product 5", price: 100, colors: ['Black', 'Yellow'] },
  { title: "Product 6", price: 125, colors: ['Black', 'White'] },
  { title: "Product 1", price: 20, colors: ['Black', 'White'] },
  { title: "Product 2", price: 32, colors: ['Black', 'White'] },
  { title: "Product 3", price: 75, colors: ['Black', 'Red'], discountPrice: 50 },
  { title: "Product 4", price: 56, colors: ['Black', 'Blue'] },
  { title: "Product 5", price: 100, colors: ['Black', 'Yellow'] },
  { title: "Product 6", price: 125, colors: ['Black', 'White'] },
  { title: "Product 1", price: 20, colors: ['Black', 'White'] },
  { title: "Product 2", price: 32, colors: ['Black', 'White'] },
  { title: "Product 3", price: 75, colors: ['Black', 'Red'], discountPrice: 50 },
  { title: "Product 4", price: 56, colors: ['Black', 'Blue'] },
  { title: "Product 5", price: 100, colors: ['Black', 'Yellow'] },
  { title: "Product 6", price: 125, colors: ['Black', 'White'] },
];

const ProductListing = () => {
  const [sortBy, setSortBy] = useState('lowToHigh');
  const [priceRange, setPriceRange] = useState([10, 1500]);
  const [categories, setCategories] = useState({
    Men: true,
    Women: false,
    Boys: false,
    Girls: false,
    Babies: false,
    Accessories: false
  });

  const handlePriceRange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
    <>
      <Box display="flex" padding={2} mt={10}>
        {/* Sidebar Filters */}
        <Box
          width="250px"
          padding={2}
          sx={{
            position: 'sticky',
            top: '80px', // Adjust top distance based on your header height
            height: '100vh', // This ensures the sidebar takes up the full height
            overflowY: 'auto', // Allows scrolling within the sidebar if necessary
          }}
        >
          <Typography variant="h6">Filters</Typography>
          <Divider /> 

{/* Category Filters */}
<Box marginBottom={2}>
  <Typography variant="subtitle1">Categories</Typography>
  <FormGroup>
    {Object.keys(categories).map((category) => (
      <FormControlLabel
        control={
          <Checkbox
            checked={categories[category]}
            onChange={() => setCategories({ ...categories, [category]: !categories[category] })}
          />
        }
        label={category}
        key={category}
      />
    ))}
  </FormGroup>
</Box>
<Divider /> 
          {/* Price Range Slider */}
          <Box marginBottom={2}>
            <Typography variant="subtitle1">Price Range</Typography>
            <Slider
              value={priceRange}
              onChange={handlePriceRange}
              valueLabelDisplay="auto"
              min={10}
              max={150}
            />
          </Box>
          <Divider /> 

          {/* Sort Options */}
          <Box marginBottom={2}>
            <Typography variant="subtitle1">Sort By</Typography>
            <FormControl fullWidth>
              <Select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
                <MenuItem value="highToLow">Price: High to Low</MenuItem>
                <MenuItem value="newest">Newest First</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained">Clear Filters</Button>
        </Box>
        <Divider /> 


        {/* Product Grid */}
        <Box flex="1" padding={2}>
          <Grid container spacing={2}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://via.placeholder.com/150" // Placeholder image
                    alt={product.title}
                  />
                  <CardContent>
                    <Typography variant="h6">{product.title}</Typography>
                    {product.discountPrice ? (
                      <Typography color="error">
                        <s>{product.price}</s> {product.discountPrice}
                      </Typography>
                    ) : (
                      <Typography>{`$${product.price}`}</Typography>
                    )}
                    <Typography variant="body2">{product.colors.length} color options</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ProductListing;
