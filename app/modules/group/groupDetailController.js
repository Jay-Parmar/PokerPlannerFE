app.controller('groupDetailController', [
    '$scope', '$state', 'groupServices', '$stateParams', '$cookies',

    function (
        $scope, $state, groupServices, $stateParams, $cookies
    ) {
        const groupId = $stateParams.id
        $scope.group = {}
        $scope.user = $cookies.get('id')
        $scope.getGroupDetails = () => {
            groupServices.getGroupDetails(groupId)
            .then(function(response){
                $scope.group = response
                console.log(response)
            }, function(err){

            })
        }

        $scope.addMember = () => {
            groupServices.addMember($scope.email, groupId)
            .then(function(response){
                $state.go('group')
            }, function(err){
                
            })
        }

        $scope.removeMember = () => {
            groupServices.removeMember($scope.deleteEmail, groupId)
            .then(function(response){

            }, function(err){

            })
        }
    }
]);