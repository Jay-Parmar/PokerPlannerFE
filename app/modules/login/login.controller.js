app.controller('LoginController', function ($scope, $state, loginService, $rootScope) {

        $scope.toSignUp = function () {
            $state.go("signup")
        }

        $scope.login = function () {
            console.log("in login button");
            let user = {
                "user":
                {
                    "email": $scope.email,
                    "password": $scope.password
                }
            };
            loginService.login(user).then(function (response) {
                const user = {
                    token: response.token,
                    id: response.id,
                    first_name: response.first_name,
                    last_name: response.last_name,
                    email: response.email
                }
                $state.go('pokerboard');
            }, function () {

            });
        }
});
