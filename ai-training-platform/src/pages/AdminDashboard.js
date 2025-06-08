// File: src/pages/AdminDashboard.jsx

import React, { useState } from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import CourseBuilder from '../components/CourseBuilder';
import AvatarVideoGenerator from '../components/AvatarVideoGenerator';
import PublishCourse from '../components/PublishCourse';

const AdminDashboard = () => {
  const [summaries, setSummaries] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [videoGenerated, setVideoGenerated] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 2, sm: 4 }, mb: 4 }}>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ textAlign: { xs: 'center', sm: 'left' }, fontSize: { xs: '1.8rem', sm: '2.5rem' } }}
      >
        Admin Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Course Builder Section */}
        <Grid item xs={12}>
          <Box
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              boxShadow: 1,
              bgcolor: '#fafafa',
            }}
          >
            <CourseBuilder setSummaries={setSummaries} />
          </Box>
        </Grid>

        {/* Avatar + Video Generator */}
        <Grid item xs={12}>
          <Box
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              boxShadow: 1,
              bgcolor: '#f0f4ff',
            }}
          >
            <AvatarVideoGenerator
              selectedAvatar={selectedAvatar}
              setSelectedAvatar={setSelectedAvatar}
              setVideoGenerated={setVideoGenerated}
              videoGenerated={videoGenerated}
            />
          </Box>
        </Grid>

        {/* Publish Course */}
        <Grid item xs={12}>
          <Box
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
              boxShadow: 1,
              bgcolor: '#e8f5e9',
            }}
          >
            <PublishCourse
              summaries={summaries}
              avatar={selectedAvatar}
              videoGenerated={videoGenerated}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminDashboard;
