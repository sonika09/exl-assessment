import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Modal,
  TextField,
  IconButton,
  List,
  ListItem,
  Divider,
  Drawer
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const dummySections = [
  'Introduction',
  'Chapter 1: Basics',
  'Chapter 2: Advanced Topics',
  'Conclusion'
];

const LearningPage = () => {
  const videoRef = useRef(null);
  const [questions, setQuestions] = useState([]);
  const [openQA, setOpenQA] = useState(false);
  const [questionInput, setQuestionInput] = useState('');
  const [handRaisedAt, setHandRaisedAt] = useState(null);
  const [selectedSection, setSelectedSection] = useState(0);

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();
  const handleForward = () => (videoRef.current.currentTime += 10);
  const handleBackward = () => (videoRef.current.currentTime -= 10);

  const handleRaiseHand = () => {
    setHandRaisedAt(videoRef.current.currentTime.toFixed(2));
  };

  const handleQuestionSubmit = () => {
    if (questionInput.trim()) {
      setQuestions([...questions, questionInput]);
      setQuestionInput('');
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {/* Main Video Area */}
        <Grid item xs={12} md={8}>
          <Box position="relative">
            <video
              ref={videoRef}
              width="100%"
              controls
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            >
              Your browser does not support the video tag.
            </video>
            <Box mt={2} display="flex" gap={2}>
              <Button onClick={handlePlay}>Play</Button>
              <Button onClick={handlePause}>Pause</Button>
              <Button onClick={handleBackward}>-10s</Button>
              <Button onClick={handleForward}>+10s</Button>
              <Button color="warning" onClick={handleRaiseHand}>
                Raise Hand
              </Button>
              <IconButton color="primary" onClick={() => setOpenQA(true)}>
                <QuestionAnswerIcon />
              </IconButton>
            </Box>
            {handRaisedAt && (
              <Typography sx={{ mt: 1 }}>
                ✋ Hand raised at {handRaisedAt}s
              </Typography>
            )}
          </Box>
        </Grid>

        {/* Sidebar with Course Contents */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6">📄 Course Contents</Typography>
          <List>
            {dummySections.map((section, idx) => (
              <ListItem
                key={idx}
                button
                selected={selectedSection === idx}
                onClick={() => setSelectedSection(idx)}
              >
                {section}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      {/* Q&A Modal */}
      <Modal open={openQA} onClose={() => setOpenQA(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            p: 4
          }}
        >
          <Typography variant="h6" mb={2}>Ask a Question</Typography>
          <TextField
            label="Type your question"
            fullWidth
            multiline
            rows={3}
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
          />
          <Box mt={2} display="flex" justifyContent="space-between">
            <IconButton>
              <MicIcon />
            </IconButton>
            <Button variant="contained" onClick={handleQuestionSubmit}>
              Submit
            </Button>
          </Box>
          <Divider sx={{ mt: 2, mb: 1 }} />
          <Typography variant="subtitle2">Previous Questions:</Typography>
          <List dense>
            {questions.map((q, i) => (
              <ListItem key={i}>{q}</ListItem>
            ))}
          </List>
        </Box>
      </Modal>
    </Container>
  );
};

export default LearningPage;
