import React, { useState, useEffect } from "react";
import { products } from "../../utils/product-data";

import {
  Categories,
  Colors,
  ItemTypes,
  Sizes,
  Tags,
} from "../../utils/enums/index";

import {
  Grid,
  Box,
  Divider,
  Paper,
  Card,
  CardMedia,
  FormGroup,
  CardContent,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Slider,
  Button,
} from "@mui/material";

const ProductListing = () => {
  const [sortBy, setSortBy] = useState("lowToHigh");
  const [priceRange, setPriceRange] = useState([10, 600]);
  const [productTypes, setProductTypes] = useState({
    [ItemTypes.TOPS]: true,
    [ItemTypes.BOTTOMS]: false,
    [ItemTypes.HATS]: false,
    [ItemTypes.SHOES]: false,
    [ItemTypes.ACCESSORIES]: false,
  });

  const [categories, setCategories] = useState({
    [Categories.MEN]: true,
    [Categories.WOMEN]: false,
    [Categories.BOYS]: false,
    [Categories.GIRLS]: false,
    [Categories.BABIES]: false,
  });

  const [sizes, setSizes] = useState({
    [Sizes.SMALL]: false,
    [Sizes.MEDIUM]: true,
    [Sizes.LARGE]: false,
    [Sizes.EXTRA_LARGE]: false,
    [Sizes.XXL]: false,
  });

  const [tags, setTags] = useState({
    [Tags.NEW]: false,
    [Tags.SALE]: false,
  });

  const [filteredProducts, setFilteredProducts] = useState(products); // state for filtered products

  const handlePriceRange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const colors = [
    { name: Colors.WHITE, code: "#FFFFFF" },
    { name: Colors.BLUE, code: "#0000FF" },
    { name: Colors.CYAN, code: "#00FFFF" },
    { name: Colors.RED, code: "#FF0000" },
    { name: Colors.YELLOW, code: "#FFFF00" },
    { name: Colors.BLACK, code: "#000000" },
    { name: Colors.PURPLE, code: "#800080" },
    { name: Colors.PINK, code: "#FFC0CB" },
    { name: Colors.ORANGE, code: "#FFA500" },
    { name: Colors.GREEN, code: "#008000" },
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    const newFilteredProducts = products
      .filter((product) => {
        const categoryMatch = categories[product.category];
        const productTypeMatch = productTypes[product.itemType];
        console.log(productTypeMatch);
        // const sizeMatch = sizes[product.size]);
        const priceMatch =
          product.price >= priceRange[0] && product.price <= priceRange[1];

        const colorMatch =
          !selectedColor || product.colors.includes(selectedColor);

        return (
          categoryMatch &&
          productTypeMatch &&
          // sizeMatch &&
          priceMatch &&
          colorMatch
        );
      })
      .sort((a, b) => {
        if (sortBy === "lowToHigh") {
          return a.price - b.price;
        } else if(sortBy === "highToLow") {
          return b.price - a.price;
        } 
        return 0;
      });

      // console.log(newFilteredProducts)
    // Update the filtered products state
    setFilteredProducts(newFilteredProducts);
  }, [
    categories,
    productTypes,
    sizes,
    priceRange,
    selectedColor,
    sortBy,
  ]); // dependencies to trigger the effect

  return (
    <>
      <Box display="flex" padding={2} mt={10}>
        <Box
          width="250px"
          padding={2}
          sx={{
            position: "sticky",
            top: "80px",
            height: "100vh",
            overflowY: "auto",
          }}
        >
          <Typography variant="h6">Filters</Typography>
          <Divider />

          {/* // sidebar */}
          <Box marginBottom={2}>
            <Typography variant="subtitle1">Categories</Typography>
            <FormGroup>
              {Object.keys(categories).map((category) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={categories[category]}
                      onChange={() =>
                        setCategories({
                          ...categories,
                          [category]: !categories[category],
                        })
                      }
                    />
                  }
                  label={category}
                  key={`category-${category}`}
                />
              ))}
            </FormGroup>
          </Box>
          <Divider />
          <Box marginBottom={2}>
            <Typography variant="types">Product Type</Typography>
            <FormGroup>
              {Object.keys(productTypes).map((type) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={productTypes[type]}
                      onChange={() =>
                        setProductTypes({
                          ...productTypes,
                          [type]: !productTypes[type],
                        })
                      }
                    />
                  }
                  label={type}
                  key={type}
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
              max={600}
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
          <Divider />

          <Box marginBottom={2}>
            <Typography variant="subtitle1">color</Typography>
            <Grid container spacing={2} sx={{ marginTop: "20px" }}>
                            {colors.map((color) => (
                <Grid item xs={4} sm={3} md={2} key={`${color.name}-${color.code}`}>
                  <Paper
                    onClick={() => handleColorClick(color.name)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "60px",
                      backgroundColor: color.code,
                      cursor: "pointer",
                      border:
                        selectedColor === color.name
                          ? "2px solid black"
                          : "none",
                    }}
                  >
                    <Typography variant="body1" style={{ color: "white" }}>
                      {color.name}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            {selectedColor && (
              <Typography variant="h6" style={{ marginTop: "20px" }}>
                Selected Color: {selectedColor}
              </Typography>
            )}
          </Box>

          <Button variant="contained">Clear Filters</Button>
        </Box>
        <Divider />

        {/* Product Grid */}
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
                    style={{ objectFit: 'contain' }} 
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
      </Box>
    </>
  );
};

export default ProductListing;
