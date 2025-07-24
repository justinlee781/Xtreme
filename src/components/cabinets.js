import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Cabinets = () => {
  const clearImage = 'https://media.istockphoto.com/id/1272358382/photo/two-pendant-lights-hang-over-kitchen-island.jpg?s=612x612&w=0&k=20&c=5BJ3SqgNT9EEIfsW1gNaqn2h5BRBP2f1bpB-5qjnGTY=';
  const tintedImage = 'https://media.istockphoto.com/id/1266498393/photo/white-kitchen-design.jpg?s=612x612&w=0&k=20&c=YNRfjutwTChAPHKgWaCWXTrogNr4DWA7G_6-idtr3aM=';
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Box 
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${clearImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <Box sx={{
          textAlign: 'center',
        }}>
          <Typography variant="h2" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>
            Our Cabinet Collection
          </Typography>
          <Typography variant="h5" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', fontWeight: 'bold' }}>
            Here is where we could showcase our range of cabinets.
          </Typography>
        </Box>
      </Box>
      <Box 
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundImage: `url(${tintedImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <Button variant="contained" color="primary" sx={{ fontSize: isMobile ? 'small' : 'medium' }}>
          About Us
        </Button>
      </Box>
    </Box>
  );
};

export default Cabinets;

