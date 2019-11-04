import configuration from '../../../appconfig.json';

export function getConfigurationValue(configKey) {
    if (!configKey) {
        throw new Error("Null, underfined or empty passed config key.");
    }
    return getConfigValue(configKey);
}

function getConfigValue(key) {
    if (!configuration[key]) {
        throw new Error("Not existing configuration key.");
    }
    return configuration[key];
}