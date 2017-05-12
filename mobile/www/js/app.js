angular.module('starter', ['ionic','services','controllers','ionic-material','ionMdInput'])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.activity', {
        url: '/activity',
        views: {
            'menuContent': {
                templateUrl: 'templates/activity.html',
                controller: 'ActivityCtrl'
            },
            'fabContent': {
                template: '<button id="fab-activity" class="button button-fab button-fab-top-right expanded button-energized-900 flap"><i class="icon ion-paper-airplane"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-activity').classList.toggle('on');
                    }, 200);
                }
            }
        }
    })

    .state('app.friends', {
        url: '/friends',
        views: {
            'menuContent': {
                templateUrl: 'templates/friends.html',
                controller: 'FriendsCtrl'
            },
            'fabContent': {
                template: '<button id="fab-friends" class="button button-fab button-fab-top-left expanded button-energized-900 spin"><i class="icon ion-chatbubbles"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-friends').classList.toggle('on');
                    }, 900);
                }
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                template: '<button id="fab-gallery" class="button button-fab button-fab-top-right expanded button-energized-900 drop"><i class="icon ion-heart"></i></button>',
                controller: function ($timeout) {
                    $timeout(function () {
                        document.getElementById('fab-gallery').classList.toggle('on');
                    }, 600);
                }
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })

    .state('app.register', {
       url : '/register',
       views : {
            'menuContent': {
                templateUrl : 'templates/register.html',
                controller :  'RegisterCtrl'
            }
       }
    })

    .state('app.teams', {
        url : '/:user/teams',
        views : {
            'menuContent' : {
               templateUrl : 'templates/teams/teams.html',
               controller : 'TeamsCtrl'
            }
        }
    })

    .state('app.createTeam', {
        url : '/:user/teams/create',
        views : {
            'menuContent' : {
                templateUrl : 'templates/teams/newTeam.html',
                controller : 'TeamsCtrl'
            }
        }
    })

    .state('app.viewTeam', {
        url : '/:user/teams/:team',
        views : {
            'menuContent' : {
                templateUrl : 'templates/teams/team.html',
                controller : 'TeamsCtrl'
            }
        }
    })

    .state('app.rooms', {
        url : '/:user/rooms',
        views : {
            'menuContent' : {
                templateUrl : 'templates/room/rooms.html',
                controller : 'RoomCtrl'
            }
        }
    })

    .state('app.joinRoom', {
        url : '/:user/rooms/:room',
        views : {
            'menuContent' : {
                templateUrl : 'templates/room/room.html',
                controller : 'RoomCtrl'
            }
        }
    })

    .state('app.createRoom', {
        url : '/:user/rooms/create',
        views : {
            'menuContent' : {
                templateUrl : 'templates/room/createRoom.html',
                controller : 'RoomCtrl'
            }
        }
    })


    ;

    $urlRouterProvider.otherwise('/app/login');
});
