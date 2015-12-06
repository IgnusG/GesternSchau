angular.module("videoContainer", ["ngSanitize"])
    .controller("videoController", function($sce, $scope) {
        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src)
        };
    })
.directive("videoContainer", function () {
    return {
        restrict: "E",
        controller: "videoController",
        template: "<iframe ng-src='{{trustSrc(story.src)}}' frameborder='0' allowfullscreen='true' width='100%' height='auto'></iframe>"
    }
});
