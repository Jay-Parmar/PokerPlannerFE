app.controller('jiraCredentialsCtrl', [
    '$scope', '$state', '$rootScope', 'APP_CONSTANTS', 'pokerboardService', '$cookies',
    function($scope, $state, $rootScope, APP_CONSTANTS, pokerboardService, $cookies){
        $scope.errmsg = null

        if(JSON.parse($cookies.get('user')).hasJiraCreds){  // have to connect with backend
            $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
        }

        $scope.createPokerboard = function(){
            let details = {
                "url": $scope.url,
                "username": $scope.username,
                "password": $scope.password
            }
            pokerboardService.saveCredentials(details).then(function(response){
                let user = JSON.parse($cookies.get('user'))
                user.hasJiraCreds = true
                $rootScope.user.hasJiraCreds = true
                $cookies.put('user', JSON.stringify(user))
                $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
            }, function(err){
                $scope.errmsg = (err.data[0])? err.data[0] : ((err.data.non_field_errors)?
                err.data.non_field_errors[0]: JSON.stringify(err.data))
                if($scope.errmsg=="Credentials already present"){
                    let user = JSON.parse($cookies.get('user'))
                    user.hasJiraCreds = true
                    $rootScope.user.hasJiraCreds = true
                    $cookies.put('user', JSON.stringify(user))
                    $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
                }
            })
        }
    }
]);
