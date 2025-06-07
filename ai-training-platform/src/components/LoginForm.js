import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography
} from '@mui/material';

const LoginForm = () => {
  const [role, setRole] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    role === 'Admin' ? navigate('/admin') : navigate('/learner');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>Login</Typography>
      <Box display="flex" flexDirection="column" gap={2}>
        <FormControl fullWidth>
          <InputLabel>Role</InputLabel>
          <Select value={role} label="Role" onChange={(e) => setRole(e.target.value)}>
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Learner">Learner</MenuItem>
          </Select>
        </FormControl>
        <TextField label="Email" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" variant="outlined" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </Box>
    </Container>
  );
};

export default LoginForm;
