import ErrorsFactory from './errorsFactory.js';

export default class ErrorHadler {
  constructor() {
    if (typeof ErrorHadler.instance === 'object') {
      return ErrorHadler.instance;
    }
    ErrorHadler.instance = this;
    return this;
  }

  logAndGetCutomError(error) {
    console.log("ERROR: " + error.message);
    return new ErrorsFactory().create(error);
  }
}