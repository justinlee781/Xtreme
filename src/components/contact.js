import React from 'react';
import { Typography, Box, TextField, Button, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Header from '../blocks/Header';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <Box sx={{
        position: ['relative', 'fixed'],
        top: 0,
        right: 0,
        left: 0,
        zIndex: 2,
      }}>
        <Header />
      </Box>
      <Typography variant="h2" sx={{
        fontFamily: "'Roboto', sans-serif",
        color: 'white',
        fontWeight: 'bold',
        marginTop: '20px',
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        padding: '10px'
      }}>
        Contact Us
      </Typography>
      <Container maxWidth="sm">
        <Typography variant="h5" component="p" align="center">
          Telephone: (714)-689-3111
          <br />
          Fax: (714)-689-3112
          <br />
          Email: info@xtremewoodworking.net
          <br />
          Hours of Operation: Monday - Friday 7:00 AM - 3:30 PM PST
        </Typography>
        <Typography variant="body1" style={{ marginTop: '40px' }}>
          Have a new project or interested in our designs? We’d love to hear from you!
        </Typography>
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="body"
            label="Body"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
        <Typography variant="body2" style={{ marginTop: '40px', textAlign: 'center' }}>
          Please follow us on social media:
          <br />
          <IconButton color="primary" component="a" href="https://m.facebook.com/search/top/?q=xtreme+woodworking+inc&_rdr" target="_blank">
            <FacebookIcon />
          </IconButton>
          <IconButton color="primary" component="a" href="https://www.instagram.com/xtreme_woodworking_inc/" target="_blank">
            <InstagramIcon />
          </IconButton>
        </Typography>
      </Container>
    </Box>
  );
};

export default ContactPage;


