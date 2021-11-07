app.controller('pokerboardCtrl', [
    '$state', '$scope', 'pokerboardService', 'Restangular', '$cookies', '$rootScope',
    function($state, $scope, pokerboardService, Restangular, $cookies, $rootScope){
        
        $scope.goToPokerboard = id => {
            $state.go('pokerboard', {'id': id});
        }

        pokerboardService.getPokerboards().then(response => {
            $scope.boardList = [];
            const parse = ele => {
                $scope.boardList.push({
                    id: ele.id,
                    title: ele.title,
                    description: ele.description,
                    date: new Date(ele.created_at).toLocaleDateString(),
                    manager_name: ele.manager.first_name + " " + ele.manager.last_name,
                    manager: ele.manager,
                });
            };

            response.forEach(parse);
        }, error => {
            $state.go(APP_CONSTANTS.NAME.PAGE_404)
        });
    }
]);
