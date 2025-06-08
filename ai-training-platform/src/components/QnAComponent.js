import React, { useState } from 'react';
import {
  TextField,
  Button,
  IconButton,
  Box,
  Stack,
  Paper,
  Typography
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

const QnAComponent = () => {
  const [question, setQuestion] = useState('');

  const handleAsk = () => {
    console.log('Question Asked:', question);
    setQuestion('');
  };

  return (
    <Paper
      elevation={2}
      sx={{
        p: { xs: 2, sm: 3 },
        borderRadius: 2,
        maxWidth: 600,
        mx: 'auto',
        mt: 4,
      }}
    >
      <Typography variant="h6" gutterBottom>
        ❓ Ask a Question
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={3}
        label="Type your question"
        variant="outlined"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleAsk}
          disabled={!question.trim()}
          sx={{ textTransform: 'none', fontWeight: 500 }}
        >
          Submit Question
        </Button>

        {/* Mic icon is for future speech input (mock) */}
        <IconButton
          color="primary"
          sx={{
            alignSelf: { xs: 'center', sm: 'center' },
            border: '1px solid #ccc',
            p: 1,
          }}
        >
          <MicIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
};

export default QnAComponent;
