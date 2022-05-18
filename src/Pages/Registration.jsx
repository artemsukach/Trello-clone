import React, { useContext, useState } from 'react';
import AuthField from '../Components/AuthField';
import Button from '../Components/Button';
import { AuthContext } from '../context';
import Auth from '../services/Auth';
import ErrorProcessing from '../services/ErrorProcessing';
import TokenStorage from '../services/TokenStorage';
import Navbar from './Navbar';
import './registration.css';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuth, setErrorModal } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await Auth.register(username, email, password);
      TokenStorage.setToken(username, response.jwt);
      setIsAuth(true);
    } catch (e) {
      ErrorProcessing.httpErrorMessage(e);
      setErrorModal(true);
    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="form form--signup">
        <div className="form--heading">Welcome! Sign Up</div>
        <form onSubmit={handleSubmit}>
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
