import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import OTPVerification from './components/OTPVerification';
import RestaurantList from './components/RestaurantList';
import RestaurantImage from './components/RestaurantImage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/restaurants" element={<RestaurantList />} />
        <Route path="/restaurant/:id" element={<RestaurantImage />} />
      </Routes>
    </Router>
  );
}
export default App;
