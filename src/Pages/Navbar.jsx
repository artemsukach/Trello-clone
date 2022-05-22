import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/authorization.css';

export default function Navbar() {
  return (
    <div className="message signup">
      <div className="btn-wrapper">
        <Link className="button" to="/registration">
          Registation
        </Link>
        <Link className="button" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}
