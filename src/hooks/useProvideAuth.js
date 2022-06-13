import { createContext, useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setError } from '../redux/error/actions';
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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
      dispatch(setError(true));
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
      dispatch(setError(true));
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
    isLoading,
  };
}
