import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CardActions,
  CircularProgress
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const AdminDashboard = () => {
  const [fileName, setFileName] = useState('');
  const [summaries, setSummaries] = useState([]);
  const [avatars] = useState(['Alice', 'Bob', 'Charlie', 'Diana']);
  const [selectedAvatar, setSelectedAvatar] = useState('');
  const [videoStatus, setVideoStatus] = useState('');
  const [published, setPublished] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    // Simulate AI-generated summaries
    setTimeout(() => {
      setSummaries([
        'Summary of Page 1: Lorem ipsum dolor sit amet...',
        'Summary of Page 2: Sed ut perspiciatis unde omnis...',
        'Summary of Page 3: At vero eos et accusamus...'
      ]);
    }, 1000);
  };

  const handleGenerateVideo = () => {
    setVideoStatus('loading');
    setTimeout(() => {
      setVideoStatus('done');
    }, 2000);
  };

  const handlePublish = () => {
    setPublished(true);
    alert('Course published! It will now appear in Learner Dashboard.');
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>

      {/* SECTION 1: Course Builder */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>📘 Course Builder</Typography>
        <Button
          variant="contained"
          component="label"
          startIcon={<CloudUploadIcon />}
        >
          Upload PDF
          <input type="file" hidden onChange={handleFileUpload} />
        </Button>
        {fileName && <Typography sx={{ mt: 1 }}>Uploaded: {fileName}</Typography>}

        <Grid container spacing={2} mt={2}>
          {summaries.map((summary, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card>
                <CardContent>
                  <Typography variant="subtitle1">Page {idx + 1}</Typography>
                  <TextField
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue={summary}
                  />
                </CardContent>
                <CardActions>
                  <Button size="small">Edit</Button>
                  <Button size="small">Regenerate</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* SECTION 2: Avatar & Video Generator */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>🎭 Avatar & Video Generator</Typography>
        <Grid container spacing={2}>
          {avatars.map((avatar, idx) => (
            <Grid item xs={6} sm={3} key={idx}>
              <Card
                variant={selectedAvatar === avatar ? "outlined" : "elevation"}
                sx={{ cursor: 'pointer', borderColor: selectedAvatar === avatar ? 'blue' : '' }}
                onClick={() => setSelectedAvatar(avatar)}
              >
                <CardContent>
                  <Typography align="center">{avatar}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box mt={2}>
          <Button
            variant="contained"
            onClick={handleGenerateVideo}
            disabled={!selectedAvatar || summaries.length === 0 || videoStatus === 'loading'}
          >
            {videoStatus === 'loading' ? <CircularProgress size={24} color="inherit" /> : 'Generate Video'}
          </Button>

          {videoStatus === 'done' && (
            <Box mt={2}>
              <Typography variant="subtitle1">✅ Video generated successfully!</Typography>
              <img src="https://via.placeholder.com/150" alt="Video thumbnail" />
            </Box>
          )}
        </Box>
      </Box>

      {/* SECTION 3: Publish */}
      <Box>
        <Typography variant="h6" gutterBottom>🚀 Publish Course</Typography>
        <Button
          variant="contained"
          color="success"
          disabled={videoStatus !== 'done' || published}
          onClick={handlePublish}
        >
          {published ? 'Published' : 'Publish Course'}
        </Button>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
