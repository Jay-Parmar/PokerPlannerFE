app.controller('groupDetailController', [
    '$scope', '$state', 'groupServices', '$stateParams',

    function (
        $scope, $state, groupServices, $stateParams
    ) {
        const groupId = $stateParams.id

        $scope.getGroupDetails = () => {
            groupServices.getGroupDetails(groupId)
            .then(function(response){
                
            }, function(err){

            })
        }

        $scope.addMember = () => {
            groupServices.addMember($scope.email, groupId)
            .then(function(response){

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