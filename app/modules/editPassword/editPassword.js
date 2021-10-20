app.controller("editPassword", function ($scope, $state, profileService, $rootScope) {

    $scope.save = function () {
        let data = {
            "password": $scope.newpassword,
            "old_password": $scope.oldpassword,
        }
        profileService.changePassword(data, $rootScope.id).then(function(response){
            alert("Change Successfull")
            $state.go('profile')
        },function(response){
            console.log(response)
            alert("save unsuccessfull")
        })
    }

})