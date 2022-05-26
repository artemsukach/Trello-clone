import React, { useState } from 'react';
import AuthField from '../Components/AuthField';
import Button from '../Components/Button';
import Navbar from './Navbar';
import '../styles/authorization.css';
import { useAuth } from '../hooks/useProvideAuth';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = useAuth();

  return (
    <div className="container">
      <Navbar />
      <div className="form form--signup">
        <div className="form--heading">Welcome! Sign In</div>
        <form onSubmit={(event) => auth.signin(username, password, event)}>
          <AuthField
            value={username}
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <AuthField
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}
