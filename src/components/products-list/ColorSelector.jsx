import React, { useState } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { Colors } from '../../utils/enums/index';
const colors = [
  { name: 'White', code: '#FFFFFF' },
  { name: 'Blue', code: '#0000FF' },
  { name: 'Cyan', code: '#00FFFF' },
  { name: 'Red', code: '#FF0000' },
  { name: 'Yellow', code: '#FFFF00' },
  { name: 'Black', code: '#000000' },
  { name: 'Purple', code: '#800080' },
  { name: 'Pink', code: '#FFC0CB' },
  { name: 'Orange', code: '#FFA500' },
  { name: 'Green', code: '#008000' },
];

const ColorSelector = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle1">color</Typography>
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        {colors.map((color) => (
          <Grid item xs={4} sm={3} md={2} key={color.name}>
            <Paper
              onClick={() => handleColorClick(color.name)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '60px',
                backgroundColor: color.code,
                cursor: 'pointer',
                border: selectedColor === color.name ? '2px solid black' : 'none',
              }}
            >
              <Typography variant="body1" style={{ color: 'white' }}>
                {color.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {selectedColor && (
        <Typography variant="h6" style={{ marginTop: '20px' }}>
          Selected Color: {selectedColor}
        </Typography>
      )}
    </Box>
  );
};

export default ColorSelector;
