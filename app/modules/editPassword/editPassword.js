app.controller("editPassword", function ($scope, $state, profileService, $rootScope) {

    $scope.save = function () {
        let data = {
            "password": $scope.newpassword,
            "old_password": $scope.oldpassword,
        }
        profileService.changePassword(data, $rootScope.id).then(function(response){
            $scope.message = "Password changed"
            $state.go('profile')
        },function(response){
            $scope.message = response.data.old_password.old_password
        })
    }

})