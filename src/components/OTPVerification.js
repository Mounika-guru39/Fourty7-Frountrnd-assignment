import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp === '123456') {
      navigate('/restaurants');
    } else {
      alert('Incorrect OTP. Try 123456');
    }
  };

  return (
    <div className="form-container">
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={otp}
          placeholder="Enter OTP"
          onChange={(e) => setOtp(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="btn-primary">Verify</button>
      </form>
    </div>
  );
};

export default OTPVerification;
