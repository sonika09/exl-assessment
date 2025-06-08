import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardMedia, CardContent,
  Button, CircularProgress
} from '@mui/material';
import { getAvatars } from '../utils/mockApi';

const AvatarVideoGenerator = ({ setVideoGenerated, selectedAvatar, setSelectedAvatar, videoGenerated }) => {
  const [generating, setGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // New state
  const avatars = getAvatars();

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setVideoGenerated(true);
    }, 2000); // Simulate video generation
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">🧑‍🚀 Avatar & Video Generator</Typography>

      <Grid container spacing={2} mt={2}>
        {avatars.map((avatar) => (
          <Grid item xs={6} sm={4} md={2} key={avatar.id}>
            <Card
              onClick={() => setSelectedAvatar(avatar)}
              sx={{
                border: selectedAvatar?.id === avatar.id ? '2px solid blue' : '',
                cursor: 'pointer',
              }}
            >
              <CardMedia
                component="img"
                height="100"
                image={avatar.image}
                alt={avatar.name}
              />
              <CardContent>
                <Typography variant="body2" align="center">{avatar.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={2}>
        <Button
          disabled={!selectedAvatar || generating}
          variant="contained"
          onClick={handleGenerate}
        >
          {generating ? <CircularProgress size={24} /> : 'Generate Video'}
        </Button>
      </Box>

      {videoGenerated && (
        <Box mt={2}>
          {!showPreview ? (
            <>
              <img
                src="https://via.placeholder.com/300x180.png?text=Video+Preview"
                alt="Video Placeholder"
                width={300}
              />
              <Box mt={1}>
                <Button variant="outlined" onClick={() => setShowPreview(true)}>
                  Preview Video
                </Button>
              </Box>
            </>
          ) : (
            <video
              width="300"
              controls
              autoPlay
              poster="https://via.placeholder.com/300x180.png?text=Video+Preview"
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AvatarVideoGenerator;
