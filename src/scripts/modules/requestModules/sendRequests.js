import * as configConstants from '../constantsModules/configConstants.js';
import * as requestConstants from '../constantsModules/requestConstants.js';
import * as methodTypeConstants from '../constantsModules/methodTypeConstants.js';
import RequestProxy from './requestProxy.js';

export function requestNewsData(newsRequest, generateError = false) {
    if (!newsRequest.isValid()) {
        throw new Error("Invalid passed news request.");
    }

    var requestUrl = formRequestUrl(newsRequest, generateError);
    return getNewsDataAsync(requestUrl).then(response => throwErrorIfFailed(response));
}

async function getNewsDataAsync(requestUrl) {
    let response = await new RequestProxy().createRequest(requestUrl, methodTypeConstants.getMethod);
    let data = await response.json();
    return data;
}

function formRequestUrl(requestParams, generateError) {
    var url = generateError 
              ? configConstants.invalidBaseRequestUrl
              : configConstants.baseRequestUrl + requestParams.apiKey;

    url = getUrlWithNewRequestUrlParam(url, requestConstants.requestCategoryParam, requestParams.category);
    url = getUrlWithNewRequestUrlParam(url, requestConstants.requestLanguageParam, requestParams.language);
    url = getUrlWithNewRequestUrlParam(url, requestConstants.requestCountryParam, requestParams.country);

    return url;
}

function getUrlWithNewRequestUrlParam(urlString, urlParam, urlParamValue) {
    if (urlParamValue) {
        urlString += "&" + urlParam + "=" + urlParamValue;
    }
    return urlString;
}

function throwErrorIfFailed(response){
    if (response.status == 'error') {
        throw new Error(response.code);
    }
    return response;
}