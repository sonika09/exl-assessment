import React, { useState } from 'react';
import {
  Box, Typography, Grid, Card, CardMedia, CardContent,
  Button, CircularProgress
} from '@mui/material';
import { getAvatars } from '../utils/mockApi';

const AvatarVideoGenerator = ({
  setVideoGenerated,
  selectedAvatar,
  setSelectedAvatar,
  videoGenerated
}) => {
  const [generating, setGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const avatars = getAvatars();

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setVideoGenerated(true);
    }, 2000); // Simulate video generation
  };

  return (
    <Box mb={4} sx={{ p: { xs: 2, sm: 3 }, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        🧑‍🚀 Avatar & Video Generator
      </Typography>

      <Grid container spacing={2} mt={1}>
        {avatars.map((avatar) => (
          <Grid item xs={12} sm={6} md={4} lg={2} key={avatar.id}>
            <Card
              onClick={() => setSelectedAvatar(avatar)}
              sx={{
                border: selectedAvatar?.id === avatar.id ? '2px solid blue' : '',
                cursor: 'pointer',
                height: '100%',
              }}
            >
              <CardMedia
                component="img"
                height="120"
                image={avatar.image}
                alt={avatar.name}
                sx={{ objectFit: 'contain' }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="body2" align="center" noWrap>
                  {avatar.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box mt={3} textAlign={{ xs: 'center', sm: 'left' }}>
        <Button
          disabled={!selectedAvatar || generating}
          variant="contained"
          onClick={handleGenerate}
          sx={{ minWidth: 150 }}
        >
          {generating ? <CircularProgress size={24} /> : 'Generate Video'}
        </Button>
      </Box>

      {videoGenerated && (
        <Box mt={3} textAlign="center">
          {!showPreview ? (
            <>
              <Box
                component="img"
                src="https://via.placeholder.com/300x180.png?text=Video+Preview"
                alt="Video Placeholder"
                sx={{
                  width: { xs: '100%', sm: 300 },
                  maxWidth: '100%',
                  borderRadius: 2,
                }}
              />
              <Box mt={2}>
                <Button variant="outlined" onClick={() => setShowPreview(true)}>
                  Preview Video
                </Button>
              </Box>
            </>
          ) : (
            <Box sx={{ width: '100%', maxWidth: 500, mx: 'auto' }}>
              <video
                width="100%"
                controls
                autoPlay
                poster="https://via.placeholder.com/300x180.png?text=Video+Preview"
                style={{ borderRadius: 8 }}
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AvatarVideoGenerator;
