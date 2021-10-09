app.service('signUpService', ['APP_CONSTANTS', 'Restangular', function (APP_CONSTANTS, Restangular) {
    this.signup = function (user) {
        return Restangular.all(APP_CONSTANTS.API_ENDPOINT.SIGNUP).post(user);
    }
}])
