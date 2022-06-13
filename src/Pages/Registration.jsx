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

export default function Registration() {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validationRules = {
    username: (value) => value.length > 0,
    email: (value) => value.length > 0,
    password: (value) => value.length > 0,
  };
  const defaultValues = {
    username: '',
    email: '',
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
        <div className="form--heading">Welcome! Sign Up</div>
        <form
          onSubmit={(event) => {
            try {
              event.preventDefault();

              const isValid = validate();

              if (isValid) {
                auth.signup(values.username, values.email, values.password);

                navigate('/board');
              }
            } catch (e) {
              dispatch(setError(true));
            }
          }}
        >
          <AuthField
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage error={errors.username} />
          <AuthField
            value={values.email}
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage error={errors.email} />
          <AuthField
            value={values.password}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage error={errors.password} />
          <Button>Register</Button>
        </form>
      </div>
    </div>
  );
}
