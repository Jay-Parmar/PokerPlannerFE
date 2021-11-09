app.controller('jiraUpdateCtrl',
    function($scope, $state, $mdToast, APP_CONSTANTS, pokerboardService, $cookies, profileService){
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
                $mdToast.show({
                    template: '<md-toast>' +
                    '<div class="md-toast-content" id="toaster">' +
                      "Change Successfull"+
                    '</div>' +
                  '</md-toast>',
                    hideDelay: 4000,
                    position: 'bottom'
                })
                $state.go('profile')
            }, function(response){ 
                $scope.errmsg = 'Invalid Credentials'
            })
        }
    }
);
