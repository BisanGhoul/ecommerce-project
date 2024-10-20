import React from "react";
import { Categories } from "../../../utils/enums/index";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
} from "@mui/material";

const CategoryFilter = ({ categories, setCategories }) => {
  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle1">Categories</Typography>
      <FormGroup>
        {Object.keys(categories).map((category) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={categories[category]}
                onChange={() =>
                  setCategories({ ...categories, [category]: !categories[category] })
                }
              />
            }
            label={category}
            key={`category-${category}`}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default CategoryFilter;
