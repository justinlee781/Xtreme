import React, { useState } from 'react';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

import home1 from '../assets/home5.jpg';

const HeroSection = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const isMobile = useMediaQuery('(max-width: 600px)');//

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const imageStyles = {
    backgroundImage: `url(${home1})`,
    height: '150vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: 'calc(100vh - 150px)',
      }}
    >
      <div className="slide" style={imageStyles} />
      <IconButton
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
          boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)', // shadow effect
        }}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
            color: 'white', // white text
            boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)', // shadow effect
          },
        }}
      >
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
      </Menu>
    </Box>
  );
};

export default HeroSection;
