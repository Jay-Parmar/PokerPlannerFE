app.controller('LoginController', 
    function ($scope, $state, loginService, $cookies, $rootScope) {

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
            loginService.login(user).then(function (response) {
                $rootScope.user = {
                    token: response.token,
                    id: response.user_id,
                    first_name: response.first_name,
                    last_name: response.last_name,
                    email: response.email
                }
                $cookies.put('token', response.token)
                alert("Login Successful")
                // $state.go('pokerboard');
            }, function (response) {
                $scope.errors = response.data.non_field_errors
            });
        }
    });
