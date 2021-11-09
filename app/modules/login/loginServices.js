app.service('loginService', ['APP_CONSTANTS', 'Restangular', function (APP_CONSTANTS, Restangular) {
    
    
    this.login = function (user) {
        Restangular.setDefaultHeaders({})
        return Restangular.all(APP_CONSTANTS.API_ENDPOINT.LOGIN).post({user:user});
    }
}]);