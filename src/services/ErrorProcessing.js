export default class ErrorProcessing {
  static httpErrorMessage(status) {
    if (status === 500) {
      return 'Problem with server';
    } else if (status === 401) {
      return 'Unauthorized';
    } else if (status === 404) {
      return 'Not Found';
    } else {
      return 'Error';
    }
  }
}
