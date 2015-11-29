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





//app.directive("placeInfo", require("../directives/placeInfo.js"));


},{"../config/gmap_config.js":2,"../config/uirouter_config.js":3,"angular":"angular","angular-bootstrap":"angular-bootstrap","angular-google-maps":"angular-google-maps","angular-mocks":"angular-mocks","angular-seo":"angular-seo","angular-simple-logger":"angular-simple-logger","angular-ui-router":"angular-ui-router","angularjs-geolocation":"angularjs-geolocation","bootstrap":"bootstrap","jquery":"jquery","lodash":"lodash","ocLazyLoad":"ocLazyLoad"}],2:[function(require,module,exports){
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
        url: '/details',

        views: {
            mainContent: {
                controller: 'detailsController', // This view will use mapController loaded below in the resolve
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9idW5kbGVzL2FwcC5qcyIsImFwcC9zY3JpcHRzL2NvbmZpZy9nbWFwX2NvbmZpZy5qcyIsImFwcC9zY3JpcHRzL2NvbmZpZy91aXJvdXRlcl9jb25maWcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5fID0gcmVxdWlyZShcImxvZGFzaFwiKTtcblxudmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG53aW5kb3cuYW5ndWxhciA9IGFuZ3VsYXI7XG5cbnZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpO1xud2luZG93LmpRdWVyeSA9IGpRdWVyeTtcbndpbmRvdy4kID0galF1ZXJ5O1xuXG5yZXF1aXJlKFwiYm9vdHN0cmFwXCIpO1xucmVxdWlyZShcImFuZ3VsYXItYm9vdHN0cmFwXCIpO1xucmVxdWlyZShcImFuZ3VsYXItc2VvXCIpO1xucmVxdWlyZShcImFuZ3VsYXJqcy1nZW9sb2NhdGlvblwiKTtcbnJlcXVpcmUoXCJhbmd1bGFyLXVpLXJvdXRlclwiKTtcbnJlcXVpcmUoXCJhbmd1bGFyLW1vY2tzXCIpO1xucmVxdWlyZShcImFuZ3VsYXItc2ltcGxlLWxvZ2dlclwiKTtcbnJlcXVpcmUoXCJhbmd1bGFyLWdvb2dsZS1tYXBzXCIpO1xucmVxdWlyZShcIm9jTGF6eUxvYWRcIik7XG5cblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdyYXRDYXRjaHInLCBbXG4gICAgXCJuZ1wiLFxuICAgICd1aS5yb3V0ZXInLFxuICAgICd1aS5ib290c3RyYXAnLFxuICAgICd1aUdtYXBnb29nbGUtbWFwcycsXG4gICAgJ2dlb2xvY2F0aW9uJyxcbiAgICAnb2MubGF6eUxvYWQnXG5dKTtcblxucmVxdWlyZShcIi4uL2NvbmZpZy9nbWFwX2NvbmZpZy5qc1wiKTtcbnJlcXVpcmUoXCIuLi9jb25maWcvdWlyb3V0ZXJfY29uZmlnLmpzXCIpO1xuXG5cblxuXG5cbi8vYXBwLmRpcmVjdGl2ZShcInBsYWNlSW5mb1wiLCByZXF1aXJlKFwiLi4vZGlyZWN0aXZlcy9wbGFjZUluZm8uanNcIikpO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmVpcyBvbiAxMS8yOS8xNS5cbiAqL1xuXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyXCIpO1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwicmF0Q2F0Y2hyXCIpO1xuXG5hcHAuY29uZmlnKGZ1bmN0aW9uKHVpR21hcEdvb2dsZU1hcEFwaVByb3ZpZGVyKSB7XG4gICAgdWlHbWFwR29vZ2xlTWFwQXBpUHJvdmlkZXIuY29uZmlndXJlKHtcbi8vICAgICAgICBrZXk6ICdBSXphU3lCLUxqcC0yMFFjQlN0OTkyb2ZGTElRckFwX0tvN0Z4RkknLFxuICAgICAgICB2OiAnMy4xNycsXG4gICAgICAgIGxpYnJhcmllczogXCJwbGFjZXNcIlxuICAgIH0pO1xuXG59KTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgcmVpcyBvbiAxMS8yOS8xNS5cbiAqL1xudmFyIGFuZ3VsYXIgPSByZXF1aXJlKFwiYW5ndWxhclwiKTtcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShcInJhdENhdGNoclwiKTtcblxuYXBwLmNvbmZpZyhmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyLCAkbG9jYXRpb25Qcm92aWRlcikge1xuXG4gICAgLy8kbG9jYXRpb25Qcm92aWRlci5odG1sNU1vZGUodHJ1ZSk7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL1wiKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdob21lJywge1xuICAgICAgICB1cmw6ICcvJyxcblxuICAgICAgICB2aWV3czoge1xuICAgICAgICAgICAgbWFpbkNvbnRlbnQ6IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyOiAnbWFwQ29udHJvbGxlcicsIC8vIFRoaXMgdmlldyB3aWxsIHVzZSBtYXBDb250cm9sbGVyIGxvYWRlZCBiZWxvdyBpbiB0aGUgcmVzb2x2ZVxuICAgICAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnL3ZpZXdzL3BhZ2VzL2hvbWUuaHRtbCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICByZXNvbHZlOiB7ZGVwczogW1xuICAgICAgICAgICAgXCIkb2NMYXp5TG9hZFwiLFxuICAgICAgICAgICAgZnVuY3Rpb24oJG9jTGF6eUxvYWQpe1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuICRvY0xhenlMb2FkLmxvYWQoW1xuICAgICAgICAgICAgICAgICAgICAnL2Rpc3QvaG9tZS5qcycsXG4gICAgICAgICAgICAgICAgICAgICcvZGlzdC9zdHlsZV9ob21lLmpzJ1xuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9XX1cbiAgICB9KTtcblxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdkZXRhaWxzJywge1xuICAgICAgICB1cmw6ICcvZGV0YWlscycsXG5cbiAgICAgICAgdmlld3M6IHtcbiAgICAgICAgICAgIG1haW5Db250ZW50OiB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ2RldGFpbHNDb250cm9sbGVyJywgLy8gVGhpcyB2aWV3IHdpbGwgdXNlIG1hcENvbnRyb2xsZXIgbG9hZGVkIGJlbG93IGluIHRoZSByZXNvbHZlXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICcvdmlld3MvcGFnZXMvZGV0YWlscy5odG1sJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc29sdmU6IHtkZXBzOiBbXG4gICAgICAgICAgICBcIiRvY0xhenlMb2FkXCIsXG4gICAgICAgICAgICBmdW5jdGlvbigkb2NMYXp5TG9hZCl7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJG9jTGF6eUxvYWQubG9hZChbXG4gICAgICAgICAgICAgICAgICAgICcvZGlzdC9kZXRhaWxzLmpzJyxcbiAgICAgICAgICAgICAgICAgICAgJy9kaXN0L3N0eWxlX2RldGFpbHMuanMnXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH1dfVxuICAgIH0pO1xuXG5cbn0pOyJdfQ==
