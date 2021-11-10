app.controller('homepageCtrl',function ($scope, $state) {
    $scope.login = function(){
        $state.go('login')
    }

    $scope.signup = function(){
        $state.go('signup')
    }
});
