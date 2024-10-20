import React from 'react';
import { Grid, Card, Box, CardMedia, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductGrid = ({ filteredProducts }) => {
  return (
    <Box flex="1" padding={2}>
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={`product-${product.id}`}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.images[0]}
                  alt={product.title}
                  sx={{ objectFit: 'contain' }}
                />
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  {product.discountPrice ? (
                    <Typography color="error">
                      <s>{product.price}</s> ${product.discountPrice}
                    </Typography>
                  ) : (
                    <Typography>{`$${product.price}`}</Typography>
                  )}
                  <Typography variant="body2">
                    {product.colors.length} color options
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
