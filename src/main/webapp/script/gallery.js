angular.module("gallery", [])

    .directive("dirGallery", function () {
        return {
            restrict: "E",
            template: '<div class="story" ng-style="{\'background\': \'url({{story.coverImage}}) center center no-repeat\'}" ng-class="{\'showContent\': showImage}"><img ng-src="{{story.image}}" alt="Image" ng-mouseover="showContent = true" ng-mouseleave="showContent = false"><div class="story-content text-overlay"><h3>{{story.title}}</h3></div></div>'
        }
    });
