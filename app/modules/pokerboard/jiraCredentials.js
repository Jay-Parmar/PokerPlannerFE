app.controller('jiraCredentialsCtrl', [
    '$scope', '$state', 'APP_CONSTANTS', 'pokerboardService', '$cookies',
    function($scope, $state, APP_CONSTANTS, pokerboardService, $cookies){
        $scope.errmsg = null
        
        pokerboardService.getJiraDetails().then(function(){
            $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
        }, function(){
        })

        $scope.createPokerboard = function(){
            let details = {
                "url": $scope.url,
                "username": $scope.username,
                "password": $scope.password
            }
            pokerboardService.saveCredentials(details).then(function(response){
                let user = JSON.parse($cookies.get('user'))
                user.hasJiraCreds = true
                $cookies.put('user', JSON.stringify(user))
                $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
            }, function(err){
                $scope.errmsg = (err.data[0])? err.data[0] : ((err.data.non_field_errors)?
                err.data.non_field_errors[0]: JSON.stringify(err.data))
                if($scope.errmsg=="Credentials already present"){
                    let user = JSON.parse($cookies.get('user'))
                    user.hasJiraCreds = true
                    $cookies.put('user', JSON.stringify(user))
                    $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
                }
            })
        }
    }
]);
