import * as constants from '../modules/constantsModules/requestConstants.js';
import NewsRequest from '../models/newsRequest.js';
import News from '../models/news.js';

export function toNewsRequest(category, language, country) {
    return new NewsRequest(category, language, country);
}

export function toNewsArray(responseArray) {
    return responseArray.map(function (item) {
        return converJsonObjectToNewsObject(item);
    });
}

function converJsonObjectToNewsObject(jsonObject) {
    return new News(
        jsonObject[constants.jsonNewsObjectTitleKey],
        jsonObject[constants.jsonNewsObjectDescriptioKey],
        jsonObject[constants.jsonNewsObjectUrlKey],
        jsonObject[constants.jsonNewsObjectCategoryKey],
        jsonObject[constants.jsonNewsObjectCountryKey],
        jsonObject[constants.jsonNewsObjectLanguageKey],
    );
}