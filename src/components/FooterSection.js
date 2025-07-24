import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3rem 0',
        backgroundColor: '#000',
        color: '#ccc',
      }}
    >
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Roboto Slab', color: '#ccc' }}>
              Xtreme Woodworking
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto Slab', color: '#ccc' }}>
              Phone:  (714)-689-3111
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto Slab', color: '#ccc' }}>
              Email: info@xtremewoodworking.net
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Roboto Slab', color: '#ccc' }}>
              Hours of Operation: Monday - Friday 7:00 AM - 3:30 PM
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button 
                variant="outlined" 
                color="inherit" 
                sx={{ 
                  borderColor: 'rgba(255, 255, 255, 0.5)', 
                  color: '#ccc', 
                }}
              >
                Contact Us
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Typography 
        variant="body2" 
        color="inherit"
        sx={{ marginTop: '2rem', fontFamily: 'Roboto Slab', color: '#ccc' }}
      >
        © {new Date().getFullYear()} Xtreme Woodworking. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterSection;
