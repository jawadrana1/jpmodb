import * as React from 'react';
import {
  Card, CardActions, CardContent, CardMedia, Button, Typography, Box
} from '@mui/material';

export default function MediaCard() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#1e1e2f"
      px={2}
    >
      <Card
        sx={{
          maxWidth: 360,
          borderRadius: 4,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'scale(1.04)',
            boxShadow: '0 12px 36px rgba(0,0,0,0.5)',
          },
          bgcolor: '#2d2d44',
          color: 'white',
        }}
      >
        <CardMedia
          sx={{ height: 200 }}
          image="https://source.unsplash.com/random/800x600?reptile"
          title="Green Iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontWeight: 'bold', color: '#f0f0f0', textAlign: 'center' }}
          >
            🦎 Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: '#c7c7d1', textAlign: 'justify' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: '#ffffffaa',
              color: '#ffffff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#ffffff22',
                borderColor: '#ffffff',
              },
            }}
          >
            Share
          </Button>
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: '#00c853',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#00e676',
              },
            }}
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}


