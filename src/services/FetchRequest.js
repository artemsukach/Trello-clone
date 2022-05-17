import GenerateRequestData from './GenerateRequestData.js';
import ErrorProcessing from './ErrorProcessing.js';
const URL = 'https://radiant-temple-07706.herokuapp.com';

export default class FetchRequest {
  static async request({ method = 'GET', body, path }) {
    const url = `${URL}${path}`;
    const options = GenerateRequestData.generateOptions({ method, body });

    try {
      const response = await fetch(url, options);

      if (response.ok) {
        let json = await response.json();

        return await json;
      } else {
        throw new Error(response.status);
      }
    } catch (e) {
      ErrorProcessing.httpErrorMessage(e);
    }
  }
}
