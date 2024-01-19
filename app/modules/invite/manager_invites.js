app.controller('managerCtrl',function ($scope, inviteService, $stateParams) {
    
    inviteService.getManagerInvites($stateParams.pid).then(function(response){
        $scope.invites = response
    })  
});
