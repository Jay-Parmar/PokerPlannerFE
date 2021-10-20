app.controller('pokerboardMembersCtrl', [
    '$state', '$scope', '$rootScope', '$stateParams', 'memberService', 'pokerboardService', 'APP_CONSTANTS',
    function($state, $scope, $rootScope, $stateParams, memberService, pokerboardService, APP_CONSTANTS){
        
        $scope.pokerboard = {};
        const pokerboardId = $stateParams.pid;
        $scope.isManager = false;

        pokerboardService.getPokerboardDetails(pokerboardId).then(response => {
            $scope.pokerboard = response;
            $scope.isManager = ($rootScope.user.email == response.manager.email);
        });

        memberService.getMembers(pokerboardId).then(response => {
            $scope.members = [];
            const parse = member => {
                $scope.members.push({
                    id: member.id,
                    group: member.group,
                    group_name: member.group_name ? member.group_name : "-",
                    role: member.role
                });
            }
            response.forEach(parse);
        }, error => {
            alert("Page not found!");
            console.log(error);
        })

        $scope.removeMember = (curr_id) => {
            memberService.removeMember(curr_id);
            $scope.members = $scope.members.filter(member => member.id != curr_id);
        }
    }
]);
