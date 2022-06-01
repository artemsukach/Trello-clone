import Storage from './Storage';

export default class GenerateRequestData {
  static generateOptions({ method, body }) {
    const token = Storage.getToken();
    
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: token ? `Bearer ${token}` : '' }),
      },
      body: JSON.stringify(body),
    };
  }
}
