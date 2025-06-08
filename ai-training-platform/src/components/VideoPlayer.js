import React, { useRef } from 'react';
import { Box, Button, Paper, Typography, Stack } from '@mui/material';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();
  const handleForward = () => (videoRef.current.currentTime += 10);
  const handleBackward = () => (videoRef.current.currentTime -= 10);

  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 3,
        maxWidth: 800,
        mx: 'auto',
        mt: 4,
        backgroundColor: '#fafafa',
      }}
    >
      <Typography variant="h6" gutterBottom>
        🎥 Video Player
      </Typography>

      <Box
        component="video"
        ref={videoRef}
        width="100%"
        height="auto"
        controls={false}
        sx={{
          borderRadius: 2,
          mb: 2,
          maxHeight: 400,
          objectFit: 'cover',
        }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </Box>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
        <Button variant="contained" onClick={handlePlay}>
          ▶ Play
        </Button>
        <Button variant="outlined" onClick={handlePause}>
          ⏸ Pause
        </Button>
        <Button variant="contained" color="secondary" onClick={handleBackward}>
          ⏪ -10s
        </Button>
        <Button variant="contained" color="secondary" onClick={handleForward}>
          ⏩ +10s
        </Button>
      </Stack>
    </Paper>
  );
};

export default VideoPlayer;
