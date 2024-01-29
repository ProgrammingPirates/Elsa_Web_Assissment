import React, { useState } from 'react';
import './Login.css'; 
import { useNavigate } from 'react-router-dom';
import CountryFlag from 'react-country-flag';
import { authenticateUser } from '../api'; 

const Login = ({ onLogin }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('IN'); 
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const staticOTP = '123456';
  const handleSendOTP = () => {
    console.log('Sending OTP...');
    setIsOtpSent(true);
  };
  const handleLogin = async () => {
    if (!agreeTerms) {
      alert('Please agree to the Terms Conditions & Privacy Policy before logging in.');
      return;
    }
    if (otp === staticOTP) {
      console.log('Login successful!');
      onLogin({ /* pass user data here if needed */ });
      navigate('/home');
    } else {
      console.log('Invalid OTP. Login failed.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="country-code-container">
        {/* Add the CountryFlag component */}
        <CountryFlag countryCode={selectedCountry} svg />

        {/* Input for Email or Phone */}
        <input
          type="text"
          placeholder="Email or Phone"
          value={emailOrPhone}
          onChange={(e) => setEmailOrPhone(e.target.value)}
        />
      </div>

      {/* Input for OTP */}
      <input
        type="password"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <br />
      
      {/* Send OTP Button */}
      <button className="send-otp-btn" onClick={handleSendOTP} disabled={isOtpSent}>
        {isOtpSent ? 'OTP Sent' : 'Send OTP'}
      </button>
      
      {/* Login Button */}
      <button className="login-btn" onClick={handleLogin} disabled={!isOtpSent || !agreeTerms}>
        Login
      </button>
      
      <p>
        <label>
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          By logging in, you agree to the{' '}
          <a href="#" target="_blank" rel="noopener noreferrer">
            Terms Conditions & Privacy Policy
          </a>{' '}
          of Elda Health.
        </label>
      </p>
    </div>
  );
};

export default Login;
