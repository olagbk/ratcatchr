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