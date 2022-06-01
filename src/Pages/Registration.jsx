import React, { useState } from 'react';
import AuthField from '../Components/AuthField';
import Button from '../Components/Button';
import Navbar from './Navbar';
import '../styles/authorization.css';
import { useAuth } from '../hooks/useProvideAuth';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  return (
    <div className="container">
      <Navbar />
      <div className="form form--signup">
        <div className="form--heading">Welcome! Sign Up</div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            auth.signup(username, email, password);
          }}
        >
          <AuthField
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <AuthField
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <AuthField
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Register</Button>
        </form>
      </div>
    </div>
  );
}
