import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import { fetchautUser } from '../../api/authapi';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../redux/authSlice';

import Login from '../login/Login';
import NavbarCont from "../navbar/NavbarCont";
import User from '../user/User'; 
import Admin from '../admin/Admin'; 

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authUser = useSelector(state => state.auth);
  console.log('authUser', authUser);

  const getAuth = async () => {
    try {
      const data = await fetchautUser();
      console.log('data auth', data);
      dispatch(setAuth(data));
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  useEffect(() => {
    getAuth();
  }, [dispatch]);

  const token = localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      {token ? (
        <div>
          <NavbarCont auth={authUser} logout={logout} />
          {authUser.role === 'admin' ? (
            <Admin auth={authUser} />
          ) : (
            <User logout={logout} />
          )}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default PrivateRoute;
