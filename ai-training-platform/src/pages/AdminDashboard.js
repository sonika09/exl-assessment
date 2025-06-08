// AdminDashboard.jsx
import React, { useState } from 'react';
import { Container, Grid, Box, Paper, Typography } from '@mui/material';
import CourseBuilder from '../components/CourseBuilder';
import AvatarVideoGenerator from '../components/AvatarVideoGenerator';
import PublishCourse from '../components/PublishCourse';
// import SummaryPreview from '../components/SummaryPreview';
// import VideoPreview from '../components/VideoPreview';
import VideoPlayer from '../components/VideoPlayer';

const AdminDashboard = () => {
  const [summaries, setSummaries] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [videoGenerated, setVideoGenerated] = useState(false);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight={700} textAlign="center">
        Admin Dashboard
      </Typography>

      {/* Top section: grouped three components */}
      <Paper
        elevation={3}
        sx={{ p: 3, borderRadius: 3, backgroundColor: '#f9f9f9', mb: 4 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <CourseBuilder setSummaries={setSummaries} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AvatarVideoGenerator
              selectedAvatar={selectedAvatar}
              setSelectedAvatar={setSelectedAvatar}
              setVideoGenerated={setVideoGenerated}
              videoGenerated={videoGenerated}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <PublishCourse
              summaries={summaries}
              avatar={selectedAvatar}
              videoGenerated={videoGenerated}
            />
          </Grid>
        </Grid>
      </Paper>

      {/* Bottom section: Summaries and Video preview side-by-side */}
      {(summaries.length > 0 || videoGenerated) && (
        <Grid container spacing={3}>
          {summaries.length > 0 && (
            <Grid item xs={12} md={6}>
              {/* <SummaryPreview summaries={summaries} /> */}
            </Grid>
          )}

          {/* {videoGenerated && (
            <Grid item xs={12} md={6}>
              <VideoPlayer />
            </Grid>
          )} */}
        </Grid>
      )}
    </Container>
  );
};

export default AdminDashboard;
