app.service('verifyMessageServices', ['Restangular', 'APP_CONSTANTS', 
    function (Restangular, APP_CONSTANTS){
        this.resendEmail = function(user){
            return Restangular.all(
                APP_CONSTANTS.API_ENDPOINT.VERIFY 
            ).post(user);
        }
    }
]); 
