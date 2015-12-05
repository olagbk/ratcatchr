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