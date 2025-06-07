// File: src/pages/Certificates.jsx

import React from 'react';
import { Container, Typography, Card, CardContent, Button, Box } from '@mui/material';

const completedCourses = [
  {
    title: 'AI Basics',
    id: 1,
  },
  {
    title: 'Advanced ML',
    id: 2,
  },
];

const Certificates = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        🎓 Certificates
      </Typography>

      {completedCourses.map((course) => (
        <Card key={course.id} sx={{ my: 2 }}>
          <CardContent>
            <Typography variant="h6">{course.title}</Typography>
            <Box mt={2}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => alert(`Downloading certificate for ${course.title}`)}
              >
                Download Certificate
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default Certificates;
