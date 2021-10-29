app.service('pokerboardService', [
    'Restangular', 'APP_CONSTANTS', '$cookies',
    function(Restangular, APP_CONSTANTS, $cookies){

        Restangular.setDefaultHeaders({
            Authorization: `token ${$cookies.get('token')}`
        })
        
        this.createBoard = function(data){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.POKERBOARD).post(data);
        };

        this.getPokerboards = function(){
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.POKERBOARD).get();
        };
        
        this.getPokerboardDetails = pokerboardId => {
            let url = APP_CONSTANTS.API_ENDPOINT.POKERBOARD + pokerboardId + '/'
            return Restangular.one(url).get();
        };

        this.getJiraDetails = pokerboardId => {
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.JIRA_CREDENTIALS).get();
        };

        this.orderTickets = (tickets, pokerboardId) => {
            return Restangular.one(`pokerboards/${pokerboardId}/order-tickets`).put(tickets);
        };

        this.inviteUser = function(user,pokerboardId){
            url = pokerboardId+"/invite/"
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.POKERBOARD+url).post(user)
        }

        this.saveCredentials = function(details){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.JIRA_CREDENTIALS).post(details);
        }
    }
]);
