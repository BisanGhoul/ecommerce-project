import React from "react";
import { Slider, Typography,   Box } from "@mui/material";

const PriceRangeFilter = ({ priceRange, setPriceRange }) => {
  const handlePriceRange = (event, newValue) => {
    setPriceRange(newValue);
  };

  return (
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
  );
};

export default PriceRangeFilter;
