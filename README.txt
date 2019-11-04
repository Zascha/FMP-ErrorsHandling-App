* FILE STRUCTURE:
- src/
---- scripts/			- js files
-------- models/ 		- js classes
-------- modules/ 		- js 'back' logic modules
------------- constantsModules/ - constant enums
------------- errorsModules/ 	- errors handling modules
------------- requestsModules/ 	- requet creating modules
-------- ux-handlers/ 		- jQuery ux-events handlers
-------- ux-modules/ 		- modules for ux-events handling
---- sources/			- fonts and images
---- styles/			- sass files
---- views/			- html pages
---------_ErrorCard.html 	- partial view for error.js model
---------_NewsCard.html  	- partial view for news.js model

src/scripts/app.js 	- entry point for js
scr/styles/app.scss 	- entry point for sass

* TASKS
1-2) Lazy Initialization: Within the project, it is necessary to implement error handling handlers from the server. All error handling functionality should be loaded only on demand. Error Handler should be organized as Singleton.

- src/scripts/models/error.js - custom errors to render on UI


- errorsModules/
----- errorsHandler.js (Singleton) - logs passed response error and converts it to a custom error for the further rendering
----- errorsFactory.js (Singleton) - creates custom errors basing on server error message 
				     (not possible to use response status, as NewsAPI response object does not contain such data)

Usage (src/scripts/ux-modules/render.js):
...
.catch(error =>
    import('../modules/errorsModules/errorHandler.js').then(errorHandler => {
        var errorData = new errorHandler.default().logAndGetCutomError(error);
        render.renderErrorData(errorData);
    })
)
...

3-4) Within the project, it is necessary to implement a layer/factory responsible for requests to the server with GET, POST, PUT, etc methods. It is necessary to implement a proxy layer above the implemented factory, which would log all kinds of requests and transmitted parameters.

- requestModules/
----- requestFactory.js (Singleton) - creates fetch request object with the passed url and HTTP method data
----- requestProxy.js 		    - requestFactory.js proxy. Logs passed for creating fetch request object data, creates fetch request object using requestFactory.js 
----- sendRequests.js		    - prepares data for request, calls requestProxy.js for getting request object, handles response


Usage (src/scripts/requestModules/sendRequests.js):

async function getNewsDataAsync(requestUrl) {
    let response = await new RequestProxy().createRequest(requestUrl, methodTypeConstants.getMethod);
    let data = await response.json();
    return data;
}

5) Organize all code using MV* Pattern

MVVM Pattern implementstion:
- Models: src/scripts/models/
	- Error models (errors.js)
	- News model (news.js)
- Views: src/views/
	- _ErrorCard.html
	- _NewsCard.html

Rendering: src/scripts/ux-modules/render.js

* CONFIGURE APP:
appconfig.json - set News API Key here
{
    "ApiKey": <your api key>
}

* RUN PROD APP VERSION:
run 'run.app.bat'