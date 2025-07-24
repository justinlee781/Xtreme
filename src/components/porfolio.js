import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box, Dialog, DialogContent } from '@mui/material';
import { Bounce } from 'react-awesome-reveal';
import image1 from '../assets/home7.jpg';
import image2 from '../assets/home3.jpg';
import image3 from '../assets/home8.jpg';

import Header from '../blocks/Header';
import Footer from './FooterSection';

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (img) => {
    setOpen(true);
    setSelectedImage(img);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ backgroundColor: '#ffffff' }}>
      <Header />
      <Box sx={{ backgroundColor: '#808080', padding: '10px', textAlign: 'center' }}>
        <Bounce>
          <Typography variant="h6" sx={{ color: 'white', textShadow: '2px 2px 0px #000' }}>
            Our Mission
          </Typography>
        </Bounce>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black', textShadow: '2px 2px 0px #fff', fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
          At Xtreme Woodworking, we strive to provide customers with the highest level of quality and service. We take pride in our unique craftsmanship and personalized detail in every project. Our success relies on our professionalism and customer satisfaction from start to finish.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: ['column', 'row'], gap: '20px', padding: '20px' }}>
        <Card sx={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderRadius: '15px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => handleClickOpen(image1)}>
          <CardMedia component="img" height="250" image={image1} alt="Project 1" />
        </Card>
        <Card sx={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderRadius: '15px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => handleClickOpen(image2)}>
          <CardMedia component="img" height="250" image={image2} alt="Project 2" />
        </Card>
        <Card sx={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderRadius: '15px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => handleClickOpen(image3)}>
          <CardMedia component="img" height="250" image={image3} alt="Project 3" />
        </Card>
      </Box>
      <Footer />
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <img src={selectedImage} alt="Zoomed in" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Portfolio;
