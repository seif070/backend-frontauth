import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // fonction bilogin
  const handellogin = async (values) => {
    try {
      const res = await axios.post('http://localhost:5200/auth/login', values);
      console.log('res', res.data.token);
      await localStorage.setItem('token', res.data.token);
      navigate('/app/privateRoute');
    } catch (err) {
      console.error(err); 
    }
  };

  return (
    <div>
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
          className="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>name lastname</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
            <button onClick={() => handellogin({ email, password })}>log in</button>
          </div>
          <a href="#">
            <span />
            <span />
            <span />
            <span />
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
