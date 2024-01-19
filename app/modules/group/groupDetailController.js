app.controller('groupDetailController', [
    '$scope', '$state', 'groupServices', '$stateParams', '$cookies', '$mdToast',

    function (
        $scope, $state, groupServices, $stateParams, $cookies, $mdToast
    ) {
        $scope.user_id = $cookies.get('id')
        const groupId = $stateParams.id
        $scope.group = {}
        $scope.user = $cookies.get('id')
        $scope.getGroupDetails = () => {
            groupServices.getGroupDetails(groupId)
            .then(function(response){
                $scope.group = response
                console.log($scope.group)
            }, function(err){
                $state.go("PAGE_404")
            })
        }

        $scope.addMember = () => {
            groupServices.addMember($scope.email, groupId)
            .then(function(response){
                $state.go('group')
            }, function(err){
                console.log(err)
                msg = err.data['non_field_errors'][0]
                $mdToast.show({
                    template: '<md-toast>' +
                    '<div class="md-toast-content" id="toaster">' +
                      msg +
                    '</div>' +
                  '</md-toast>',
                    hideDelay: 4000,
                    position: 'bottom'
                })
            })
        }

        $scope.removeMember = (user) => {
            groupServices.removeMember(user.id, groupId)
            .then(function(){
                $scope.group.members = $scope.group.members.filter(member => member.id != user.id)
            }, function(err){
                console.log(err)
            })
        }
    }
]);