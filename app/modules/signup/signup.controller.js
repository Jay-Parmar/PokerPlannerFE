console.log("in app signupcontroller");
app.controller('SignupController', function ($scope, $state, signUpService) {

  $scope.toLogin = function () {
    $state.go("login");
  }
  $scope.signUp = function () {
    console.log("in sigup");
    let user = {"user":
      {
        "email": $scope.email,
        "password": $scope.password,
        "first_name": $scope.first_name,
        "last_name": $scope.last_name
      }
    };
    signUpService.signup(user)
      .then(function (response) {
        alert("SignUp Successfull");
        $state.go("login");
      },
        function (response) {
          alert("SignUp Failed");
          $scope.msg = response.data.errors;
        }
      );
  };

});
