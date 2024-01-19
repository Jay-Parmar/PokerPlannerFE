app.controller("editPassword", function ($scope, $state, profileService, $rootScope, $mdToast) {

    $scope.save = function () {
        let data = {
            "password": $scope.newpassword,
            "old_password": $scope.oldpassword,
        }
        profileService.changePassword(data, $rootScope.id).then(function(response){
            $mdToast.show({
                template: '<md-toast>' +
                '<div class="md-toast-content" id="toaster">' +
                  'Changed Successfully' +
                '</div>' +
              '</md-toast>',
                hideDelay: 4000,
                position: 'bottom'
            })
            $state.go('profile')
        },function(response){
            console.log(response)
            $mdToast.show({
                template: '<md-toast>' +
                '<div class="md-toast-content" id="toaster">' +
                  'Error Saving the details: ' + response.data.old_password[0] +
                '</div>' +
              '</md-toast>',
                hideDelay: 4000,
                position: 'bottom'
            })
        })
    }

})