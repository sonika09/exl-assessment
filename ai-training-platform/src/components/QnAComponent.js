import React, { useState } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';

const QnAComponent = () => {
  const [question, setQuestion] = useState('');

  const handleAsk = () => {
    console.log('Question Asked:', question);
    setQuestion('');
  };

  return (
    <>
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
      <Button fullWidth variant="contained" onClick={handleAsk}>
        Submit Question
      </Button>

      {/* Optional Mic Button (mock only) */}
      <IconButton sx={{ mt: 2 }} color="primary">
        <MicIcon />
      </IconButton>
    </>
  );
};

export default QnAComponent;
