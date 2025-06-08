import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  LinearProgress,
  Box
} from '@mui/material';

const CourseCard = ({ title, thumbnail, progress, onContinue }) => {
  return (
    <Card
      sx={{
        maxWidth: { xs: '100%', sm: 345 },
        width: '100%',
        mb: 2,
        mx: 'auto',
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={thumbnail || 'https://via.placeholder.com/300x180.png?text=Course+Thumbnail'}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>

        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="text.secondary">
              {`${Math.round(progress)}%`}
            </Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          fullWidth
          onClick={onContinue}
          sx={{
            mt: 1,
            textTransform: 'none',
            fontWeight: 500,
          }}
        >
          Continue Learning
        </Button>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
