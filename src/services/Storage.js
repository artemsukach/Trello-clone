export default class Storage {
  static getToken() {
    return window.localStorage.getItem('token');
  }

  static setToken(value) {
    return window.localStorage.setItem('token', value);
  }

  static removeToken() {
    return window.localStorage.removeItem('token');
  }
}
