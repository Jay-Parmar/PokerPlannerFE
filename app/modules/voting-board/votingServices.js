app.service('votingService', ['APP_CONSTANTS', 'Restangular', function (APP_CONSTANTS, Restangular) {
    this.signup = function (user) {
        return Restangular.all(APP_CONSTANTS.API_ENDPOINT.SIGNUP).post(user);
    }

    this.postComment = function(comment){
        return Restangular.all(APP_CONSTANTS.API_ENDPOINT.COMMENT).post(comment)
    }

    this.vote = function(vote){
        return Restangular.all(APP_CONSTANTS.API_ENDPOINT.VOTE).post(vote)
    }

    // this.getComments = function(){
    //     return Restangular.all(APP_CONSTANTS.API_ENDPOINT.COMMENT).get()
    // }

    // this.getVotes = function(){
    //     return Restangular.all(APP_CONSTANTS.API_ENDPOINT)
    // }
}])
