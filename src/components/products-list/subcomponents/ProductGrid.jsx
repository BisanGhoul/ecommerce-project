import React from "react";
import { Grid, Card,   Box, CardMedia, CardContent, Typography } from "@mui/material";

const ProductGrid = ({ filteredProducts }) => {
  return (
    <Box flex="1" padding={2}>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={`product-${product.id}`}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={product.images[0]}
                alt={product.title}
                style={{ objectFit: "contain" }}
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
                <Typography variant="body2">
                  {product.colors.length} color options
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
