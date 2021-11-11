app.controller('pokerboardMembersCtrl', [
    '$state', '$scope', '$cookies', '$stateParams', 'memberService', 'pokerboardService', 'APP_CONSTANTS',
    function($state, $scope, $cookies, $stateParams, memberService, pokerboardService, APP_CONSTANTS){
        
        $scope.pokerboard = {};
        const pokerboardId = $stateParams.pid;
        $scope.user_id = $cookies.get('id');
        $scope.members = [];

        pokerboardService.getPokerboardDetails(pokerboardId).then(response => {
            $scope.pokerboard = response;
        });

        memberService.getMembers(pokerboardId).then(response => {
            $scope.members = response.filter(member => member.user.id != $scope.pokerboard.manager.id)
        }, error => {
            console.log(error);
        });
        
        
        $scope.removeMember = (curr_id) => {
            memberService.removeMember(curr_id);
            $scope.members = $scope.members.filter(member => member.id != curr_id);
        }
    }
]);
