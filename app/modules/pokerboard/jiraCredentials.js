app.controller('jiraCredentialsCtrl', [
    '$scope', '$state', '$rootScope', 'APP_CONSTANTS', 'pokerboardService', 
    function($scope, $state, $rootScope, APP_CONSTANTS, pokerboardService){
        $scope.invalidCredentials = false
        $scope.noTickets = false

        if($rootScope.user.hasJiraCreds){
            $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
        }

        $scope.createPokerboard = function(){
            let details = {
                "url": $scope.url,
                "username": $scope.username,
                "password": $scope.password
            }
            pokerboardService.saveCredentials(details).then(function(response){
                $rootScope.user.hasJiraCreds = true
                $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
            }, function(err){
                let errmsg = err.data[0]
                if(errmsg == "Invalid Credentials"){
                    $scope.invalidCredentials = true
                }else if(errmsg == "No issue tickets Found"){
                    $scope.noTickets = true
                }else if(errmsg == "Credentials already present"){
                    $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
                }
            })
        }
    }
]);
