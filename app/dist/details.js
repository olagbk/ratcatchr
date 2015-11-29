(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by reis on 11/29/15.
 */
var angular = require("angular");
var app = angular.module("ratCatchr");

app.controller("detailsController", require("../controllers/details_controller.js"));

},{"../controllers/details_controller.js":2,"angular":"angular"}],2:[function(require,module,exports){
/**
 * Created by reis on 11/29/15.
 */
module.exports = [
    "$scope",
    "uiGmapGoogleMapApi",
    function($scope, uiGmapGoogleMapApi) {

        $scope.place = {

                id: 1,
                coords: {
                    latitude: 41.416105,
                    longitude: 2.159556
                },
                info: {
                    name: "Cazadores de ratas unidos",
                    phone: "932 021 547",
                    hours: {
                        Monday: "10.00 - 17.00",
                        Tuesday: "10.00 - 17.00",
                        Wednesday: "10.00 - 17.00",
                        Thursday: "10.00 - 17.00",
                        Friday: "10.00 - 17.00",
                        Saturday: "10.00 - 13.00",
                        Sunday: "closed"
                    },
                    addressLine1: "Calle de Tu Mamá 15",
                    addressLine2: "08024 Barcelona"

                },
                url: '/views/directives/placeInfo.html'
            };

        $scope.onClick = function(marker, eventName, model) {
            model.show = !model.show;
        };

        $scope.map = { center: { latitude: $scope.place.coords.latitude, longitude: $scope.place.coords.longitude }, zoom: 15};

    }];
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9idW5kbGVzL2RldGFpbHMuanMiLCJhcHAvc2NyaXB0cy9jb250cm9sbGVycy9kZXRhaWxzX2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJlaXMgb24gMTEvMjkvMTUuXG4gKi9cbnZhciBhbmd1bGFyID0gcmVxdWlyZShcImFuZ3VsYXJcIik7XG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoXCJyYXRDYXRjaHJcIik7XG5cbmFwcC5jb250cm9sbGVyKFwiZGV0YWlsc0NvbnRyb2xsZXJcIiwgcmVxdWlyZShcIi4uL2NvbnRyb2xsZXJzL2RldGFpbHNfY29udHJvbGxlci5qc1wiKSk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgcmVpcyBvbiAxMS8yOS8xNS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBbXG4gICAgXCIkc2NvcGVcIixcbiAgICBcInVpR21hcEdvb2dsZU1hcEFwaVwiLFxuICAgIGZ1bmN0aW9uKCRzY29wZSwgdWlHbWFwR29vZ2xlTWFwQXBpKSB7XG5cbiAgICAgICAgJHNjb3BlLnBsYWNlID0ge1xuXG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgY29vcmRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhdGl0dWRlOiA0MS40MTYxMDUsXG4gICAgICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogMi4xNTk1NTZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDYXphZG9yZXMgZGUgcmF0YXMgdW5pZG9zXCIsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiBcIjkzMiAwMjEgNTQ3XCIsXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBNb25kYXk6IFwiMTAuMDAgLSAxNy4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgVHVlc2RheTogXCIxMC4wMCAtIDE3LjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBXZWRuZXNkYXk6IFwiMTAuMDAgLSAxNy4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgVGh1cnNkYXk6IFwiMTAuMDAgLSAxNy4wMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgRnJpZGF5OiBcIjEwLjAwIC0gMTcuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdHVyZGF5OiBcIjEwLjAwIC0gMTMuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFN1bmRheTogXCJjbG9zZWRcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzTGluZTE6IFwiQ2FsbGUgZGUgVHUgTWFtw6EgMTVcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0xpbmUyOiBcIjA4MDI0IEJhcmNlbG9uYVwiXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVybDogJy92aWV3cy9kaXJlY3RpdmVzL3BsYWNlSW5mby5odG1sJ1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAkc2NvcGUub25DbGljayA9IGZ1bmN0aW9uKG1hcmtlciwgZXZlbnROYW1lLCBtb2RlbCkge1xuICAgICAgICAgICAgbW9kZWwuc2hvdyA9ICFtb2RlbC5zaG93O1xuICAgICAgICB9O1xuXG4gICAgICAgICRzY29wZS5tYXAgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogJHNjb3BlLnBsYWNlLmNvb3Jkcy5sYXRpdHVkZSwgbG9uZ2l0dWRlOiAkc2NvcGUucGxhY2UuY29vcmRzLmxvbmdpdHVkZSB9LCB6b29tOiAxNX07XG5cbiAgICB9XTsiXX0=
