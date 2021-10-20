app.service("inviteService",function(Restangular, $cookies, APP_CONSTANTS){
    
    Restangular.setDefaultHeaders({
        Authorization: `token ${$cookies.get('token')}`
    })

    this.getUserInvites = function(){
        return Restangular.one(APP_CONSTANTS.API_ENDPOINT.INVITE).get();
    }

    this.acceptInvite = function(id){
        return Restangular.one(APP_CONSTANTS.API_ENDPOINT.POKERBOARD, `${id}/invite/`).patch();
    }

    this.deleteInvite = function(id){
        return Restangular.one(APP_CONSTANTS.API_ENDPOINT.INVITE, id).remove();
    }
})