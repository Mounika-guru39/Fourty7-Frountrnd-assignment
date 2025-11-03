import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile) {
      navigate('/otp');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="tel"
          value={mobile}
          placeholder="Enter Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="btn-primary">Next</button>
      </form>
    </div>
  );
};

export default Login;
