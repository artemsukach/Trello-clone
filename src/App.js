import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/AppRouter';
import { ProvideAuth } from './hooks/useProvideAuth';

function App() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
