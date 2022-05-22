import FetchRequest from './FetchRequest';

export default class Auth {
  static async register(username, email, password) {
    const registerResponse = await FetchRequest.request({
      method: 'POST',
      body: {
        username,
        email,
        password,
      },
      path: '/auth/local/register',
      isCards: false,
    });

    return registerResponse;
  }

  static async login(identifier, password) {
    const loginResponse = await FetchRequest.request({
      method: 'POST',
      body: {
        identifier,
        password,
      },
      path: '/auth/local',
      isCards: false,
    });

    return loginResponse;
  }
}
