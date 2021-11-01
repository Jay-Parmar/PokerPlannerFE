app.controller('jiraUpdateCtrl',
    function($scope, $state, $rootScope, APP_CONSTANTS, pokerboardService, $cookies, profileService){
        profileService.getJiraCredentials($cookies.get('id')).then(function(response){
            $scope.url = response[0].url
            $scope.username = response[0].username
            $scope.password = response[0].password
        }, function(response){
            console.log(response)
        })
        $scope.showpassword = false

        $scope.togglePassword = function(){
            $scope.showpassword = !$scope.showpassword;
        }

        $scope.cancel = function(){
            $state.go('profile')
        }

        $scope.save = function(){
            let details = {
                "url": $scope.url,
                "username": $scope.username,
                "password": $scope.password
            }
            pokerboardService.updateCredentials(details).then(function(response){
                $state.go('profile')
            }, function(response){ 
            })
        }
    }
);
