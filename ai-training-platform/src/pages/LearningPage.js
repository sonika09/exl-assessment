import React, { useState } from 'react';
import {
  Box, IconButton, Drawer, Typography, Divider,
} from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import VideoPlayer from '../components/VideoPlayer';
import QnAComponent from '../components/QnAComponent';
import { dummySummaries } from '../utils/mockApi';

const LearningPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box p={4}>
      {/* Q&A Icon */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <IconButton onClick={toggleDrawer(true)} color="primary">
          <QuestionAnswerIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Video Player */}
      <VideoPlayer />

      {/* Raise Hand (logs timestamp) */}
      <Box mt={2}>
        <button
          onClick={() =>
            console.log(`✋ Raised hand at: ${new Date().toLocaleTimeString()}`)
          }
        >
          ✋ Raise Hand
        </button>
      </Box>

      {/* Drawer for Q&A and Course Content */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box width={350} role="presentation" p={2}>
          <Typography variant="h6">Ask a Question</Typography>
          <QnAComponent />

          <Divider sx={{ my: 2 }} />
          <Typography variant="h6">Course Contents</Typography>
          <ul>
            {dummySummaries.map((summary, index) => (
              <li key={index}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Section {index + 1}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Drawer>
    </Box>
  );
};

export default LearningPage;
