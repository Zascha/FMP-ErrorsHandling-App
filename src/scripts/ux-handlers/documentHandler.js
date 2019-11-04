import $ from "jquery";

import * as handleRequests from '../ux-modules/handleRequests.js'

(function ($) {
    $(document).ready(function () {
       handleRequests.handleNewsApiRequest();
    });
})($);