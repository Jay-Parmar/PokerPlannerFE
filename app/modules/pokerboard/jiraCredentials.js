app.controller('jiraCredentialsCtrl', [
    '$scope', '$state', 'APP_CONSTANTS', 'pokerboardService', 
    function($scope, $state, APP_CONSTANTS, pokerboardService){
        $scope.createPokerboard = function(){
            let details = {
                "url": $scope.url,
                "username": $scope.username,
                "password": $scope.password
            }
            pokerboardService.saveCredentials(details).then(function(){
                $state.go(APP_CONSTANTS.NAME.POKER_CREATE)
            })
        }
    }
]);
