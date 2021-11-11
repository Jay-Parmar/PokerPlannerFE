app.controller('404Ctrl',function ($scope, $state, $cookies) {
      $scope.goToDashboard = function(){
        if($cookies.get('token'))  
            $state.go('pokerboards')
        else 
            $state.go('homepage')
      }
});
