import { createContext, useContext, useState } from 'react';
import AuthService from '../services/AuthService';
import Storage from '../services/Storage';

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [isAuth, setIsAuth] = useState(Storage.getToken() != null || false);
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function signin(username, password) {
    setIsLoading(true);

    try {
      const response = await AuthService.login(username, password);

      if (response.ok) {
        let json = await response.json();

        setIsAuth(true);
        Storage.setToken(json.jwt);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      setErrors(e.name);
    } finally {
      setIsLoading(false);
    }
  }

  async function signup(username, email, password) {
    setIsLoading(true);

    try {
      const response = await AuthService.register(username, email, password);

      if (response.ok) {
        let json = await response.json();

        setIsAuth(true);
        Storage.setToken(json.jwt);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      setErrors(e.name);
    } finally {
      setIsLoading(false);
    }
  }

  function signout() {
    setIsAuth(false);
    Storage.removeToken();
  }

  return {
    isAuth,
    signin,
    signup,
    signout,
    errors,
    isLoading,
  };
}
