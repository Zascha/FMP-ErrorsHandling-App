import * as mapping from '../modules/mapping.js';
import * as request from '../modules/requestModules/sendRequests.js';
import * as render from '../ux-modules/render.js';

export function gererateErrorApiRequest(){
  var newsRequest = mapping.toNewsRequest();
  var result = request.requestNewsData(newsRequest, true);

  result
    .then(response => {
      var newsArray = mapping.toNewsArray(response.sources);
      render.renderNewsData(newsArray);
    })
    .catch(error =>
      import('../modules/errorsModules/errorHandler.js').then(errorHandler => {
        var errorData = new errorHandler.default().logAndGetCutomError(error);
        render.renderErrorData(errorData);
      })
    );
}

export function handleNewsApiRequest(category, language, country) {
  var newsRequest = mapping.toNewsRequest(category, language, country);
  var result = request.requestNewsData(newsRequest);

  result
    .then(response => {
      var newsArray = mapping.toNewsArray(response.sources);
      render.renderNewsData(newsArray);
    })
    .catch(error =>
      import('../modules/errorsModules/errorHandler.js').then(errorHandler => {
        var errorData = new errorHandler.default().logAndGetCutomError(error);
        render.renderErrorData(errorData);
      })
    );
}