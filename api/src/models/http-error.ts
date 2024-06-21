interface HttpError {
  code: number;
  message: string;
}

class HttpError extends Error {
  constructor(message: string, errorCode: number) {
    super(message); // Add a "message" property
    this.code = errorCode;
  }
}
export default HttpError;
