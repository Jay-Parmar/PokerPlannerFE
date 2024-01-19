app.service('votingService', ['APP_CONSTANTS', 'Restangular', '$websocket', function (APP_CONSTANTS, Restangular, $websocket) {
    this.signup = function (user) {
        return Restangular.all(APP_CONSTANTS.API_ENDPOINT.SIGNUP).post(user);
    }

    this.postComment = function(comment){
        return Restangular.all(APP_CONSTANTS.API_ENDPOINT.COMMENT).post(comment)
    }

    this.vote = function(vote){
        return Restangular.all(APP_CONSTANTS.API_ENDPOINT.VOTE).post(vote)
    }

    this.getSession = function(sessionId){
        const sessionUrl = APP_CONSTANTS.API_ENDPOINT.SESSION + '/' +sessionId + '/' 
        return Restangular.one(sessionUrl).get()
    }

    this.getComments = function(sessionId){
        return Restangular.one(APP_CONSTANTS.API_ENDPOINT.COMMENT).get(sessionId);
    }

    this.getIssue = sessionId => {
        return Restangular.one(APP_CONSTANTS.API_ENDPOINT.JIRA_TICKET).get(sessionId);
    }

    // this.getVotes = function(){
    //     return Restangular.all(APP_CONSTANTS.API_ENDPOINT)
    // }

    this.wsConnect = (sessionId, token, pokerboardId) => {
        return $websocket(APP_CONSTANTS.BASE_URL_WS + "session/" + sessionId + "?token=" + token + "&pid=" + pokerboardId);
    }

}])
