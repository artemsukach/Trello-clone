import TokenStorage from './TokenStorage';

export default class GenerateRequestData {
  static generateOptions({ method, body }) {
    const token = TokenStorage.getToken('token');

    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : ``,
      },
      body: JSON.stringify(body),
    };
  }
}
