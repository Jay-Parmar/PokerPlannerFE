app.service('pokerboardService', [
    'Restangular', 'APP_CONSTANTS',
    function(Restangular, APP_CONSTANTS){
        
        this.createBoard = function(data){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.POKERBOARD).post(data);
        };

        this.getPokerboards = function(){
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.POKERBOARD).get();
        };
        
        this.getPokerboardDetails = pokerboardId => {
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.POKERBOARD, pokerboardId).get();
        };

        this.orderTickets = (tickets, pokerboardId) => {
            return Restangular.one(`pokerboards/${pokerboardId}/order-tickets`).put(tickets);
        };

        this.inviteUser = user => {
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.MEMBERS).post(user)
        }
    }
]);
