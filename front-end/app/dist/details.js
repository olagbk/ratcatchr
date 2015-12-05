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
    "$rootScope",
    "$scope",
    '$http',
    '$stateParams',
    "uiGmapGoogleMapApi",
    function($rootScope, $scope, $http, $stateParams, uiGmapGoogleMapApi) {

        $http.get('/api/places/' + $stateParams.id + '.json')
            .success(function(data){
                var openOn = {};

                angular.forEach(data.open_times, function(day, index) {

                   openOn[day.weekday] = {

                       from: $rootScope.formatTime(day.open_time),
                       to: $rootScope.formatTime(day.close_time)
                   }
                });
                $scope.place = {

                    id: data.id,
                    coords: {
                        latitude: data.latitude,
                        longitude: data.longitude
                    },
                    info: {
                        name: data.name,
                        phone: data.phone,
                        addressLine1: data.address_line_1,
                        addressLine2: data.address_line_2,
                        hours: {
                            Monday: (openOn.Monday)? openOn.Monday.from + " - " + openOn.Monday.to : "closed",
                            Tuesday: (openOn.Tuesday)? openOn.Tuesday.from + " - " + openOn.Tuesday.to : "closed",
                            Wednesday: (openOn.Wednesday)? openOn.Wednesday.from + " - " + openOn.Wednesday.to : "closed",
                            Thursday: (openOn.Thursday)? openOn.Thursday.from + " - " + openOn.Thursday.to : "closed",
                            Friday: (openOn.Friday)? openOn.Friday.from + " - " + openOn.Friday.to : "closed",
                            Saturday: (openOn.Saturday)? openOn.Saturday.from + " - " + openOn.Saturday.to : "closed",
                            Sunday: (openOn.Sunday)? openOn.Sunday.from + " - " + openOn.Sunday.to : "closed"
                        }
                    }
                };
                $scope.map = { center: { latitude: $scope.place.coords.latitude, longitude: $scope.place.coords.longitude }, zoom: 15};
            });



    }];
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9idW5kbGVzL2RldGFpbHMuanMiLCJhcHAvc2NyaXB0cy9jb250cm9sbGVycy9kZXRhaWxzX2NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSByZWlzIG9uIDExLzI5LzE1LlxuICovXG52YXIgYW5ndWxhciA9IHJlcXVpcmUoXCJhbmd1bGFyXCIpO1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKFwicmF0Q2F0Y2hyXCIpO1xuXG5hcHAuY29udHJvbGxlcihcImRldGFpbHNDb250cm9sbGVyXCIsIHJlcXVpcmUoXCIuLi9jb250cm9sbGVycy9kZXRhaWxzX2NvbnRyb2xsZXIuanNcIikpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHJlaXMgb24gMTEvMjkvMTUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gW1xuICAgIFwiJHJvb3RTY29wZVwiLFxuICAgIFwiJHNjb3BlXCIsXG4gICAgJyRodHRwJyxcbiAgICAnJHN0YXRlUGFyYW1zJyxcbiAgICBcInVpR21hcEdvb2dsZU1hcEFwaVwiLFxuICAgIGZ1bmN0aW9uKCRyb290U2NvcGUsICRzY29wZSwgJGh0dHAsICRzdGF0ZVBhcmFtcywgdWlHbWFwR29vZ2xlTWFwQXBpKSB7XG5cbiAgICAgICAgJGh0dHAuZ2V0KCcvYXBpL3BsYWNlcy8nICsgJHN0YXRlUGFyYW1zLmlkICsgJy5qc29uJylcbiAgICAgICAgICAgIC5zdWNjZXNzKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAgICAgICAgIHZhciBvcGVuT24gPSB7fTtcblxuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChkYXRhLm9wZW5fdGltZXMsIGZ1bmN0aW9uKGRheSwgaW5kZXgpIHtcblxuICAgICAgICAgICAgICAgICAgIG9wZW5PbltkYXkud2Vla2RheV0gPSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJHJvb3RTY29wZS5mb3JtYXRUaW1lKGRheS5vcGVuX3RpbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICB0bzogJHJvb3RTY29wZS5mb3JtYXRUaW1lKGRheS5jbG9zZV90aW1lKVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkc2NvcGUucGxhY2UgPSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIGNvb3Jkczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGRhdGEubGF0aXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGRhdGEubG9uZ2l0dWRlXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob25lOiBkYXRhLnBob25lLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0xpbmUxOiBkYXRhLmFkZHJlc3NfbGluZV8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzc0xpbmUyOiBkYXRhLmFkZHJlc3NfbGluZV8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb25kYXk6IChvcGVuT24uTW9uZGF5KT8gb3Blbk9uLk1vbmRheS5mcm9tICsgXCIgLSBcIiArIG9wZW5Pbi5Nb25kYXkudG8gOiBcImNsb3NlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFR1ZXNkYXk6IChvcGVuT24uVHVlc2RheSk/IG9wZW5Pbi5UdWVzZGF5LmZyb20gKyBcIiAtIFwiICsgb3Blbk9uLlR1ZXNkYXkudG8gOiBcImNsb3NlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlZG5lc2RheTogKG9wZW5Pbi5XZWRuZXNkYXkpPyBvcGVuT24uV2VkbmVzZGF5LmZyb20gKyBcIiAtIFwiICsgb3Blbk9uLldlZG5lc2RheS50byA6IFwiY2xvc2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGh1cnNkYXk6IChvcGVuT24uVGh1cnNkYXkpPyBvcGVuT24uVGh1cnNkYXkuZnJvbSArIFwiIC0gXCIgKyBvcGVuT24uVGh1cnNkYXkudG8gOiBcImNsb3NlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZyaWRheTogKG9wZW5Pbi5GcmlkYXkpPyBvcGVuT24uRnJpZGF5LmZyb20gKyBcIiAtIFwiICsgb3Blbk9uLkZyaWRheS50byA6IFwiY2xvc2VkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F0dXJkYXk6IChvcGVuT24uU2F0dXJkYXkpPyBvcGVuT24uU2F0dXJkYXkuZnJvbSArIFwiIC0gXCIgKyBvcGVuT24uU2F0dXJkYXkudG8gOiBcImNsb3NlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1bmRheTogKG9wZW5Pbi5TdW5kYXkpPyBvcGVuT24uU3VuZGF5LmZyb20gKyBcIiAtIFwiICsgb3Blbk9uLlN1bmRheS50byA6IFwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1hcCA9IHsgY2VudGVyOiB7IGxhdGl0dWRlOiAkc2NvcGUucGxhY2UuY29vcmRzLmxhdGl0dWRlLCBsb25naXR1ZGU6ICRzY29wZS5wbGFjZS5jb29yZHMubG9uZ2l0dWRlIH0sIHpvb206IDE1fTtcbiAgICAgICAgICAgIH0pO1xuXG5cblxuICAgIH1dOyJdfQ==
