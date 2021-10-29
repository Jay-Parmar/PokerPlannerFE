app.controller('groupCtrl', [
    '$scope', '$state', 'groupServices', 'APP_CONSTANTS',
    function (
        $scope, $state, groupServices, APP_CONSTANTS
    ) {
        $scope.groups = []
        $scope.getGroupsList = () => {
            groupServices.getGroups().
            then(function(response){
                $scope.groups = response
            },function(errors){
                
            })
        }   

        $scope.createGroup = () => {
            groupServices.createGroup({name: $scope.groupName}).
            then(function(response){
                $state.go('group_detail', { "id": response.id });
            }, function(errors){
                console.log(errors)
            })
        }

        $scope.goToGroup = (id) => {
            console.log(id)
            $state.go('group_detail', { "id": id });
        }

        $scope.getGroupsList()
    }
]);