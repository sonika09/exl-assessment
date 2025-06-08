import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  Typography,
  Divider,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VideoPlayer from '../components/VideoPlayer';
import QnAComponent from '../components/QnAComponent';
import { dummySummaries } from '../utils/mockApi';

const LearningPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box p={isMobile ? 2 : 4} sx={{ minHeight: '80vh' }}>
      {/* Q&A Icon */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <IconButton
          onClick={toggleDrawer(true)}
          color="primary"
          aria-label="open Q&A drawer"
          size={isMobile ? 'medium' : 'large'}
        >
          <QuestionAnswerIcon fontSize={isMobile ? 'medium' : 'large'} />
        </IconButton>
      </Box>

      {/* Video Player */}
      <VideoPlayer />

      {/* Raise Hand Button */}
      <Box mt={2} textAlign="center">
        <Button
          variant="contained"
          onClick={() =>
            console.log(`✋ Raised hand at: ${new Date().toLocaleTimeString()}`)
          }
          size={isMobile ? 'medium' : 'large'}
        >
          ✋ Raise Hand
        </Button>
      </Box>

      {/* Drawer for Q&A and Course Content */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: isMobile ? '80vw' : 350,
            p: 2,
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Ask a Question
        </Typography>
        <QnAComponent />

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" gutterBottom>
          Course Contents
        </Typography>
        <Box component="ul" sx={{ pl: 2, m: 0 }}>
          {dummySummaries.map((summary, index) => (
            <li key={index}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Section {index + 1}
              </Typography>
            </li>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

export default LearningPage;
