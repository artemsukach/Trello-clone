export default class TokenStorage {
  static getToken(value) {
    return window.localStorage.getItem(value);
  }

  static setToken(username, value) {
    return window.localStorage.setItem(username, value);
  }
}
