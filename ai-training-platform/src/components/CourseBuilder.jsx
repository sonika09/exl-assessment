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
    <Box>
      <Typography variant="h6" gutterBottom>
        📄 Course Builder
      </Typography>

      <Stack spacing={1} sx={{ maxWidth: 500, width: '100%', mb: 2 }}>
        <input
          type="file"
          onChange={(e) => setFileName(e.target.files[0]?.name || '')}
        />
        {fileName && (
          <Typography variant="body2" color="textSecondary">
            Selected file: <strong>{fileName}</strong>
          </Typography>
        )}
        <Button
          onClick={handleUpload}
          variant="contained"
          disabled={!fileName}
        >
          Generate Summaries
        </Button>
      </Stack>

      {localSummaries.length > 0 && (
        <Box
          mt={2}
          sx={{
            maxHeight: { xs: 250, md: 300 },
            overflowY: 'auto',
            backgroundColor: '#fafafa',
            p: 2,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          {localSummaries.map((s, i) => (
            <Paper
              key={i}
              sx={{
                p: 2,
                mb: 2,
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
                sx={{ mt: 1 }}
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
