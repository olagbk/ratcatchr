(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by reis on 11/29/15.
 */

var angular = require("angular");
var app = angular.module("ratCatchr");

app.controller("mapController", require("../controllers/map_controller.js"));
},{"../controllers/map_controller.js":2,"angular":"angular"}],2:[function(require,module,exports){
/**
 * Created by reis on 11/27/15.
 */
module.exports = [
    "$scope",
    "uiGmapGoogleMapApi",
    "geolocation",
    function($scope, uiGmapGoogleMapApi, geolocation) {

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.

    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 15};

    $scope.places = [
        {
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
        },
        {
            id: 2,
            coords: {
                latitude: 41.414849,
                longitude: 2.163214
            },
            info: {
                name: "Place 2",
                phone: "001",
                hours: {
                    Monday: "10.00 - 17.00",
                    Tuesday: "10.00 - 17.00",
                    Wednesday: "10.00 - 17.00",
                    Thursday: "10.00 - 17.00",
                    Friday: "10.00 - 17.00",
                    Saturday: "10.00 - 13.00",
                    Sunday: "closed"
                },
                address: "Calle de Tu Mamá 15 3o 2a \n 08024 Barcelona"
            },
            url: '/views/directives/placeInfo.html'

        }
    ];
    $scope.onClick = function(marker, eventName, model) {
        console.log("Clicked!");
        model.show = !model.show;
    };

    geolocation.getLocation()
        .then(function(data){
            $scope.map.center = {
                latitude: data.coords.latitude,
                longitude: data.coords.longitude
            };
        });
    var events = {
        places_changed: function (searchBox) {
            var places = searchBox.getPlaces();
            $scope.map.center = {
                latitude: places[0].geometry.location.lat(),
                longitude: places[0].geometry.location.lng()
            }
        }
    };
    $scope.searchbox = { template:'searchbox.tpl.html', events: events};


}];


},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9idW5kbGVzL2hvbWUuanMiLCJhcHAvc2NyaXB0cy9jb250cm9sbGVycy9tYXBfY29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSByZWlzIG9uIDExLzI5LzE1LlxuICovXG5cbnZhciBhbmd1bGFyID0gcmVxdWlyZShcImFuZ3VsYXJcIik7XG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoXCJyYXRDYXRjaHJcIik7XG5cbmFwcC5jb250cm9sbGVyKFwibWFwQ29udHJvbGxlclwiLCByZXF1aXJlKFwiLi4vY29udHJvbGxlcnMvbWFwX2NvbnRyb2xsZXIuanNcIikpOyIsIi8qKlxuICogQ3JlYXRlZCBieSByZWlzIG9uIDExLzI3LzE1LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgICBcIiRzY29wZVwiLFxuICAgIFwidWlHbWFwR29vZ2xlTWFwQXBpXCIsXG4gICAgXCJnZW9sb2NhdGlvblwiLFxuICAgIGZ1bmN0aW9uKCRzY29wZSwgdWlHbWFwR29vZ2xlTWFwQXBpLCBnZW9sb2NhdGlvbikge1xuXG4gICAgLy8gdWlHbWFwR29vZ2xlTWFwQXBpIGlzIGEgcHJvbWlzZS5cbiAgICAvLyBUaGUgXCJ0aGVuXCIgY2FsbGJhY2sgZnVuY3Rpb24gcHJvdmlkZXMgdGhlIGdvb2dsZS5tYXBzIG9iamVjdC5cblxuICAgICRzY29wZS5tYXAgPSB7IGNlbnRlcjogeyBsYXRpdHVkZTogNDUsIGxvbmdpdHVkZTogLTczIH0sIHpvb206IDE1fTtcblxuICAgICRzY29wZS5wbGFjZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgY29vcmRzOiB7XG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDQxLjQxNjEwNSxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDIuMTU5NTU2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2F6YWRvcmVzIGRlIHJhdGFzIHVuaWRvc1wiLFxuICAgICAgICAgICAgICAgIHBob25lOiBcIjkzMiAwMjEgNTQ3XCIsXG4gICAgICAgICAgICAgICAgaG91cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgTW9uZGF5OiBcIjEwLjAwIC0gMTcuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgVHVlc2RheTogXCIxMC4wMCAtIDE3LjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIFdlZG5lc2RheTogXCIxMC4wMCAtIDE3LjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIFRodXJzZGF5OiBcIjEwLjAwIC0gMTcuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgRnJpZGF5OiBcIjEwLjAwIC0gMTcuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgU2F0dXJkYXk6IFwiMTAuMDAgLSAxMy4wMFwiLFxuICAgICAgICAgICAgICAgICAgICBTdW5kYXk6IFwiY2xvc2VkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFkZHJlc3NMaW5lMTogXCJDYWxsZSBkZSBUdSBNYW3DoSAxNVwiLFxuICAgICAgICAgICAgICAgIGFkZHJlc3NMaW5lMjogXCIwODAyNCBCYXJjZWxvbmFcIlxuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiAnL3ZpZXdzL2RpcmVjdGl2ZXMvcGxhY2VJbmZvLmh0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgY29vcmRzOiB7XG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IDQxLjQxNDg0OSxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IDIuMTYzMjE0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5mbzoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiUGxhY2UgMlwiLFxuICAgICAgICAgICAgICAgIHBob25lOiBcIjAwMVwiLFxuICAgICAgICAgICAgICAgIGhvdXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIE1vbmRheTogXCIxMC4wMCAtIDE3LjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIFR1ZXNkYXk6IFwiMTAuMDAgLSAxNy4wMFwiLFxuICAgICAgICAgICAgICAgICAgICBXZWRuZXNkYXk6IFwiMTAuMDAgLSAxNy4wMFwiLFxuICAgICAgICAgICAgICAgICAgICBUaHVyc2RheTogXCIxMC4wMCAtIDE3LjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIEZyaWRheTogXCIxMC4wMCAtIDE3LjAwXCIsXG4gICAgICAgICAgICAgICAgICAgIFNhdHVyZGF5OiBcIjEwLjAwIC0gMTMuMDBcIixcbiAgICAgICAgICAgICAgICAgICAgU3VuZGF5OiBcImNsb3NlZFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBcIkNhbGxlIGRlIFR1IE1hbcOhIDE1IDNvIDJhIFxcbiAwODAyNCBCYXJjZWxvbmFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogJy92aWV3cy9kaXJlY3RpdmVzL3BsYWNlSW5mby5odG1sJ1xuXG4gICAgICAgIH1cbiAgICBdO1xuICAgICRzY29wZS5vbkNsaWNrID0gZnVuY3Rpb24obWFya2VyLCBldmVudE5hbWUsIG1vZGVsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpY2tlZCFcIik7XG4gICAgICAgIG1vZGVsLnNob3cgPSAhbW9kZWwuc2hvdztcbiAgICB9O1xuXG4gICAgZ2VvbG9jYXRpb24uZ2V0TG9jYXRpb24oKVxuICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICRzY29wZS5tYXAuY2VudGVyID0ge1xuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiBkYXRhLmNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IGRhdGEuY29vcmRzLmxvbmdpdHVkZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgdmFyIGV2ZW50cyA9IHtcbiAgICAgICAgcGxhY2VzX2NoYW5nZWQ6IGZ1bmN0aW9uIChzZWFyY2hCb3gpIHtcbiAgICAgICAgICAgIHZhciBwbGFjZXMgPSBzZWFyY2hCb3guZ2V0UGxhY2VzKCk7XG4gICAgICAgICAgICAkc2NvcGUubWFwLmNlbnRlciA9IHtcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogcGxhY2VzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpLFxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogcGxhY2VzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgICRzY29wZS5zZWFyY2hib3ggPSB7IHRlbXBsYXRlOidzZWFyY2hib3gudHBsLmh0bWwnLCBldmVudHM6IGV2ZW50c307XG5cblxufV07XG5cbiJdfQ==
