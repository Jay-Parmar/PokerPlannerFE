app.controller('SignupController',function($scope,$state,Restangular){

    $scope.toLogin=function(){
        
        $state.go("login");
    
    }

    $scope.signUp = function () {
        let user = { "user":
            {
              "username":$scope.username,
              "email": $scope.email,
              "password": $scope.password,
              "first_name":$scope.first_name,
              "last_name":$scope.last_name
            }
            };
    
        Restangular.all('user').post(user)
        .then(function (response) {
          },
          function (response) {
            console.log("signup failed");
            console.log(response);
            $scope.msg=response.data.errors;
          }
        );
    
    };

});
