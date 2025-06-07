// File: src/components/AvatarVideoGenerator.jsx

import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardMedia, CardContent,
  Button, CircularProgress
} from '@mui/material';
import { getAvatars } from '../utils/mockApi';

const AvatarVideoGenerator = ({ setVideoGenerated, selectedAvatar, setSelectedAvatar,videoGenerated }) => {
  const [generating, setGenerating] = useState(false);
  const avatars = getAvatars();

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setVideoGenerated(true);
    }, 2000); // simulate generation
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
        {videoGenerated && (
          <Box mt={2}>
            <img
              src="https://via.placeholder.com/300x180.png?text=Video+Preview"
              alt="Preview"
              width={300}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default AvatarVideoGenerator;
