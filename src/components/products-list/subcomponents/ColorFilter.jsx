import React from "react";
import { Grid, Paper,   Box, Typography } from "@mui/material";

const ColorFilter = ({ selectedColor, setSelectedColor }) => {
  const colors = [
    { name: "White", code: "#FFFFFF" },
    { name: "Blue", code: "#0000FF" },
    { name: "Red", code: "#FF0000" },
    { name: "Black", code: "#000000" },
    { name: "Green", code: "#008000" },
    { name: "Yellow", code: "#FFFF00" },
  ];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle1">Color</Typography>
      <Grid container spacing={2}>
        {colors.map((color) => (
          <Grid item xs={4} sm={3} md={2} key={color.name}>
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
                  selectedColor === color.name ? "2px solid black" : "none",
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
  );
};

export default ColorFilter;
