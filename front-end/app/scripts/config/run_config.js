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