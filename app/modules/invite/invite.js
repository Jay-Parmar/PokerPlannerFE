app.controller('inviteCtrl',function ($scope, $state, data, inviteService, APP_CONSTANTS, $mdToast) {
    $scope.invites = data
    $scope.accept = function(invite){
        inviteService.acceptInvite(invite.id).then(function(){
            $scope.show = true
            $scope.message = "Accepted"
            invite.status = 1
            $mdToast.show({
                template: '<md-toast>' +
                '<div class="md-toast-content" id="toaster">' +
                  "Welcome to the pokerboard"+
                '</div>' +
              '</md-toast>',
                hideDelay: 4000,
                position: 'bottom'
            })
            $state.go(APP_CONSTANTS.NAME.POKER_DETAIL, {id: invite.pokerboard})
        }, function(){
            $mdToast.show({
                template: '<md-toast>' +
                '<div class="md-toast-content" id="toaster">' +
                  "Error accepting the invite"+
                '</div>' +
              '</md-toast>',
                hideDelay: 4000,
                position: 'bottom'
            })
        })
    }
    $scope.decline = function(invite){
        inviteService.deleteInvite(invite.id).then(function(){
        $scope.show = true
        $scope.message = "Declined"
        invite.status = 2
        $mdToast.show({
            template: '<md-toast>' +
            '<div class="md-toast-content" id="toaster">' +
              "Declined"+
            '</div>' +
          '</md-toast>',
            hideDelay: 4000,
            position: 'bottom'
        })
        }, function(){
            $mdToast.show({
                template: '<md-toast>' +
                '<div class="md-toast-content" id="toaster">' +
                  "Error declining the request"+
                '</div>' +
              '</md-toast>',
                hideDelay: 4000,
                position: 'bottom'
            })
        })
    }   
});
