'use strict';

window._ = require("lodash");

var angular = require('angular');
window.angular = angular;

var jQuery = require("jquery");
window.jQuery = jQuery;
window.$ = jQuery;

require("bootstrap");
require("angular-bootstrap");
require("angular-seo");
require("angularjs-geolocation");
require("angular-ui-router");
require("angular-mocks");
require("angular-simple-logger");
require("angular-google-maps");
require("ocLazyLoad");


var app = angular.module('ratCatchr', [
    "ng",
    'ui.router',
    'ui.bootstrap',
    'uiGmapgoogle-maps',
    'geolocation',
    'oc.lazyLoad'
]);

require("../config/gmap_config.js");
require("../config/uirouter_config.js");





//app.directive("placeInfo", require("../directives/placeInfo.js"));

