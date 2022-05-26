import React, { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import AuthField from '../Components/AuthField';
import Button from '../Components/Button';
// import { AuthContext } from '../context';
// import Auth from '../services/Auth';
// import ErrorProcessing from '../services/ErrorProcessing';
// import Storage from '../services/Storage';
import Navbar from './Navbar';
import '../styles/authorization.css';
import { useAuth } from '../hooks/useProvideAuth';
// import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const navigate = useNavigate();
  // const { setErrorModal } = useContext(AuthContext);
  // const { setIsAuth } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const authContext = createContext();
  const auth = useAuth();
  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await Auth.login(username, password);

  //     if (response.ok) {
  //       let json = await response.json();

  //       setIsAuth(true);

  //       Storage.setIsAuth(true);
  //       Storage.setToken(json.jwt);

  //       navigate('/board');
  //     } else {
  //       throw new Error(response.status);
  //     }
  //   } catch (e) {
  //     ErrorProcessing.httpErrorMessage(e);
  //     setErrorModal(true);
  //   }
  // };

  return (
    <div className="container">
      <Navbar />
      <div className="form form--signup">
        <div className="form--heading">Welcome! Sign In</div>
        <form
          onSubmit={
            (event) => auth.signin(username, password, event)
            // navigate('/board');
          }
        >
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
