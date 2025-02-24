import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 'Routes' replaces 'Switch'
import HomePage from './Pages/HomePage';
import SignupPage from './Pages/SignupPage';
import LoginPage from './Pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes using the 'element' prop */}
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
