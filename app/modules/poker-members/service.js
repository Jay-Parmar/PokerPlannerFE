app.service('memberService', [
    'Restangular', 'APP_CONSTANTS',
    function(Restangular, APP_CONSTANTS){

        this.getMembers = pokerboardId => {
            url = APP_CONSTANTS.API_ENDPOINT.MEMBERS + '/' + pokerboardId + '/'
            return Restangular.one(url).get();
        }

        this.removeMember = pokerboardMemberId => {
            url = APP_CONSTANTS.API_ENDPOINT.MEMBERS + pokerboardMemberId + '/'
            return Restangular.all(url).remove();
        }
    }
]);
