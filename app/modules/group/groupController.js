app.controller('groupCtrl', [
    '$scope', '$state', 'groupServices', '$mdToast',
    function (
        $scope, $state, groupServices, $mdToast
    ) {
        $scope.groups = []
        $scope.getGroupsList = () => {
            groupServices.getGroups().
            then(function(response){
                $scope.groups = response
            },function(errors){
                console.log(errors)
                $mdToast.show({
                    template: '<md-toast>' +
                    '<div class="md-toast-content" id="toaster">' +
                      errors.data[0] +
                    '</div>' +
                  '</md-toast>',
                    hideDelay: 4000,
                    position: 'bottom'
                })
            })
        }   

        $scope.createGroup = () => {
            groupServices.createGroup({name: $scope.groupName}).
            then(function(response){
                $state.go('group_detail', { "id": response.id });
            }, function(errors){
                console.log(errors)
                $mdToast.show({
                    template: '<md-toast>' +
                    '<div class="md-toast-content" id="toaster">' +
                      errors.data.name[0] +
                    '</div>' +
                  '</md-toast>',
                    hideDelay: 4000,
                    position: 'bottom'
                })
            })
        }

        $scope.goToGroup = (id) => {
            $state.go('group_detail', { "id": id });
        }

        $scope.getGroupsList()
    }
]);