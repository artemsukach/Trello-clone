import React from 'react';

const ErrorMessage = ({ error, message = 'Should not empty' }) => {
  return error ? <div style={{ color: 'red' }}>{message}</div> : null;
};

export default ErrorMessage;
