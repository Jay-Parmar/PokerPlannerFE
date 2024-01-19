app.service('emailverificationservices', ['Restangular', 'APP_CONSTANTS', 
    function (Restangular, APP_CONSTANTS){
        this.activateAccount = function(uid, data){
            return Restangular.one(
                APP_CONSTANTS.API_ENDPOINT.ACCOUNT_ACTIVATE , uid
            ).customPUT(data);
        }
    }
]); 
