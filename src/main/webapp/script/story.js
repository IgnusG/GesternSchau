angular.module("stories", ['ui.bootstrap', 'videoContainer', 'ngAnimate'])

    .controller("StoriesController", function ($scope, $timeout) {
        // var stories = Get Stories
        $scope.stories = [
            {
                type: "story",
                title: "Wissenschaftler stellt der Welt Atomuhr vor",
                content: "Seit heute wird eine Sekunde immer und überall auf der Welt gleichlang sein. Der amerikanische Physiker Willard Frank Libby wird heute die weltweit erste Atomuhr vorstellen. Das revolutionäre an dieser Erfindung: Die neue Uhr misst die Zeit so genau, dass sie in 300.000 Jahren maximal eine Sekunde nachgehen soll. Und: Die Uhr definiert die Dauer von genau einer Sekunde. Zeit wird nun zu fast hundertprozent messbar sein. Bisher hat man versucht, durch die Messung der Erdrotation einen möglichst genauen Zeittakt zu definieren.Das Ergebnis einer Rotation der Erde um 360 Grad lässt sich in Zeit folgendermaßen ausdrücken : 23 Stunden, 56 Minuten und 4.09 Sekunden.Das man die Zeit der Erdrotation nicht genau messen kann, liegt daran, dass Drehung um die eigene Achse von verschiedenen Faktoren beeinflusst wird. Der Amerikaner Willard Frank Libby beschäftigt sich seit den 1930e r Jahren mit der Erforschung der Nuklearkraft.Während des Krieges forschte er an der Columbia Universität in New York und beteiligte sich an geheimen Regierungsprojekten. Die Zeit ist wohl das faszinierendste Konstrukt unserer heutigen Welt.Die neue Erfindung vom Physiker Willard Frank Libby wird den Menschen helfen die Zeit zu verstehen.",
                color: "white",
                image: "content/happySheldon.gif"
            },
            {
                type: "video",
                src: "https://www.youtube.com/embed/e-zlfsxVrto"
            },
            {
                type: "carousel",
                title: "Die 10 einflussreichsten Bücher der Menschheitsgeschichte",
                content: "Auf der “Canberra Book Week” wurden 200 Menschen befragt, welches Buch für sie den höchsten Einfluss auf die Menschheitsgeschichte hat. Das kam dabei heraus. \n\n Die “Canberra Book Week” zog in diesem Jahr mehr als 1500 Menschen ins Parlament von Canberra. Die Messe wird jedes Jahr in einer Kooperation mit dem australischen Institut und dem Westminster Bibliothekenverband aus London organisiert.",
                image: "content/buecher/header.jpg",
                color: "white",
                images: [
                    {
                        content: "Die Bibel \n\n Einfach ein Klassiker!",
                        image: "content/buecher/jesus.jpg"
                    },
                    {
                        content: "Shakespeare’s Werke",
                        image: "content/buecher/shakespeare.jpg"
                    },
                    {
                        content: "Homers Ilias \n\n Die Ilias ist eine der ältesten schriftlich fixierten Werke Europas, sie schildert einen Abschnitt des Trojanischen Krieges. Der Autor Homer gilt als frühester Dichter des Abendlandes. Von ihm sind weder Geburtsort noch das Datum seiner Geburt oder das seines Todes zweifelsfrei bekannt.",
                        image: "content/buecher/homer.jpg"
                    },
                    {
                        content: "Darwin - Die Entstehung der Arten \n\n Charles Darwin ist ein englischer Naturforscher, der die Evolutionsbiologie grundlegend geprägt hat. Darwin legte in diesem Werk zahlreiche Belege für seine Theorie vor, dass sich Tier- und Pflanzenarten durch natürliche Selektion im Laufe langer Zeiträume verändern und dass alle heute existierenden Lebewesen von gemeinsamen Vorfahren abstammen",
                        image: "content/buecher/darwin.jpg"
                    },
                    {
                        content: "Einstein Die Relativitätstheorie",
                        image: "content/buecher/einstein.jpg"
                    },
                    {
                        content: "Marx - Das Kapital",
                        image: "content/buecher/kapital.jpg"
                    },
                    {
                        content: "Rousseau - Vom Gesellschaftsvertrag",
                        image: "content/buecher/vertrag.jpg"
                    },
                    {
                        content: "Hitler (Mein Kampf)",
                        image: "content/buecher/hitler.jpg"
                    }
                ]
            },
            {
                type: "story",
                title: "Das ist mein Geburtsort",
                content: "Nachdem Thomas Foster seine hochschwangere Frau Ada mit seinem Motorrad ins King George Krankenhaus in Sydney fuhr, erlebte er eine Überraschung. Der kleine Andrew wurde schon während der Fahrt im Nebenwagen des Motorrads geboren. Als Ada’s Fruchtblase platzte, fuhr Thomas Foster mit der zugelassenen Höchstgeschwindigkeit für Motorräder - 80 km/h - durch den dichten Feierabendverkehr. Als er am Krankenhaus ankam, stürzte er in die Notaufnahme, um Hilfe zu holen. Als er mit den Ärzten zurückkam war sein Sohn schon längst geboren.",
                color: "white",
                image: "content/baby.jpg"
            },
            {
                type: "story",
                title: "Geburtstag",
                content: "Marius Müller-Westernhagen in Düsseldorf",
                image: "content/marius.jpg",
                color: "white"
            },
            {
                type: "gallery",
                title: "In Teilen Deutschlands brachte Tief Fridolin starke Schneefälle. Besonders die Gebiete am Rande der Nordsee müssen sich auf russische Kälte mit tiefen Schnee vorbereiten.",
                coverImage: "content/wetterKarte.jpg",
                coverColor: "white",
                image: "content/wetterFoto.jpg",
                color: "white"
            },
            {
                type: "carousel",
                title: "Ein Stiefel voller Fakten",
                content: "Jahr für Jahr feiern wir am 6. Dezember Nikolaus. Die Kinder stellen ihre geputzten Stiefel vor die Haustür und hoffen auf viele Leckereien. Doch wer ist überhaupt dieser Nikolaus, wie kann ich ihn kontaktieren und was hat er eigentlich mit der Türkei zu tun?",
                image: "content/nikolaus/header.jpg",
                color: "white",
                images: [
                    {
                        content: "Den Nikolaus gab es wirklich! In seiner menschlichen Gestalt hieß der Heilige Nikolaus, Nikolaus von Myra. Er ist nach seinem Geburtsort dem türkischen Ort Myra benannt, und lebte von etwa von 270 bis 350 nach Christus.",
                        image: "content/nikolaus/nikolaus.jpg"
                    },
                    {
                        content: 'Der Stiefel wurde erst nach und nach zur Tradition. Angefangen habe alles mit dem sogenannten "Wurf-Brauchtum". Der Legende nach habe der Nikolaus, bevor er zum Bischof wurde, drei arme Mädchen vor einem Leben auf der Straße bewahrt, indem er ihnen Geschenke zuwarf. Aus dem Werfen wurde Tradition, dass Schuhe, meist Holzschuhe, in der Nacht vor dem 6. vor die Tür gestellt und befüllt wurden',
                        image: "content/nikolaus/nikolausstiefel.jpg"
                    },
                    {
                        content: 'Kinder, die nicht brav waren, bekamen früher eine Rute vom Nikolaus gebracht – anstatt einen gefüllten Stiefel. Eigentlich war die Nikolausrute eine Segensrute. Sie symbolisierte die Segenskraft der  immergrünen Zweige und wer mit ihr sanft auf den Rücken "geschlagen" wurde, der bekam damit einen besonderen Segen zugeteilt.',
                        image: "content/nikolaus/rute.jpg"
                    },
                    {
                        content: 'Der Mythos, dass der Brausehersteller Coca-Cola den Weihnachtsmann erfunden hat, hält sich rund um den Globus hartnäckig. Tatsächlich hat Coca-Cola den Nikolaus oder Weihnachtsmann nicht erfunden, wohl aber die moderne Vorstellung dieser Kunstfigur nachhaltig geprägt. Bereits eine Darstellung des Nikolaus in dem bekannten Kinderbuch „Struwwelpeter“ von Heinrich Hoffmann aus dem Jahre 1844 sah dem heutigen Weihnachtsmann sehr ähnlich.',
                        image: "content/nikolaus/cocacola.jpg"
                    },
                    {
                        content: 'Im südlichen Teil Deutschlands und auch in einigen anderen Ländern, wie der Schweiz und Österreich, finden jedes Jahr vor dem Nikolaustag die berühmten Krampusläufe statt. Ein Krampus ist eine ziemlich fiese Gestalt, die böse Kinder bestraft. Markenzeichen eines Krampus ist eine gruselige Holzmaske, die aussieht wie eine teuflische Fratze.',
                        image: "content/nikolaus/krampus.jpg"
                    }
                ]
            },
            {
                type: "video",
                src: "https://www.youtube.com/embed/6W3zCUT7ZX8"
            },
            {
                type: "dummy",
                image: "content/dummies/1.jpg"
            },
            {
                type: "dummy",
                image: "content/dummies/2.jpg"
            },
            {
                type: "dummy",
                image: "content/dummies/3.jpg"
            },
            {
                type: "dummy",
                image: "content/dummies/r4.jpg"
            },
            {
                type: "dummy",
                image: "content/dummies/r5.jpg"
            },
            {
                type: "dummy",
                image: "content/dummies/r6.jpg"
            }
        ];

        $scope.hidden = true;
        $scope.show = false;

        $scope.showPopup = function () {
            $scope.hidden = false;
            $timeout(function () {
                $scope.show = true;
            })
        };

        $scope.hidePopup = function () {
            $scope.show = false;
            $timeout(function () {
                $scope.hidden = true;
            }, 600)
        }
    })
    .directive("story", function () {
        return {
            restrict: "E",
            templateUrl: "templates/story.html",
            controller: "StoriesController"
        }
    });
