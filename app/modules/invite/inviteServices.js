app.service("inviteService",function(Restangular, $cookies, APP_CONSTANTS){
    
    Restangular.setDefaultHeaders({
        Authorization: `token ${$cookies.get('token')}`
    })

    this.getUserInvites = function(){
        return Restangular.one(APP_CONSTANTS.API_ENDPOINT.INVITE).get();
    }

    this.acceptInvite = function(id){
        url = APP_CONSTANTS.API_ENDPOINT.INVITE + id + "/"
        return Restangular.all(url).patch();
    }

    this.deleteInvite = function(id){
        url = APP_CONSTANTS.API_ENDPOINT.INVITE + id + "/"
        return Restangular.one(url).remove();
    }

    this.getManagerInvites = function(data){
        url = "?pokerboard="+data
        return Restangular.one(APP_CONSTANTS.API_ENDPOINT.MANAGER_INVITES+url).get();
    }
})