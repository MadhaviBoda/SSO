import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginForm';
import LandingPage from './components/Home';
import ProtectedPage from './components/ProtectedPage';
import PrivateRoute from './PrivateRoute';
import './App.css';
import ForgetPassword from './components/ForgetPassword';

const AppContent = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  console.log('AppContent rendered, isAuthenticated:', isAuthenticated);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/protected" element={<PrivateRoute isAuthenticated={isAuthenticated}><ProtectedPage /></PrivateRoute>} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
