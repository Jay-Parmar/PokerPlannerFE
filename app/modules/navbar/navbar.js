app.controller('navigationCtrl',[
    '$scope', '$state', '$cookies', '$rootScope', '$window', 'APP_CONSTANTS', 'navbarService', 'Restangular', 
    function($scope, $state, $cookies, $rootScope, $window, APP_CONSTANTS, navbarService, Restangular){
        
        $rootScope.$watch('user', function(newValue, oldValue){
            if($cookies.get('token')) {
                $rootScope.isAuth = true;
            }else{
                $rootScope.isAuth = false;
            }
        }, true);

        $scope.logout = function(){
            navbarService.logout();
            $cookies.remove('token');
            $rootScope.user = undefined
            Restangular.setDefaultHeaders({})
            $state.go(APP_CONSTANTS.NAME.LOGIN);
        };

        $scope.toPokerList = function(){
            $state.go(APP_CONSTANTS.NAME.POKER_LIST);
        };

        $scope.back = function(){
            $window.history.back();
        };

        $scope.toCreateBoard = function(){
            $state.go(APP_CONSTANTS.NAME.JIRA_CREDENTIALS);
        };

        $scope.toGroup = function(){
            $state.go(APP_CONSTANTS.NAME.GROUP);
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

        $scope.invites = function(){
            $state.go(APP_CONSTANTS.NAME.INVITE)
        }
    }
]);
