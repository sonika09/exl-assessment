import React, { useRef } from 'react';
import { Box, Button } from '@mui/material';

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();
  const handleForward = () => videoRef.current.currentTime += 10;
  const handleBackward = () => videoRef.current.currentTime -= 10;

  return (
    <Box>
      <video
        ref={videoRef}
        width="100%"
        height="400px"
        controls={false}
        style={{ borderRadius: 8, marginBottom: 16 }}
      >
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <Box display="flex" gap={2}>
        <Button variant="contained" onClick={handlePlay}>Play</Button>
        <Button variant="outlined" onClick={handlePause}>Pause</Button>
        <Button variant="contained" color="secondary" onClick={handleBackward}>-10s</Button>
        <Button variant="contained" color="secondary" onClick={handleForward}>+10s</Button>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
