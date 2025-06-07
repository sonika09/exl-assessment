
import React, { useState, useEffect } from 'react';
import { AppBar, Tabs, Tab, Box, Container, Typography, TextField, Grid } from '@mui/material';
import CourseCard from '../components/CourseCard';
import { getPublishedCourses } from '../utils/mockApi';
import Certificates from './Certificate';
import LearningPage from './LearningPage';

const LearnerDashboard = () => {
  const [tab, setTab] = useState(0);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCourses(getPublishedCourses());
  }, []);

  const handleContinue = (courseId) => {
    alert(`Continue Course ID: ${courseId}`);
  };

  const filteredCourses = courses.filter(course => course.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const completedCourses = courses.filter(c => c.progress === 100);

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>Learner Dashboard</Typography>
      <AppBar position="static">
        <Tabs value={tab} onChange={(e, newTab) => setTab(newTab)}>
          <Tab label="Home" style={{color:"white"}}/>
          <Tab label="My Learning" style={{color:"white"}}/>
          <Tab label="Certificates" style={{color:"white"}}/>
        </Tabs>
      </AppBar>

      {tab === 0 && (
        <Box mt={3}>
          <Grid container spacing={2}>
            {courses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <CourseCard
                  title={course.title}
                  progress={course.progress}
                  thumbnail={course.videoUrl}
                  onContinue={() => handleContinue(course.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {tab === 1 && (
        <Box mt={3}>
          <TextField
            label="Search Courses"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Grid container spacing={2}>
            <LearningPage/>
            {/* {filteredCourses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <CourseCard
                  title={course.title}
                  progress={course.progress}
                  thumbnail={course.videoUrl}
                  onContinue={() => handleContinue(course.id)}
                />
              </Grid>
            ))} */}
          </Grid>
        </Box>
      )}

      {tab === 2 && (
        <Box mt={3}>
          <Typography variant="h6" gutterBottom>Download Certificates</Typography>
          <Grid container spacing={2}>
            <Certificates/>
            {/* {completedCourses.map((course) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <CourseCard
                  title={course.title}
                  progress={course.progress}
                  thumbnail={course.videoUrl}
                  onContinue={() => alert('Download Certificate (Mock)')}
                />
              </Grid>
            ))} */}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default LearnerDashboard;
