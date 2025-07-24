import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Bounce } from 'react-awesome-reveal';
import Header from '../blocks/Header';
import Footer from './FooterSection';

const Services = () => {
  return (
    <Box sx={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ backgroundColor: '#808080', padding: '10px', textAlign: 'center' }}>
          <Bounce>
            <Typography variant="h6" sx={{ color: 'white', textShadow: '2px 2px 0px #000' }}>
              Our Services
            </Typography>
          </Bounce>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], alignItems: 'center', gap: '20px', p: '20px', mt: ['20px', '120px'], mb: ['20px', '120px'], margin: '0 auto', maxWidth: '1200px' }}>
          <Box sx={{ flex: 1, overflow: 'auto', pr: 2, pb: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black' }}>
              At Xtreme Woodworking, we offer a range of services including custom designs for kitchens, bathroom vanities, entertainment centers, garage cabinets, closets, wall beds, wall units, sales offices, reception areas, and architectural millwork. We pride ourselves in using the highest quality materials including solid hardwoods, exotic veneers, and textured laminates.
            </Typography>
          </Box>
          <Box sx={{ flex: 1, overflow: 'auto', pl: 2, pb: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Card sx={{ borderRadius: '15px', overflow: 'hidden' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  What We Offer
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Custom Designs
                  <br />
                  Kitchens - Bathroom Vanities
                  <br />
                  Entertainment Centers - Garage Cabinets
                  <br />
                  Closets - Wall Beds
                  <br />
                  Wall Units - Sales Offices
                  <br />
                  Reception Areas - Architectural Millwork
                </Typography>
              </CardContent>
            </Card>
            <Card sx={{ borderRadius: '15px', overflow: 'hidden' }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Materials We Use
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Solid Hardwoods
                  <br />
                  Exotic Veneers
                  <br />
                  Textured Laminates
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Services;
