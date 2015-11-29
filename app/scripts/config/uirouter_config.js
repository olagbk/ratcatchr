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