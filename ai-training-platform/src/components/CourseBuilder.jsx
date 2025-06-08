import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Paper,
  Stack
} from '@mui/material';
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
    <Box mb={4} sx={{ p: { xs: 2, sm: 3 }, backgroundColor: '#fdfdfd', borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom>
        📄 Course Builder
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="flex-start">
        <input
          type="file"
          onChange={(e) => setFileName(e.target.files[0]?.name || '')}
          style={{ maxWidth: '100%' }}
        />
        {fileName && (
          <Typography variant="body2" sx={{ mt: { xs: 1, sm: 0 } }}>
            Selected: <strong>{fileName}</strong>
          </Typography>
        )}
      </Stack>

      <Button onClick={handleUpload} variant="contained" sx={{ mt: 2, width: { xs: '100%', sm: 'auto' } }}>
        Generate Summaries
      </Button>

      {localSummaries.length > 0 && (
        <Box mt={3}>
          {localSummaries.map((s, i) => (
            <Paper
              key={i}
              sx={{
                p: { xs: 2, sm: 3 },
                mt: 2,
                borderRadius: 2,
                backgroundColor: '#f5f5f5',
              }}
              elevation={1}
            >
              <Typography variant="subtitle2" gutterBottom>
                Page {s.page}
              </Typography>
              <TextField
                value={s.summary}
                onChange={(e) => handleEdit(i, e.target.value)}
                fullWidth
                multiline
                minRows={3}
              />
              <Button
                variant="outlined"
                size="small"
                sx={{ mt: 1, width: { xs: '100%', sm: 'auto' } }}
              >
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
