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
    }, 2000);
  };

  return (
    <Box
      sx={{
        p: { xs: 2, sm: 3 },
        // backgroundColor: '#f9f9f9',
        // borderRadius: 2,
        // minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="h6" gutterBottom>
        🧑‍🚀 Avatar & Video Generator
      </Typography>

      <Grid container spacing={2} mt={1}>
        {avatars.map((avatar) => (
          <Grid item xs={6} sm={4} key={avatar.id}>
            <Card
              onClick={() => setSelectedAvatar(avatar)}
              sx={{
                border: selectedAvatar?.id === avatar.id ? '2px solid #1976d2' : '1px solid #ddd',
                cursor: 'pointer',
                transition: 'border 0.3s',
              }}
            >
              <CardMedia
                component="img"
                height="100"
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

      <Box mt={3}>
        <Button
          disabled={!selectedAvatar || generating}
          variant="contained"
          fullWidth
          onClick={handleGenerate}
        >
          {generating ? <CircularProgress size={24} /> : 'Generate Video'}
        </Button>
      </Box>

      {videoGenerated && (
        <Box mt={3}>
          {!showPreview ? (
            <Button variant="outlined" fullWidth onClick={() => setShowPreview(true)}>
              Preview Video
            </Button>
          ) : (
            <>
              <Button variant="outlined" fullWidth onClick={() => setShowPreview(false)}>
                Hide Video
              </Button>

              <Box mt={2}>
                <video
                  width="100%"
                  height="auto"
                  controls
                  autoPlay
                  style={{ borderRadius: 8, maxHeight: '300px' }}
                  poster="https://via.placeholder.com/300x180.png?text=Video+Preview"
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AvatarVideoGenerator;
