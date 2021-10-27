app.service('memberService', [
    'Restangular', 'APP_CONSTANTS',
    function(Restangular, APP_CONSTANTS){

        this.getMembers = pokerboardId => {
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.MEMBERS, pokerboardId).get();
        }

        this.removeMember = pokerboardMemberId => {
            return Restangular.one(APP_CONSTANTS.API_ENDPOINT.MEMBERS, pokerboardMemberId).remove();
        }
    }
]);
