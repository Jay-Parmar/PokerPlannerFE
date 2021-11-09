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

        this.getJiraDetails = function(){
            url = APP_CONSTANTS.API_ENDPOINT.GET_JIRA_CREDENTIALS + "?user_id=" + $cookies.get('id')
            return Restangular.one(url).get();
        };

        this.orderTickets = (tickets, pokerboardId) => {
            return Restangular.one(`pokerboards/${pokerboardId}/order-tickets`).put(tickets);
        };

        this.inviteUser = function(user){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.INVITE).post(user)
        }

        this.saveCredentials = function(details){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.POST_JIRA_CREDENTIALS).post(details);
        }

        this.updateCredentials = function(details){
            return Restangular.all(APP_CONSTANTS.API_ENDPOINT.UPDATE_JIRA_CREDENTIALS).patch(details);
        }
    }
]);
