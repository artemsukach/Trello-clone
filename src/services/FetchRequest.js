import GenerateRequestData from './GenerateRequestData.js';

const URL = 'https://radiant-temple-07706.herokuapp.com';

export default class FetchRequest {
  static async request({ method = 'GET', body, path}) {
    const url = `${URL}${path}`;
    const options = GenerateRequestData.generateOptions({
      method,
      body,
    });
    const response = await fetch(url, options);

    return response;
  }
}
