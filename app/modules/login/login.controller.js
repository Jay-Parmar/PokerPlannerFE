app.controller('LoginController', 
    function ($scope, $state, loginService, $cookies, $rootScope, APP_CONSTANTS) {

        $scope.toSignUp = function () {
            $state.go("signup");
        }

        $scope.errors = []

        $scope.login = function () {
            let user =
            {
                "email": $scope.email,
                "password": $scope.password
            };
            loginService.login(user).then(function(response){
                if(!response.is_verified){
                    $state.go('verifyemail', {"uid": response.id});
                }else{
                    $cookies.put('user', JSON.stringify($rootScope.user))
                    $cookies.put('token', response.token)
                    $state.go('pokerboards');
                }
            }, function (response) {
                $scope.errors = response.data.non_field_errors
            });
        }
    });
