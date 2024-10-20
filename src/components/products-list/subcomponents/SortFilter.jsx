import React from "react";
import { Select,  Box, MenuItem, FormControl, Typography } from "@mui/material";

const SortFilter = ({ sortBy, setSortBy }) => {
  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle1">Sort By</Typography>
      <FormControl fullWidth>
        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <MenuItem value="lowToHigh">Price: Low to High</MenuItem>
          <MenuItem value="highToLow">Price: High to Low</MenuItem>
          <MenuItem value="newest">Newest First</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SortFilter;
