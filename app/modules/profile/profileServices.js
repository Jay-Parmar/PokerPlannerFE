app.service('profileService', [ 'Restangular','APP_CONSTANTS', function (Restangular, APP_CONSTANTS,$cookies) {
    
    // Restangular.setDefaultHeaders({
    //     Authorization: `Token token=${$cookies.get('token')};`,
    // })

    // this.save = function (user) {
    //     return Restangular.all(APP_CONSTANTS.API_ENDPOINT.PROFILE).put(user);
    // }

    // this.getUserDetails= function(){
    //     return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GET_USER_DETAILS).get();
    // }

    // this.getUser = function(){
    //     return Restangular.one(APP_CONSTANTS.API_ENDPOINT.PROFILE).get();
    // }

    // this.getGroups=function(){
    //     return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GROUPS).get();
    // }

    // this.getPokerboards = function(){
    //     return Restangular.all(APP_CONSTANTS.API_ENDPOINT.POKERBOARDS).get();
    // }

}]);