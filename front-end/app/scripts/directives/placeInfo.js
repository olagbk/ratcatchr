/**
 * Created by reis on 11/27/15.
 */
module.exports = [
    function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },

        templateUrl: '/views/directives/placeInfo.html'
    };
}];