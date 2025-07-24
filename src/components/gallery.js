import React, { useState } from 'react';
import { Bounce } from 'react-awesome-reveal';
import { Box, Card, CardMedia, Typography, Dialog, DialogContent, DialogActions, Button } from '@mui/material';
import Header from '../blocks/Header';
import image1 from '../assets/home1.jpg';
import image2 from '../assets/home37.JPG';
import image3 from '../assets/home3.jpg';
import image4 from '../assets/home4.jpg';
import image5 from '../assets/home5.jpg';
import image6 from '../assets/home6.jpg';
import image7 from '../assets/home7.jpg';
import image8 from '../assets/home8.jpg';
import image9 from '../assets/home9.jpg';
import image10 from '../assets/home10.jpg';
import image11 from '../assets/home11.jpg';
import image13 from '../assets/home13.jpg';
import image14 from '../assets/home14.jpg';
import image15 from '../assets/home15.jpg';
import image16 from '../assets/home16.jpg';
import image17 from '../assets/home17.jpg';
import image19 from '../assets/home19.jpg';
import image20 from '../assets/home20.jpg';
import image21 from '../assets/home21.jpg';
import image22 from '../assets/home22.jpg';
import image23 from '../assets/home23.jpg';
import image24 from '../assets/home24.jpg';
import image25 from '../assets/home25.jpg';
import image26 from '../assets/home26.jpg';
import image27 from '../assets/home27.jpg';
import image28 from '../assets/home28.jpg';
import image29 from '../assets/home29.jpg';
import image30 from '../assets/home30.jpg';
import image31 from '../assets/home31.jpg';
import image32 from '../assets/home32.jpg';
import image34 from '../assets/home34.jpg';
import image35 from '../assets/home35.jpg';

const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const imageUrls = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image13,
    image14,
    image15,
    image16,
    image17,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
    image31,
    image32,
    image34,
    image35,
  ];

  const handleClickOpen = (index) => {
    setOpen(true);
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  return (
    <Box sx={{
      position: 'relative',
      height: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
    }}>
      <Box sx={{
        position: ['static', 'fixed'],
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2,
      }}>
        <Header />
      </Box>
      <Box sx={{
        mt: ['120px', '90px'],
        backgroundColor: '#808080',
        padding: '10px',
      }}>
        <Bounce>
          <Typography variant="h6" align="center" sx={{ color: 'white', textShadow: '2px 2px 0px #000' }}>
            Our Gallery
          </Typography>
        </Bounce>
      </Box>
  
      <Box sx={{
        flex: 1, // Will push the gallery down
        p: '20px',
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '40px',
      }}>
        {imageUrls.map((url, i) => (
          <Card 
            key={i} 
            onClick={() => handleClickOpen(i)}
            sx={{ 
              flex: ['0 0 100%', '0 0 30%'], 
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
              borderRadius: '15px',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
          >
            <CardMedia
              component="img"
              alt={`Image ${i + 1}`}
              height="200"
              image={url}
            />
          </Card>
        ))}
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <img src={imageUrls[selectedImageIndex]} alt="Zoomed in" style={{ width: '100%', height: 'auto' }}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePrevious}>Previous</Button>
          <Button onClick={handleNext}>Next</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GalleryPage;
