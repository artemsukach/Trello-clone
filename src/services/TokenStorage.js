export default class TokenStorage {
  static getToken(property) {
    return window.localStorage.getItem(property);
  }

  static setToken(property, value) {
    return window.localStorage.setItem(property, value);
  }
}
