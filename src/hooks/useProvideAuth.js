import { createContext, useContext, useEffect, useState } from 'react';
import Auth from '../services/Auth';
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
  const [isAuth, setIsAuth] = useState(
    JSON.parse(Storage.getIsAuth()) || false
  );
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Storage.setIsAuth(isAuth);
  }, [isAuth]);

  async function signin(username, password, event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await Auth.login(username, password);

      if (response.ok) {
        setIsLoading(false);

        let json = await response.json();

        setIsAuth(true);
        Storage.setToken(json.jwt);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      setErrors(e.name);
    }
  }

  async function signup(username, email, password, event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await Auth.register(username, email, password);

      if (response.ok) {
        setIsLoading(false);

        let json = await response.json();

        setIsAuth(true);
        Storage.setToken(json.jwt);
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      setErrors(e.name);
    }
  }

  function signout() {
    setIsAuth(false);
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
