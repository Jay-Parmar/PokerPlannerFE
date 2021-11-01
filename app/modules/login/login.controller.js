app.controller('LoginController', 
    function ($scope, $state, loginService, $cookies, $rootScope) {

        $scope.showpassword = false

        $scope.togglePassword = function(){
            $scope.showpassword = !$scope.showpassword;
        }

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
                $rootScope.user = {
                    token: response.token,
                    id: response.id,
                    first_name: response.first_name,
                    last_name: response.last_name,
                    email: response.email,
                    hasJiraCreds: false,
                }
                console.log("root useer", $rootScope.user)
                $cookies.put('user', JSON.stringify($rootScope.user))
                $cookies.put('token', response.token)
                $cookies.put('id', response.id)
                $state.go('pokerboards');
            }, function (response) {
                $scope.errors = response.data.non_field_errors
            });
        }
    });
