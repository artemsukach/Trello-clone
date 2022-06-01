import FetchRequest from './FetchRequest';

export default class AuthService {
  static async register(username, email, password) {
    const registerResponse = await FetchRequest.request({
      method: 'POST',
      body: {
        username,
        email,
        password,
      },
      path: '/auth/local/register',
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
    });

    return loginResponse;
  }
}
