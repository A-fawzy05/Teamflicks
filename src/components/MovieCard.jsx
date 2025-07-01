import React from 'react';
import { Card, CardMedia, Typography, Box } from '@mui/material';

const MovieCard = ({ movie }) => {
  return (
    <Card
      sx={{
        position: 'relative',
        width: 140,
        height: 230,
        borderRadius: 3,
        overflow: 'hidden',
        boxShadow: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          width: 210,
          border: '2px solid red',
          boxShadow: '0 0 15px red',}
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={movie.backgroundImage}
        alt={movie.name}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          bgcolor: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          textAlign: 'center',
          py: 1,
        }}
      >
        <Typography variant="h6" noWrap>
          {movie.name}
        </Typography>
      </Box>
    </Card>
  );
};

export default MovieCard;
