import React, { useContext, useState } from 'react';
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

export default function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const { setIsAuth} = useContext(AuthContext);
  // const navigate = useNavigate();
  const auth = useAuth();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const response = await Auth.register(username, email, password);

  //     if (response.ok) {
  //       let json = await response.json();

  //       // setIsAuth(true);

  //       Storage.setToken(json.jwt);
  //       // Storage.setIsAuth(true);

  //       navigate('/board');
  //     } else {
  //       throw new Error(response.status);
  //     }
  //   } catch (e) {
  //     ErrorProcessing.httpErrorMessage(e);
  //     // setErrorModal(true);
  //   }
  // };

  return (
    <div className="container">
      <Navbar />
      <div className="form form--signup">
        <div className="form--heading">Welcome! Sign Up</div>
        <form
          onSubmit={(event) => auth.signup(username, email, password, event)}
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
