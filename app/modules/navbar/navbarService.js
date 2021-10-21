app.service('navbarService', ['APP_CONSTANTS', 'Restangular', '$cookies',
    function (APP_CONSTANTS, Restangular, $cookies){

        this.logout = function(){
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.LOGOUT).get();
        }
    }
]);
