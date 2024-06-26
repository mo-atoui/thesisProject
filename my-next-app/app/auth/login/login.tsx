"use client";

import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAuth } from '../../context/authcontex/Authcontex';

const LoginPage: React.FC = () => {
  const { loginAction } = useAuth();
  const [state, setState] = useState({
    email: '',
    password: ''
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOnSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    const { email, password } = state;

    try {
      await loginAction({ email, password }, 'login');
      alert('Login successful');
      setState({
        email: '',
        password: ''
      });
    } catch (error) {
      alert('Login failed');
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Sign in</h1>
        <span>or use your account</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <a href="#">Forgot your password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
