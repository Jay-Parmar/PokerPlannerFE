app.controller('inviteCtrl',function ($scope, $state, data, inviteService, APP_CONSTANTS) {
    $scope.invites = data
    $scope.accept = function(invite){
        inviteService.acceptInvite(invite.id).then(function(){
            $scope.show = true
            $scope.message = "Accepted"
            invite.status = 1
            $state.go(APP_CONSTANTS.NAME.POKER_DETAIL, {id: invite.pokerboard})
        }, function(){
            
        })
    }
    $scope.decline = function(invite){
        inviteService.deleteInvite(invite.id).then(function(){
        $scope.show = true
        $scope.message = "Declined"
        invite.status = 2
        }, function(){

        })
    }   
});
