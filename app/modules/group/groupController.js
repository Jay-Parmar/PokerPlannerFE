app.controller('groupCtrl', [
    '$scope', '$state', 'groupServices',
    function (
        $scope, $state, groupServices,
    ) {
        $scope.groups = []
        $scope.getGroupsList = () => {
            groupServices.getGroups().
            then(function(response){
                $scope.groups = response
            },function(errors){
                console.log(errors)
            })
        }   

        $scope.createGroup = () => {
            groupServices.createGroup({name: $scope.groupName}).
            then(function(response){
                $state.reload()
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