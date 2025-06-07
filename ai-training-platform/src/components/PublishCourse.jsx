// File: src/components/PublishCourse.jsx

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
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
    <Box mb={4}>
      <Typography variant="h6">🚀 Publish Course</Typography>
      <Button
        variant="contained"
        disabled={!summaries.length || !avatar || !videoGenerated}
        onClick={handlePublish}
        sx={{ mt: 2 }}
      >
        Publish
      </Button>
    </Box>
  );
};

export default PublishCourse;
