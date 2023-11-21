import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { postauthUser } from '../../api/authapi';

const Register = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const login = async () => {
    await postauthUser({ name, lastname, email, password });
    navigate('/Login');
  };

  return (
    <div>
      <div className="container">
        <h2>Auth</h2>

        <form>
          <input type="text" className="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="text" className="lastname" placeholder="last name" value={lastname} onChange={(e) => setLastname(e.target.value)} />

          <input type="text" className="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" className="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
        </form>

        <a href="#" className="link">
          forgot your password ?
        </a>
        <br />
        <button className="register" onClick={login}>
          <span>register</span>
        </button>
        <button className="signin" onClick={login}>
          <span>sign in</span>
        </button>
        <h3>your registration is complete ! </h3>
        <h3>your sign in is complete !</h3>
        <button onClick={()=>login({name,lastname,email,password})}>login</button>
        <div className="reg" />
        <div className="sig" />
      </div>
    </div>
  );
};

export default Register;
