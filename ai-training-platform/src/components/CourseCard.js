import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, LinearProgress, Box } from '@mui/material';

const CourseCard = ({ title, thumbnail, progress, onContinue }) => {
  return (
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={thumbnail || "https://via.placeholder.com/300x180.png?text=Course+Thumbnail"}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="text.secondary">{`${Math.round(progress)}%`}</Typography>
          </Box>
        </Box>
        <Button variant="outlined" fullWidth sx={{ mt: 1 }} onClick={onContinue}>
          Continue Learning
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;