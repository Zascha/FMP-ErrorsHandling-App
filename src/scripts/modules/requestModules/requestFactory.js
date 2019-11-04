import * as constants from '../constantsModules/methodTypeConstants.js';

export default class RequestFactory {
    constructor() {
        if (typeof RequestFactory.instance === 'object') {
            return RequestFactory.instance;
        }

        RequestFactory.instance = this;
        return this;
    }

    isValid() {
        return this.url;
    }

    createRequest(url, method) {
        if (!getSupportedMethods().includes(method)) {
            throw new Error("Not supported request method type.");
        }
        return fetch(url, { method: method });
    }
}

function getSupportedMethods() {
    return [
        constants.getMethod,
        constants.postMethod,
        constants.putMethod,
        constants.deleteMethod
    ]
};
