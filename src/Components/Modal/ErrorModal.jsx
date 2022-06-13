import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from '../../redux/error/actions';
import cl from '../../styles/ErrorModal.module.css';

export default function ErrorModal({ children}) {
  const rootClasses = [cl.errorModal];
  const dispatch = useDispatch();
  const showError = useSelector((state) => state.error);

  if (showError) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => dispatch(setError(false))}>
      <div className={cl.cancelBtn}></div>
      <div
        className={cl.errorModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
