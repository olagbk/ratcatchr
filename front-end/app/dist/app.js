(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
require("../config/run_config.js");





//app.directive("placeInfo", require("../directives/placeInfo.js"));


},{"../config/gmap_config.js":2,"../config/run_config.js":3,"../config/uirouter_config.js":4,"angular":"angular","angular-bootstrap":"angular-bootstrap","angular-google-maps":"angular-google-maps","angular-mocks":"angular-mocks","angular-seo":"angular-seo","angular-simple-logger":"angular-simple-logger","angular-ui-router":"angular-ui-router","angularjs-geolocation":"angularjs-geolocation","bootstrap":"bootstrap","jquery":"jquery","lodash":"lodash","ocLazyLoad":"ocLazyLoad"}],2:[function(require,module,exports){
/**
 * Created by reis on 11/29/15.
 */

var angular = require("angular");
var app = angular.module("ratCatchr");

app.config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
//        key: 'AIzaSyB-Ljp-20QcBSt992ofFLIQrAp_Ko7FxFI',
        v: '3.17',
        libraries: "places"
    });

});
},{"angular":"angular"}],3:[function(require,module,exports){
/**
 * Created by reis on 12/5/15.
 */
var angular = require("angular");
var app = angular.module("ratCatchr");

app.run(function($rootScope){

    $rootScope.formatTime = function(time){
        return time.split("T").pop().slice(0, 5);
    }

})
},{"angular":"angular"}],4:[function(require,module,exports){
/**
 * Created by reis on 11/29/15.
 */
var angular = require("angular");
var app = angular.module("ratCatchr");

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    //$locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise("/");

    $stateProvider.state('home', {
        url: '/',

        views: {
            mainContent: {
                controller: 'mapController', // This view will use mapController loaded below in the resolve
                templateUrl: '/views/pages/home.html'
            }
        },

        resolve: {deps: [
            "$ocLazyLoad",
            function($ocLazyLoad){

                return $ocLazyLoad.load([
                    '/dist/home.js',
                    '/dist/style_home.js'
                ])
            }]}
    });

    $stateProvider.state('details', {
        url: "/places/:id",

        views: {
            mainContent: {
                controller: 'detailsController',
                templateUrl: '/views/pages/details.html'
            }
        },

        resolve: {deps: [
            "$ocLazyLoad",
            function($ocLazyLoad){

                return $ocLazyLoad.load([
                    '/dist/details.js',
                    '/dist/style_details.js'
                ])
            }]}
    });


});
},{"angular":"angular"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9idW5kbGVzL2FwcC5qcyIsImFwcC9zY3JpcHRzL2NvbmZpZy9nbWFwX2NvbmZpZy5qcyIsImFwcC9zY3JpcHRzL2NvbmZpZy9ydW5fY29uZmlnLmpzIiwiYXBwL3NjcmlwdHMvY29uZmlnL3Vpcm91dGVyX2NvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuXyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5cbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xud2luZG93LmFuZ3VsYXIgPSBhbmd1bGFyO1xuXG52YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKTtcbndpbmRvdy5qUXVlcnkgPSBqUXVlcnk7XG53aW5kb3cuJCA9IGpRdWVyeTtcblxucmVxdWlyZShcImJvb3RzdHJhcFwiKTtcbnJlcXVpcmUoXCJhbmd1bGFyLWJvb3RzdHJhcFwiKTtcbnJlcXVpcmUoXCJhbmd1bGFyLXNlb1wiKTtcbnJlcXVpcmUoXCJhbmd1bGFyanMtZ2VvbG9jYXRpb25cIik7XG5yZXF1aXJlKFwiYW5ndWxhci11aS1yb3V0ZXJcIik7XG5yZXF1aXJlKFwiYW5ndWxhci1tb2Nrc1wiKTtcbnJlcXVpcmUoXCJhbmd1bGFyLXNpbXBsZS1sb2dnZXJcIik7XG5yZXF1aXJlKFwiYW5ndWxhci1nb29nbGUtbWFwc1wiKTtcbnJlcXVpcmUoXCJvY0xhenlMb2FkXCIpO1xuXG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgncmF0Q2F0Y2hyJywgW1xuICAgIFwibmdcIixcbiAgICAndWkucm91dGVyJyxcbiAgICAndWkuYm9vdHN0cmFwJyxcbiAgICAndWlHbWFwZ29vZ2xlLW1hcHMnLFxuICAgICdnZW9sb2NhdGlvbicsXG4gICAgJ29jLmxhenlMb2FkJ1xuXSk7XG5cbnJlcXVpcmUoXCIuLi9jb25maWcvZ21hcF9jb25maWcuanNcIik7XG5yZXF1aXJlKFwiLi4vY29uZmlnL3Vpcm91dGVyX2NvbmZpZy5qc1wiKTtcbnJlcXVpcmUoXCIuLi9jb25maWcvcnVuX2NvbmZpZy5qc1wiKTtcblxuXG5cblxuXG4vL2FwcC5kaXJlY3RpdmUoXCJwbGFjZUluZm9cIiwgcmVxdWlyZShcIi4uL2RpcmVjdGl2ZXMvcGxhY2VJbmZvLmpzXCIpKTtcblxuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJlaXMgb24gMTEvMjkvMTUuXG4gKi9cblxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhclwiKTtcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcInJhdENhdGNoclwiKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbih1aUdtYXBHb29nbGVNYXBBcGlQcm92aWRlcikge1xuICAgIHVpR21hcEdvb2dsZU1hcEFwaVByb3ZpZGVyLmNvbmZpZ3VyZSh7XG4vLyAgICAgICAga2V5OiAnQUl6YVN5Qi1ManAtMjBRY0JTdDk5Mm9mRkxJUXJBcF9LbzdGeEZJJyxcbiAgICAgICAgdjogJzMuMTcnLFxuICAgICAgICBsaWJyYXJpZXM6IFwicGxhY2VzXCJcbiAgICB9KTtcblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJlaXMgb24gMTIvNS8xNS5cbiAqL1xudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhclwiKTtcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcInJhdENhdGNoclwiKTtcblxuYXBwLnJ1bihmdW5jdGlvbigkcm9vdFNjb3BlKXtcblxuICAgICRyb290U2NvcGUuZm9ybWF0VGltZSA9IGZ1bmN0aW9uKHRpbWUpe1xuICAgICAgICByZXR1cm4gdGltZS5zcGxpdChcIlRcIikucG9wKCkuc2xpY2UoMCwgNSk7XG4gICAgfVxuXG59KSIsIi8qKlxuICogQ3JlYXRlZCBieSByZWlzIG9uIDExLzI5LzE1LlxuICovXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyXCIpO1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwicmF0Q2F0Y2hyXCIpO1xuXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIsICRsb2NhdGlvblByb3ZpZGVyKSB7XG5cbiAgICAvLyRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh0cnVlKTtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvXCIpO1xuXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICAgIHVybDogJy8nLFxuXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICBtYWluQ29udGVudDoge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdtYXBDb250cm9sbGVyJywgLy8gVGhpcyB2aWV3IHdpbGwgdXNlIG1hcENvbnRyb2xsZXIgbG9hZGVkIGJlbG93IGluIHRoZSByZXNvbHZlXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvcGFnZXMvaG9tZS5odG1sJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc29sdmU6IHtkZXBzOiBbXG4gICAgICAgICAgICBcIiRvY0xhenlMb2FkXCIsXG4gICAgICAgICAgICBmdW5jdGlvbigkb2NMYXp5TG9hZCl7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJG9jTGF6eUxvYWQubG9hZChbXG4gICAgICAgICAgICAgICAgICAgICcvZGlzdC9ob21lLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgJy9kaXN0L3N0eWxlX2hvbWUuanMnXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH1dfVxuICAgIH0pO1xuXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2RldGFpbHMnLCB7XG4gICAgICAgIHVybDogXCIvcGxhY2VzLzppZFwiLFxuXG4gICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICBtYWluQ29udGVudDoge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdkZXRhaWxzQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvcGFnZXMvZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc29sdmU6IHtkZXBzOiBbXG4gICAgICAgICAgICBcIiRvY0xhenlMb2FkXCIsXG4gICAgICAgICAgICBmdW5jdGlvbigkb2NMYXp5TG9hZCl7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJG9jTGF6eUxvYWQubG9hZChbXG4gICAgICAgICAgICAgICAgICAgICcvZGlzdC9kZXRhaWxzLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgJy9kaXN0L3N0eWxlX2RldGFpbHMuanMnXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH1dfVxuICAgIH0pO1xuXG5cbn0pOyJdfQ==
