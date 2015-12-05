angular.module("stories", [])

.controller("StoriesController",function($scope) {
    // var stories = Get Stories
    $scope.stories = [
        {
            title: "1946 - Wissenschaft Vorstellung der Atomuhr",
            content: "Erst seit dem 6. Dezember 1946 ist eine Sekunde immer und überall auf der Welt gleichlang. Damals hat der amerikanische Physiker Willard Frank Libby die erste Atomuhr vorgestellt. Das revolutionäre an dieser Erfindung: Die Uhr misst die Zeit so genau, dass sie in 300.000 Jahren maximal eine Sekunde nachgehen soll. Und: die Uhr definiert die Dauer von einer Sekunde.",
            image: "images/happySheldon.gif"
        },
        {
            title: "Du bist Nikolaus ey!!!einself!!11"
        },
        {
            title: "Geburtstag",
            content: "Marius Müller-Westernhagen in Düsseldorf"
        }
    ]
});
