app.controller('LoginController',function($scope,$state){
    $scope.toSingUp=function(){
        $scope.go("signup")
    }
})
