app.controller('SignupController', function ($scope, $state, signUpService) {

  $scope.toLogin = function () {
    $state.go("login");
  }
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
        alert("SignUp Successfull");
        $state.go("login");
      },
        function (response) {
          console.log(response);
          alert("SignUp Failed");
        }
      );
  };
});
