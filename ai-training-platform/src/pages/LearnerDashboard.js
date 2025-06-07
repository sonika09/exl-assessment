import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Tabs, Tab, Box, Button, Grid, Card, CardContent, LinearProgress, TextField
} from '@mui/material';

import {
  getPublishedCourses,
  enrollInCourse,
  getEnrolledCourses,
  getCompletedCourses
} from '../utils/mockApi';
import { useNavigate } from 'react-router-dom';

const LearnerDashboard = () => {
  const [tab, setTab] = useState(0);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setCourses(getPublishedCourses());
  }, []);

  const enrolled = getEnrolledCourses();
  const completed = getCompletedCourses();

  const filteredCourses = courses.filter(course =>
    course.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleContinue = (id) => {
    enrollInCourse(id);
    navigate(`/learn/${id}`);
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Learner Dashboard</Typography>
      <Tabs value={tab} onChange={(_, newTab) => setTab(newTab)} sx={{ mb: 3 }}>
        <Tab label="Home" />
        <Tab label="My Learning" />
        <Tab label="Certificates" />
      </Tabs>

      {/* HOME TAB */}
      {tab === 0 && (
        <Box>
          <TextField
            label="Search Courses"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Grid container spacing={2}>
            {filteredCourses.map((course, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{course.title || `Course ${idx + 1}`}</Typography>
                    <img
                      src="https://via.placeholder.com/200x100"
                      alt="Course Thumbnail"
                      style={{ width: '100%', marginTop: 10 }}
                    />
                    <Box mt={2}>
                      <LinearProgress variant="determinate" value={enrolled.includes(idx) ? 50 : 0} />
                    </Box>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2 }}
                      onClick={() => handleContinue(idx)}
                    >
                      {enrolled.includes(idx) ? 'Continue Learning' : 'Start Learning'}
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* MY LEARNING TAB */}
      {tab === 1 && (
        <Box>
          <Grid container spacing={2}>
            {enrolled.map((courseId) => (
              <Grid item xs={12} sm={6} key={courseId}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{courses[courseId]?.title || `Course ${courseId + 1}`}</Typography>
                    <LinearProgress variant="determinate" value={completed.includes(courseId) ? 100 : 50} />
                    <Typography mt={1}>
                      Status: {completed.includes(courseId) ? 'Completed' : 'In Progress'}
                    </Typography>
                    <Button
                      variant="outlined"
                      sx={{ mt: 1 }}
                      onClick={() => handleContinue(courseId)}
                    >
                      Continue
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* CERTIFICATES TAB */}
      {tab === 2 && (
        <Box>
          <Grid container spacing={2}>
            {completed.map((courseId) => (
              <Grid item xs={12} sm={6} key={courseId}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{courses[courseId]?.title || `Course ${courseId + 1}`}</Typography>
                    <Button variant="contained" sx={{ mt: 2 }}>
                      Download Certificate
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default LearnerDashboard;
