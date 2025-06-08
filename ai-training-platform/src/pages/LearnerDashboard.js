import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  useTheme,
  useMediaQuery
} from '@mui/material';
import CourseCard from '../components/CourseCard';
import { getPublishedCourses } from '../utils/mockApi';
import Certificates from './Certificate';
import LearningPage from './LearningPage';

const LearnerDashboard = () => {
  const [tab, setTab] = useState(0);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    setCourses(getPublishedCourses());
  }, []);

  const handleContinue = (courseId) => {
    alert(`Continue Course ID: ${courseId}`);
  };

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align={isMobile ? 'center' : 'left'}>
        Learner Dashboard
      </Typography>

      <AppBar position="static" color="primary">
        <Tabs
          value={tab}
          onChange={(e, newTab) => setTab(newTab)}
          variant={isMobile ? 'fullWidth' : 'standard'}
        >
          <Tab label="Home" />
          <Tab label="My Learning" />
          <Tab label="Certificates" />
        </Tabs>
      </AppBar>

      {/* Home Tab */}
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

      {/* My Learning Tab */}
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

      {/* Certificates Tab */}
      {tab === 2 && (
        <Box mt={3}>
          <Typography variant="h6" gutterBottom align={isMobile ? 'center' : 'left'}>
            Download Certificates
          </Typography>
          <Certificates />
        </Box>
      )}
    </Container>
  );
};

export default LearnerDashboard;
