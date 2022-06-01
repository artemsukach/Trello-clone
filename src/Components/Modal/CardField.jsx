import React from 'react';
import cl from '../../styles/EditCardModal.module.css';

export default function CardField({name, callback}) {
  return (
    <>
      <label className={cl.fieldLabel} htmlFor={name}>
        {name}
      </label>
      <input
        className={cl.fieldInput}
        onChange={callback}
        placeholder="title"
      ></input>
    </>
  );
}
