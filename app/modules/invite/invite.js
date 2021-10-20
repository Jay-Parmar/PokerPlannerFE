app.controller('inviteCtrl',function ($scope, data, inviteService) {
    $scope.invites = data
    $scope.accept = function(invite){
        inviteService.acceptInvite(invite.pokerboard).then(function(){
            $scope.show = true
            $scope.message = "Accepted"
            invite.is_accepted = true
        }, function(){
            
        })
    }
    $scope.decline = function(y){
        inviteService.deleteInvite(invite.id).then(function(){
        $scope.show = true
        $scope.message = "Declined"
        invite.is_accepted = true
        }, function(){

        })
    }   
});
