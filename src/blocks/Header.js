import React, { useState } from 'react';
import { AppBar, Toolbar, Drawer, List, ListItem, ListItemText, IconButton, Box, Typography, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props) => { 
  const [drawerOpen, setDrawerOpen] = useState(false); 
  const isMobile = useMediaQuery('(max-width:600px)');

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const handleClose = () => {
    setDrawerOpen(false);
  };

  const navigationItems = [
    { text: 'Home', link: '/' },
    { text: 'Our Mission', link: '/portfolio' },
    { text: 'About Us', link: '/about' },
    { text: 'Services', link: '/services' },
    { text: 'Contact Us', link: '/contact' },
    { text: 'Gallery', link: '/gallery' }
  ];

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#000',
        ...props.sx,
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          minHeight: '100px',
          paddingTop: '10px',
          paddingBottom: '10px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h5" component="div" sx={{ fontFamily: 'Roboto Slab', letterSpacing: '-0.05em', color: '#ccc' }}>
            XtremeWoodworking
          </Typography>
          <hr style={{ borderColor: '#ccc', borderWidth: '1px', width: '100%' }} />
          <Typography variant="subtitle1" component="div" sx={{ fontFamily: 'Roboto Slab', letterSpacing: '-0.02em', color: '#ccc' }}>
            Custom Cabinetry
          </Typography>
        </Box>
        {!isMobile && (
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            {navigationItems.map((item, index) => (
              <Typography key={index} variant="body1" sx={{ margin: '0 10px', color: '#ccc', textDecoration: 'none' }} component={Link} to={item.link}>
                {item.text}
              </Typography>
            ))}
          </Box>
        )}
        {isMobile && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      
      {isMobile && (
        <Drawer
          anchor="right" 
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              width: '100%',
              color: 'white',
            },
          }}
        >
          <Box
            sx={{ 
              width: '100vw', 
              height: '100vh', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            role="presentation"
            onClick={handleClose}
            onKeyDown={handleClose}
          >
            <List>
              {navigationItems.map((item, index) => (
                <ListItem button key={index} onClick={handleClose} component={Link} to={item.link}>
                  <ListItemText primary={item.text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </AppBar>
  );
};

export default Header;



