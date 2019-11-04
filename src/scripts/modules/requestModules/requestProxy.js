import RequestFactory from './requestFactory.js';

export default class RequestProxy {
    createRequest(url, method){
        logInputParams(url, method);
        return new RequestFactory().createRequest(url, method);
    }
}

function logInputParams(url, method){
    console.log("Passed request data: url('"+ url +"'), method: " +  method);
}