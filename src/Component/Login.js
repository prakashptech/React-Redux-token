import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Footer from './footer';
import {useDispatch, useSelector} from 'react-redux';
import './login.css'; // Import the CSS file here
import { loginSucess } from '../actions/authActions';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to track whether to show password or not
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const error1 = useSelector(state => state.auth.error);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });
      const { token } = response.data;
      // setToken(token);
      dispatch(loginSucess(token));
      // Optionally, you can store the token in local storage for persistence
      localStorage.setItem('token', token);
      localStorage.setItem('userId', username);
      // Redirect to user profile page or any other desired page
      window.location.href = '/profile';
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="password-input-container">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p>{error}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default Login;
