import * as constants from '../modules/constantsModules/configConstants.js';
import * as configuration from '../modules/configuration.js';

export default class NewsRequest {
    constructor(category, language, country, apiKey) {
        this.category = category;
        this.language = language;
        this.country = country;
        this.apiKey = apiKey || configuration.getConfigurationValue(constants.apiKeyConfigurationKey);
    }

    isValid() {
        return this.apiKey;
    }
}