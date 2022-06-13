import React from 'react';
import AuthField from '../Components/AuthField';
import Button from '../Components/Button';
import Navbar from './Navbar';
import '../styles/authorization.css';
import { useAuth } from '../hooks/useProvideAuth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setError } from '../redux/error/actions';
import ErrorModal from '../Components/Modal/ErrorModal';
import { useForm } from '../hooks/useForm';
import ErrorMessage from '../Components/ErrorMessage';

export default function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationRules = {
    username: (value) => value.length > 0,
    password: (value) => value.length > 0,
  };
  const defaultValues = {
    username: '',
    password: '',
  };
  const { values, errors, handleChange, handleBlur, validate } = useForm({
    defaultValues,
    validationRules,
  });

  return (
    <div className="container">
      <ErrorModal>Error</ErrorModal>
      <Navbar />
      <div className="form form--signup">
        <div className="form--heading">Welcome! Sign In</div>
        <form
          onSubmit={(event) => {
            try {
              event.preventDefault();

              const isValid = validate();

              if (isValid) {
                auth.signin(values.username, values.password);

                navigate('/board');
              }
            } catch (e) {
              dispatch(setError(true));
            }
          }}
        >
          <AuthField
            value={values.username}
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage error={errors.username} />
          <AuthField
            value={values.password}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage error={errors.password} />
          <Button>Login</Button>
        </form>
      </div>
    </div>
  );
}
