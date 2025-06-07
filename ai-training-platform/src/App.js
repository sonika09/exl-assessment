import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AdminDashboard from './pages/AdminDashboard';
import LearnerDashboard from './pages/LearnerDashboard';
import LearningPage from './pages/LearningPage';
// import Certificates from './pages/Certificates';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/learner" element={<LearnerDashboard />} />
        <Route path="/learn/:id" element={<LearningPage />} />
        {/* <Route path="/certificates" element={<Certificates />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
