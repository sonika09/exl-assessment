// File: src/pages/AdminDashboard.jsx

import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import CourseBuilder from '../components/CourseBuilder';
import AvatarVideoGenerator from '../components/AvatarVideoGenerator';
import PublishCourse from '../components/PublishCourse';

const AdminDashboard = () => {
  const [summaries, setSummaries] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [videoGenerated, setVideoGenerated] = useState(false);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

      <CourseBuilder setSummaries={setSummaries} />
      <AvatarVideoGenerator
        selectedAvatar={selectedAvatar}
        setSelectedAvatar={setSelectedAvatar}
        setVideoGenerated={setVideoGenerated}
        videoGenerated={videoGenerated}
      />
      <PublishCourse
        summaries={summaries} 
        avatar={selectedAvatar}
        videoGenerated={videoGenerated}
      />
    </Container>
  );
};

export default AdminDashboard;
