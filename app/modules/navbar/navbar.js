app.controller('navigationCtrl',[
    '$scope', '$state', '$cookies', '$rootScope', '$window', 'APP_CONSTANTS',
    function($scope, $state, $cookies, $rootScope, $window, APP_CONSTANTS){
        
        if($cookies.get('token')) {
            $rootScope.isAuth = true;
        }else{
            $rootScope.isAuth = false;
        }
        
        $scope.logout = function(){
            $cookies.remove('token');
            $state.go(APP_CONSTANTS.NAME.LOGIN);
        };

        $scope.toPokerList = function(){
            $state.go(APP_CONSTANTS.NAME.POKER_LIST);
        };

        $scope.back = function(){
            $window.history.back();
        };

        $scope.createBoard = function(){
            $state.go(APP_CONSTANTS.NAME.JIRA_CREDENTIALS);
        };

        $scope.profile = function(){
            $state.go(APP_CONSTANTS.NAME.PROFILE);
        };

        $scope.signup = function(){
            $state.go(APP_CONSTANTS.NAME.SIGNUP);
        };

        $scope.login = function(){
            $state.go(APP_CONSTANTS.NAME.LOGIN);
        };
    }
]);
