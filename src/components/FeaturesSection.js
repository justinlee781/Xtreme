import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

// Background image URL
const backgroundImage = 'https://media.istockphoto.com/id/1089201306/photo/high-speed-lights-tunnel-motion-trails.jpg?s=612x612&w=0&k=20&c=oHCafVQKXy61s9oaYOmaivkJptCLdQtzvLZThLal5dU=';

// Features data
const features = [
  {
    title: 'CNC WoodCraft',
    description: 'Precision Craftsmanship, Powered by CNC.',
    image: 'https://media.istockphoto.com/id/1190410118/photo/cnc-wood-milling-machine-setting-carpentry-background.jpg?b=1&s=170667a&w=0&k=20&c=zopVadM_G-OsrWAUm-tsgdMQyJZSfM6vzwdFlu3mJtw=',
  },
  {
    title: 'Quality Assurance',
    description: 'Ensuring Excellence, Every Step of the Way.',
    image: 'https://cdn.pixabay.com/photo/2020/07/28/20/13/measures-5446219__480.jpg',
  },
  {
    title: 'CNC Cabnitry',
    description: 'Exquisite Cabinets, Precision-Crafted with CNC Technology.',
    image: 'https://media.istockphoto.com/id/1317634317/photo/cnc-router-machine-creates-a-layout-of-the-shelf-complex.jpg?b=1&s=170667a&w=0&k=20&c=qAzKJmaQl0KaawLFJazHywDdyhe2oxRqS3j4CkjVv8k=',
  },
  {
    title: 'Home Instillations',
    description: 'Transforming Homes with Expert Installation Services.',
    image: 'https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

// Styling for the Box component
const boxStyle = {
  textAlign: 'center',
  padding: '3rem 0',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Component for each feature
const FeatureCard = ({ feature }) => (
  <Grid item xs={6} sm={6} md={3}>
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={feature.image}
        alt={feature.title}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ 
            color: 'white',
            WebkitTextStroke: '1px purple',
            fontWeight: 'bold',
          }}>
          {feature.title}
        </Typography>
        <Typography variant="body1">{feature.description}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

// Main component
const FeaturesSection = () => (
  <Box sx={boxStyle}>
    <Typography variant="h4" gutterBottom sx={{ 
        color: 'white',
        WebkitTextStroke: '1px purple',
        fontWeight: 'bold',
      }}>
      Our Features
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
        <FeatureCard feature={feature} key={index} />
      ))}
    </Grid>
  </Box>
);

export default FeaturesSection;

