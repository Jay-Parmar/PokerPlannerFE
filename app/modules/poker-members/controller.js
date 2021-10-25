app.controller('pokerboardMembersCtrl', [
    '$state', '$scope', '$rootScope', '$stateParams', 'memberService', 'pokerboardService', 'APP_CONSTANTS',
    function($state, $scope, $rootScope, $stateParams, memberService, pokerboardService, APP_CONSTANTS){
        
        $scope.pokerboard = {};
        const pokerboardId = $stateParams.pid;
        $scope.isManager = true;
        $scope.members = [];

        pokerboardService.getPokerboardDetails(pokerboardId).then(response => {
            $scope.pokerboard = response;
            console.log(response)
            // $scope.isManager = ($rootScope.user.email == response.manager.email);
        });

        memberService.getMembers(pokerboardId).then(response => {
            $scope.members = response
        }, error => {
            console.log(error);
        });
        
        
        $scope.removeMember = (curr_id) => {
            memberService.removeMember(curr_id);
            $scope.members = $scope.members.filter(member => member.id != curr_id);
        }
    }
]);
