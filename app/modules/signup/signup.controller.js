app.controller('SignupController', function ($scope, $state, signUpService) {

  $scope.showpassword = false

  $scope.togglePassword = function(){
    $scope.showpassword = !$scope.showpassword;
  }

  $scope.toLogin = function () {
    $state.go("login");
  }

  $scope.errors = []

  $scope.signUp = function () {
    let user = 
      {
        "email": $scope.email,
        "password": $scope.password,
        "first_name": $scope.first_name,
        "last_name": $scope.last_name
      };
    signUpService.signup(user)
      .then(function (response) {
        $state.go("login");
      },
        function (response) {
          $scope.errors = response.data.email
        }
      );
  };
  $scope.params = {};
  
  $scope.showPassword = false;
  
  $scope.toggleShowPassword = function() {
    $scope.showPassword = !$scope.showPassword;
  }
});
