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

