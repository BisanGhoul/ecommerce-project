import React from "react";
import { ItemTypes } from "../../../utils/enums/index";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,  Box,
  Typography,
} from "@mui/material";

const ProductTypeFilter = ({ productTypes, setProductTypes }) => {
  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle1">Product Type</Typography>
      <FormGroup>
        {Object.keys(productTypes).map((type) => (
          <FormControlLabel
            control={
              <Checkbox
                checked={productTypes[type]}
                onChange={() =>
                  setProductTypes({ ...productTypes, [type]: !productTypes[type] })
                }
              />
            }
            label={type}
            key={type}
          />
        ))}
      </FormGroup>
    </Box>
  );
};

export default ProductTypeFilter;
