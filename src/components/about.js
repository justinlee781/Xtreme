import React, { useState } from 'react';
import { Card, CardMedia, Typography, Box, Dialog, DialogContent } from '@mui/material';
import { Bounce } from 'react-awesome-reveal';
import image1 from '../assets/home2.jpg';
import image2 from '../assets/home13.jpg';
import Header from '../blocks/Header';
import Footer from './FooterSection';

const About = () => {
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
            About Us
          </Typography>
        </Bounce>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: ['column', 'row'], alignItems: 'center', gap: '20px', p: '20px', mt: ['20px', '120px'], mb: ['20px', '120px'] }}>
        <Box sx={{ flex: 1, overflow: 'auto', pr: 2, pb: 2 }}>
          <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'black', textShadow: '2px 2px 0px #fff', fontSize: '1.2rem', textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
            Xtreme Woodworking was established in 1998 in Costa Mesa, CA. Our family owned business has since expanded into a team of talented experts in craftsmanship. With the help of our state of the art machinery, we provide exceptional quality to every project. We partner with designers, contractors, and homeowners to make your ideas become reality. With over 25 years of experience in the industry, we specialize in custom cabinetry and woodworking for residential and commercial spaces. Our projects include but are not limited to kitchens, vanities, entertainment centers, office areas, garage cabinets, closets and more. Our business now resides in Santa Ana, CA as we currently serve the greater Orange County and surrounding areas.
          </Typography>
        </Box>
        <Box sx={{ flex: 1, overflow: 'auto', pl: 2, pb: 2, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card sx={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderRadius: '15px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => handleClickOpen(image1)}>
            <CardMedia component="img" height="250" image={image1} alt="Image 1" />
          </Card>
          <Card sx={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)', borderRadius: '15px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => handleClickOpen(image2)}>
            <CardMedia component="img" height="250" image={image2} alt="Image 2" />
          </Card>
          <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <DialogContent>
              <img src={selectedImage} alt="Zoomed in" style={{ width: '100%', height: 'auto' }} />
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;
