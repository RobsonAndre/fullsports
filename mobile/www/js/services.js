'use strict';

angular.module('services',[])
       .factory('RegisterService', function() {
            var RegisterService = {

            };
            return RegisterService;
       })

       .factory('TeamsService', function() {
            var TeamsService = {

            };
            return TeamsService;
       })

       .factory('RoomService', function() {
            var RoomService = {
                rooms : [
                    {
                        id : 1,
                        sport : 'FUTEBOL',
                        players : 24,
                        private : true,
                        status: 'Open'
                    },
                    {
                        id : 2,
                        sport : 'BASQUETE',
                        players : 10,
                        private : false,
                        status: 'Closed'
                    },
                    {
                        id : 3,
                        sport : 'VOLEI',
                        players : 12,
                        private : false,
                        status: 'Open'
                    },
                    {
                        id : 4,
                        sport : 'SINUCA',
                        players : 4,
                        private : true,
                        status: 'Open'
                    }
                ],
                sports : ['FUTEBOL','BASQUETE','VOLEI','SINUCA']
            };
            return RoomService;
       })
       ;
