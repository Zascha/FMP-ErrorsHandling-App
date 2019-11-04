import * as errors from '../../models/errors.js';
import * as constants from '../constantsModules/errorsConstants.js';

export default class ErrorsFactory{
  constructor() {
    if (typeof ErrorsFactory.instance === 'object') {
      return ErrorsFactory.instance;
    }
    ErrorsFactory.instance = this;
    return this;
  }

  create(error) {
      switch(error.message){
          case constants.unathorizedApiError: return new errors.UnathorizedFetchResponse(error.message);
          default: return new errors.ServerErrorFetchResponse(error.message);
      }
  }
}