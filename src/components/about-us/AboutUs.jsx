import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LeadershipIcon from '@mui/icons-material/Groups';
import CareersIcon from '@mui/icons-material/TrendingUp';
import PartnershipsIcon from '@mui/icons-material/Handshake';
import PressIcon from '@mui/icons-material/Article';

const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#121212',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px 0',
        backgroundImage: 'url("your-image-path.jpg")', // add your image path here if you want
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h4" sx={{ mb: 5 }}>
        Get to know us
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Box
          sx={{
            height: '3px',
            width: '100px',
            bgcolor: '#fff',
          }}
        />
      </Box>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <LeadershipIcon sx={{ fontSize: 60, mb: 2, color: '#fff' }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              LEADERSHIP
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              Our multicultural leaders have deep start-up and enterprise experience, with rich mobile and data expertise.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <CareersIcon sx={{ fontSize: 60, mb: 2, color: '#fff' }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              CAREERS
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              We take great pride in our market leadership position, thanks to the hard work of our incredibly talented.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <PartnershipsIcon sx={{ fontSize: 60, mb: 2, color: '#fff' }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              PARTNERSHIPS
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              From research, to events, to platform partnerships, we work with thought leaders to provide more actionable data.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 2,
            }}
          >
            <PressIcon sx={{ fontSize: 60, mb: 2, color: '#fff' }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              PRESS
            </Typography>
            <Typography variant="body2" sx={{ color: '#ccc' }}>
              We are at the forefront of the market's conversations and serve as the most trusted, global source.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
