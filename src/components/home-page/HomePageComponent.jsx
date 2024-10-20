import React from 'react';
import { Box, Typography, Button, Grid, Container, Avatar, Card, CardContent } from '@mui/material';
import backgroundImage from '../../assets/background-img.jpeg'; 

const HomePageComponent = () => {
  return (
    <Box>
      <Box
        sx={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          padding: '0 20px',
          position: 'relative',
        }}
      >
        <Box sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '40px', borderRadius: '20px' }}>
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            Welcome to Our ChicVibe
          </Typography>
          <Typography variant="h6" sx={{ mb: 5 }}>
            Discover the best way to manage your projects with speed and security.
          </Typography>
          <Button variant="contained" color="primary" sx={{ borderRadius: '20px', padding: '10px 20px' , }}>
            Log in
          </Button>
        </Box>
      </Box>
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
          Our Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ mb: 1 }}>Fast Performance</Typography>
              <Typography variant="body1">Experience lightning-fast performance with our solution.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ mb: 1 }}>Top-notch Security</Typography>
              <Typography variant="body1">We prioritize security to keep your data safe.</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="h6" sx={{ mb: 1 }}>Loved by Users</Typography>
              <Typography variant="body1">Our users love the simplicity and effectiveness.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: '#f4f6f8', py: 8 }}>
        <Container>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 5 }}>
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Avatar sx={{ margin: '0 auto', mb: 2 }}>A</Avatar>
                  <Typography variant="h6">John Doe</Typography>
                  <Typography variant="body2">"This platform has transformed the way I manage my projects!"</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Avatar sx={{ margin: '0 auto', mb: 2 }}>B</Avatar>
                  <Typography variant="h6">Jane Smith</Typography>
                  <Typography variant="body2">"I can't imagine working without it. Amazing experience!"</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ textAlign: 'center' }}>
                <CardContent>
                  <Avatar sx={{ margin: '0 auto', mb: 2 }}>C</Avatar>
                  <Typography variant="h6">Alex Brown</Typography>
                  <Typography variant="body2">"Great performance and support. Highly recommend!"</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: '#F4DFD0',
          color: '#b9774f',
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Ready to Get Started?
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: '20px', padding: '10px 20px' }}>
          Sign Up Now
        </Button>
      </Box>

      <Box sx={{ py: 4, textAlign: 'center', bgcolor: '#212121', color: '#fff' }}>
        <Typography variant="body2">© 2024 Your Company Name. All rights reserved.</Typography>
      </Box>
    </Box>
  );
};

export default HomePageComponent;
