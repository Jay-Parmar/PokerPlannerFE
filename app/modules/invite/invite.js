app.controller('inviteCtrl',function ($scope, data, inviteService) {
    $scope.invites = data
    $scope.accept = function(invite){
        inviteService.acceptInvite(invite.pokerboard).then(function(){
            $scope.show = true
            $scope.message = "Accepted"
            invite.status = 1
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
