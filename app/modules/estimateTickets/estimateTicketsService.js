app.service('estimateTicketsService', [
    'Restangular', 'APP_CONSTANTS', '$cookies',
    function(Restangular, APP_CONSTANTS, $cookies){

        Restangular.setDefaultHeaders({
            Authorization: `token ${$cookies.get('token')}`
        })
        
        this.getTickets = function(){
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.ESTIMATE_TICKETS).get();
        };
    }
]);
