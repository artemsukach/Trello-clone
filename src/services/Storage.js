export default class Storage {
  static getToken() {
    return window.localStorage.getItem('token');
  }

  static setToken(value) {
    return window.localStorage.setItem('token', value);
  }

  static setIsAuth(isAuth) {
    return window.localStorage.setItem('isAuth', isAuth);
  }

  static getIsAuth() {
    return window.localStorage.getItem('isAuth');
  }
}
