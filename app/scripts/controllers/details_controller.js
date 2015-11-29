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