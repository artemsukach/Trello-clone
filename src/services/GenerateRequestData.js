import TokenStorage from './TokenStorage';

export default class GenerateRequestData {
  static generateOptions({ method, body, isCards}) {
    const token = TokenStorage.getToken('token');
    let headers;
    
    if(isCards){
      headers = {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      }
    } else{
      headers = {
        'Content-Type': 'application/json',
      }
    }

    return {
      method,
      headers,
      body: JSON.stringify(body),
    };
  }
}
