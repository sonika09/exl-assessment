// File: src/components/CourseBuilder.jsx

import React, { useState } from 'react';
import { Box, Button, Typography, TextField, Paper } from '@mui/material';
import { generateSummaries } from '../utils/mockApi';

const CourseBuilder = ({ setSummaries }) => {
  const [fileName, setFileName] = useState('');
  const [localSummaries, setLocalSummaries] = useState([]);

  const handleUpload = () => {
    const summaries = generateSummaries(4); // simulate 4 pages
    setLocalSummaries(summaries);
    setSummaries(summaries);
  };

  const handleEdit = (index, newText) => {
    const updated = [...localSummaries];
    updated[index].summary = newText;
    setLocalSummaries(updated);
    setSummaries(updated);
  };

  return (
    <Box mb={4}>
      <Typography variant="h6">📄 Course Builder</Typography>
      <input
        type="file"
        onChange={(e) => setFileName(e.target.files[0]?.name || '')}
      />
      <Button onClick={handleUpload} variant="contained" sx={{ mt: 2 }}>
        Generate Summaries
      </Button>

      {localSummaries.length > 0 && (
        <Box mt={2}>
          {localSummaries.map((s, i) => (
            <Paper key={i} sx={{ p: 2, mt: 1 }}>
              <Typography variant="subtitle2">Page {s.page}</Typography>
              <TextField
                value={s.summary}
                onChange={(e) => handleEdit(i, e.target.value)}
                fullWidth
                multiline
              />
              <Button sx={{ mt: 1 }} size="small">
                Regenerate (Mock)
              </Button>
            </Paper>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CourseBuilder;
