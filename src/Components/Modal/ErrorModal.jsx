import React from 'react';
import cl from './ErrorModal.module.css';

export default function ErrorModal({ children, visible, setVisible }) {
  const rootClasses = [cl.errorModal];

  if (visible) {
    rootClasses.push(cl.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.cancelBtn}></div>
      <div className={cl.errorModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
