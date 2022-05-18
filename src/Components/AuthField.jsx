import React from 'react';
import '../Pages/registration.css';

export default function AuthField(props) {
  return (
        <label>
          {props.name[0].toUpperCase() + props.name.slice(1)}:
          <input {...props} className={"authorization__" + props.name} />
        </label>
  );
}
