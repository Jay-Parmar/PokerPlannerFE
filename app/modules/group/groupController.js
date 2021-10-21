app.controller('groupCtrl', [
    '$scope', '$state', 'groupServices', '$stateParams',

    function (
        $scope, $state, groupServices, $stateParams
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
                $state.reload()
            }, function(errors){

            })
        }

        $scope.goToGroup = id => {
            console.log(id)
            $state.go('group', { "id": id });
        }
    }
]);