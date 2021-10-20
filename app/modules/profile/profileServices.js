app.service('profileService', ['Restangular', 'APP_CONSTANTS', '$cookies', '$rootScope',
    function (Restangular, APP_CONSTANTS, $cookies, $rootScope) {

        Restangular.setDefaultHeaders({
            Authorization: `Token ${$cookies.get('token')}`,
        })

        this.save = function (user) {
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.GET_USER_DETAILS).patch(user);
        }

        this.getUserDetails = function(){
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.GET_USER_DETAILS).get();
        }

        this.changePassword = function(details){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.CHANGE_PASSWORD).customPUT(details);
        }

    }]);
