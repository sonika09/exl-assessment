import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Grid
} from '@mui/material';

const completedCourses = [
  { title: 'AI Basics', id: 1 },
  { title: 'Advanced ML', id: 2 },
];

const Certificates = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        🎓 Certificates
      </Typography>

      <Grid container spacing={2}>
        {completedCourses.map((course) => (
          <Grid item xs={12} sm={6} key={course.id}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    fullWidth
                    onClick={() =>
                      alert(`Downloading certificate for ${course.title}`)
                    }
                  >
                    Download Certificate
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Certificates;
