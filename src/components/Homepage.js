import React from 'react';
import { Box } from '@mui/material';
import Header from '../blocks/Header';
import HeroSection from './HeroSection';
import FooterSection from './FooterSection';

const Homepage = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative', // The parent needs relative positioning
      }}
    >
      <Header 
        sx={{
          position: 'absolute', // Absolute positioning puts the header over the hero section
          width: '100%', // Ensure the header spans the full width
          zIndex: 1, // Ensure the header appears above the hero section
        }}
      />
      <Box sx={{ flex: 1 }}>
        <HeroSection />
      </Box>
      <FooterSection />
    </Box>
  );
};

export default Homepage;

