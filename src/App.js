import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from './context';
import AppRouter from './Components/AppRouter';
import ErrorModal from './Components/Modal/ErrorModal';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        errorModal,
        setErrorModal,
      }}
    >
      <BrowserRouter>
        <ErrorModal visible={errorModal} setVisible={setErrorModal}>
          Error! Check the entered data!
        </ErrorModal>
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
