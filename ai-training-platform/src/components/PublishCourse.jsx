import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { publishCourse } from '../utils/mockApi';

const PublishCourse = ({ summaries, avatar, videoGenerated }) => {
  const handlePublish = () => {
    publishCourse({
      title: `AI Course - ${Date.now()}`,
      summaries,
      avatar,
      videoUrl: 'https://via.placeholder.com/video.mp4',
      progress: 0,
    });
    alert('✅ Course Published!');
  };

  return (
    <Box
      mb={4}
      sx={{
        p: { xs: 2, sm: 3 },
        backgroundColor: '#fdfdfd',
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Typography variant="h6" gutterBottom>
        🚀 Publish Course
      </Typography>

      <Button
        variant="contained"
        fullWidth
        disabled={!summaries.length || !avatar || !videoGenerated}
        onClick={handlePublish}
        sx={{
          mt: 2,
          textTransform: 'none',
          fontWeight: 500,
        }}
      >
        Publish
      </Button>
    </Box>
  );
};

export default PublishCourse;
