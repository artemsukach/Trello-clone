export default class Storage {
  static getToken() {
    return localStorage.getItem('token');
  }

  static setToken(value) {
    return localStorage.setItem('token', value);
  }

  static setIsAuth(isAuth) {
    return localStorage.setItem('isAuth', isAuth);
  }

  static getIsAuth() {
    return localStorage.getItem('isAuth');
  }
}
